import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SplashScreen from "components/SplashScreen";
import Root from "routes";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <SplashScreen />
      ) : (
        <Router>
          <Root />
        </Router>
      )}
    </div>
  );
}

export default App;
