import { useNavigate } from "react-router-dom";
import * as ROUTES from "constants/routes";
import CustomButton from "components/CustomButton";
import Illustration from "assets/Onboarding/Illustration.svg";
import "./index.css";

function Onboarding() {
  const navigate = useNavigate();

  return (
    <>
      <div className="onboarding-container">
        <h1 className="main-header">What's Up</h1>
        <div className="onboarding-container__illustration-section">
          <img src={Illustration} alt="Illustration" />
          <h3 className="secondary-header">Let's talk with your friends and family wherever and whenever</h3>
        </div>
      </div>
      <CustomButton text={"Continue with phone"} onClick={() => navigate(ROUTES.VERIFY_PHONE)} />
    </>
  );
}

export default Onboarding;
