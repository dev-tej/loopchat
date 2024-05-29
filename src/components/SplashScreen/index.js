import SplashScreenLogo from "assets/Public/SplashLogo.svg";
import "./index.css";

function SplashScreen() {
  return (
    <div className="splash-container">
      <img
        src={SplashScreenLogo}
        className="animated-image"
        alt="SplashScreen"
      />
      <div className="animated-text">ChitChat</div>
    </div>
  );
}

export default SplashScreen;
