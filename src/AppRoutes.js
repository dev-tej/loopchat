import { lazy, Suspense, useEffect, useState } from "react";
import { useAuth } from "hooks/useAuth";
import SplashScreen from "components/SplashScreen";

// Lazy load the routes
const LazyAuthenticatedRoutes = lazy(() => import("routes/authenticated"));
const LazyUnauthenticatedRoutes = lazy(() => import("routes/unauthenticated"));

export default function AppRoutes() {
  const { user } = useAuth();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <Suspense fallback={<SplashScreen />}>
      {user ? <LazyAuthenticatedRoutes /> : <LazyUnauthenticatedRoutes />}
    </Suspense>
  );
}
