import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as ROUTES from "constants/routes";
import CustomButton from "components/CustomButton";
import BackArrow from "assets/Profile/BackArrow.svg";
import CameraIcon from "assets/Profile/Camera.svg";
import "./index.css";

function UploadProfilePic() {
  const navigate = useNavigate();

  const [profilePic, setProfilePic] = useState(null);

  return (
    <>
      <div className="profile-default-container">
        <div className="profile-secondary-stepper-section">
          <img src={BackArrow} alt="back-arrow" onClick={() => navigate(ROUTES.ADD_NAME)} />
          <h3>2 of 2</h3>
        </div>
        <div className="profile-default-container__header-section">
          <h1 className="primary-header">Add your photo</h1>
          <h3 className="secondary-header">Get more people to know you better.</h3>
        </div>
        <div className="profile-default-container__form-section">
          <div className="profile-pic-upload-container">
            <label htmlFor="profile-pic">
              <img src={profilePic ? profilePic : CameraIcon} alt="profile-pic" className={profilePic ? "profile-pic" : "camera-pic"} />
            </label>
            <input type="file" id="profile-pic" accept="image/*" style={{ visibility: "hidden" }} onChange={(e) => setProfilePic(URL.createObjectURL(e.target.files[0]))} />
          </div>
        </div>
      </div>
      <CustomButton text={"Next"} onClick={() => navigate(ROUTES.MESSAGES)} disabled={profilePic === null} />
    </>
  );
}

export default UploadProfilePic;
