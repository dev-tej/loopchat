import { useState, useEffect } from "react";
import { auth } from "services/firebase";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const fetchToken = async (user) => {
    if (user) {
      const token = await user.getIdToken();
      setToken(token);
    } else {
      setToken(null);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setUser(user);
      await fetchToken(user);
    });

    return unsubscribe;
  }, []);

  return { user, token, setToken, setUser };
};

export default useAuth;
