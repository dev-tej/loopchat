import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  PhoneAuthProvider,
  signInWithCredential,
  signInWithPhoneNumber,
} from "firebase/auth";
import OtpInput from "react-otp-input";
import * as ROUTES from "constants/routes";
import useAuth from "hooks/useAuth";
import { auth, initializeRecaptchaVerifier } from "services/firebase";
import { getMaskedPhoneNumber } from "utils";
import CustomSpinner from "components/CustomSpinner";
import "./index.css";

function VerifyOtp() {
  return (
    <>
      <div id="recaptcha-container"></div>
      <RenderVerifyOtp />
    </>
  );
}

export default VerifyOtp;

function RenderVerifyOtp() {
  const location = useLocation();
  const navigate = useNavigate();

  const verificationId = location?.state?.verificationId || "";
  const number = location?.state?.number || "9848913028";

  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const { setToken, setUser } = useAuth();

  useEffect(() => {
    if (otp?.length === 6) {
      handleVerifyOTP();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle Request OTP
  const handleRequestOtp = () => {
    setLoading(true);
    try {
      initializeRecaptchaVerifier();
      const verifier = window.recaptchaVerifier;
      let formattedNumber = `+91${number}`;
      signInWithPhoneNumber(auth, formattedNumber, verifier)
        .then((confirmationResult) => {
          console.log("OTP sent", confirmationResult?.verificationId);
          setLoading(false);
        })
        .catch((error) => {
          console.error("OTP failed", error);
          setLoading(false);
        });
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  // Handle Verify OTP
  function handleVerifyOTP() {
    setLoading(true);
    try {
      const credential = PhoneAuthProvider.credential(verificationId, otp);
      signInWithCredential(auth, credential)
        .then((userCredential) => {
          setUser(userCredential.user);
          setToken(userCredential.user.getIdToken());
          console.log("OTP verified", userCredential.user);
          setLoading(false);
          navigate(ROUTES.ADD_NAME);
        })
        .catch((error) => {
          console.error("OTP verification failed", error);
          setLoading(false);
        });
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  }

  return loading ? (
    <CustomSpinner loading={loading} />
  ) : (
    <>
      <div className="verify-otp-container">
        <div className="verify-otp-container__header-section">
          <h1 className="primary-header">Enter code</h1>
          <h3 className="secondary-header">
            We’ve sent the code via SMS to&nbsp;
            <span>+91{getMaskedPhoneNumber(number)}</span>.
          </h3>
        </div>
        <div className="verify-otp-container__otp-section">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>&nbsp;</span>}
            renderInput={(props) => (
              <input
                {...props}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
              />
            )}
          />
        </div>
      </div>
      <div className="verify-otp__resend-code-container">
        <p className="verify-otp__resend-code-container__helper-text">
          Didn’t get the code?{" "}
          <span onClick={() => handleRequestOtp()}>Resend code</span>
        </p>
      </div>
    </>
  );
}