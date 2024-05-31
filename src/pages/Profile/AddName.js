import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as ROUTES from "constants/routes";
import CustomButton from "components/CustomButton";
import CustomInput from "components/CustomInput";
import { ReactComponent as UserIcon } from "assets/Profile/User.svg";
import "./index.css";

function AddName() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleNameChange = (value) => {
    setName(value);
  };

  return (
    <>
      <div className="profile-default-container">
        <div className="profile-primary-stepper-section">
          <h3>1 of 2</h3>
        </div>
        <div className="profile-default-container__header-section">
          <h1 className="primary-header">Create your name</h1>
          <h3 className="secondary-header">Get more people to know your name.</h3>
        </div>
        <div className="profile-default-container__form-section">
          <CustomInput icon={UserIcon} initialValue={""} onInputChange={handleNameChange} />
        </div>
      </div>
      <CustomButton onClick={() => navigate(ROUTES.UPLOAD_PROFILE_PIC)} text={"Continue"} disabled={name?.length === 0} />
    </>
  );
}

export default AddName;
