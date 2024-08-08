import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPhoneNumber } from "firebase/auth";
import { Toaster } from "react-hot-toast";
import * as ROUTES from "constants/unAuthenticatedRoutes";
import { auth, initializeRecaptchaVerifier } from "services/firebase";
import useToast from "hooks/useToast";
import CustomInput from "components/CustomInput";
import CustomButton from "components/CustomButton";
import CustomSpinner from "components/CustomSpinner";
import RegionIcon from "assets/Verify/Region.svg";
import { ReactComponent as PhoneIcon } from "assets/Verify/Phone.svg";
import "./index.css";

function VerifyPhone() {
  return (
    <>
      <div id="recaptcha-container"></div>
      <RenderVerifyPhone />
    </>
  );
}

export default VerifyPhone;

function RenderVerifyPhone() {
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState("");
  const navigate = useNavigate();
  const { notify } = useToast();

  const handleNumberChange = (value) => {
    setNumber(value);
  };

  // Handle Request OTP
  const handleRequestOtp = (num) => {
    setLoading(true);
    try {
      initializeRecaptchaVerifier();
      const verifier = window.recaptchaVerifier;
      let formattedNumber = `+91${num}`;
      signInWithPhoneNumber(auth, formattedNumber, verifier)
        .then((confirmationResult) => {
          console.log("OTP sent", confirmationResult?.verificationId);
          notify("OTP sent successfully", "success");
          setLoading(false);
          navigate(ROUTES.VERIFY_OTP, {
            state: {
              verificationId: confirmationResult?.verificationId,
              number,
            },
          });
        })
        .catch((error) => {
          notify("OTP failed", "error");
          console.error("OTP failed", error);
          setLoading(false);
        });
    } catch (e) {
      notify("OTP failed", "error");
      console.error(e);
      setLoading(false);
    }
  };

  return loading ? (
    <CustomSpinner loading={loading} helperText={"Sending OTP..."} />
  ) : (
    <>
      <Toaster position="top-center" />
      <div className="verify-phone-container">
        <div className="verify-phone-container__header-section">
          <h1 className="primary-header">Enter your phone number</h1>
          <h3 className="secondary-header">
            Please confirm your region and enter your phone number.
          </h3>
        </div>
        <div className="verify-phone-container__info-section">
          <div className="verify-phone-container__info-section__region-container">
            <img src={RegionIcon} alt="region-icon" />
            <h3>India(+91)</h3>
          </div>
          <CustomInput
            icon={PhoneIcon}
            initialValue={""}
            onInputChange={handleNumberChange}
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={10}
          />
        </div>
      </div>
      <CustomButton
        text="Continue"
        onClick={() => handleRequestOtp(number)}
        disabled={number?.length < 10}
      />
    </>
  );
}
