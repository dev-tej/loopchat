import { Routes, Route } from "react-router-dom";
import * as ROUTES from "constants/unAuthenticatedRoutes";
import Onboarding from "pages/Onboarding";
import VerifyPhone from "pages/VerifyPhone";
import VerifyOtp from "pages/VerifyOtp";
import AddName from "pages/Profile/AddName";
import UploadProfilePic from "pages/Profile/UploadProfilePic";

const routesConfig = [
  {
    path: ROUTES.BASE,
    component: Onboarding,
  },
  {
    path: ROUTES.VERIFY_PHONE,
    component: VerifyPhone,
  },
  {
    path: ROUTES.VERIFY_OTP,
    component: VerifyOtp,
  },
  {
    path: ROUTES.ADD_NAME,
    component: AddName,
  },
  {
    path: ROUTES.UPLOAD_PROFILE_PIC,
    component: UploadProfilePic,
  },
];

export default function UnAuthenticatedRoutes() {
  return (
    <Routes>
      {routesConfig?.map((route) => (
        <Route key={route.path} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
}
