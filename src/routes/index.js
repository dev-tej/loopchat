import { Routes, Route } from "react-router-dom";
import * as ROUTES from "constants/routes";
import Onboarding from "pages/Onboarding";
import VerifyPhone from "pages/VerifyPhone";
import VerifyOtp from "pages/VerifyOtp";
import AddName from "pages/Profile/AddName";
import UploadProfilePic from "pages/Profile/UploadProfilePic";
import Messages from "pages/Messages";

export default function Root() {
  return (
    <Routes>
      <Route path={ROUTES.BASE} element={<Onboarding />} />
      <Route path={ROUTES.VERIFY_PHONE} element={<VerifyPhone />} />
      <Route path={ROUTES.VERIFY_OTP} element={<VerifyOtp />} />
      <Route path={ROUTES.ADD_NAME} element={<AddName />} />
      <Route path={ROUTES.UPLOAD_PROFILE_PIC} element={<UploadProfilePic />} />
      <Route path={ROUTES.MESSAGES} element={<Messages />} />
    </Routes>
  );
}
