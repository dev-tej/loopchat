// src/contexts/UserContext.jsx
import { useEffect, useState } from "react";
import { UserContext } from "constants/userContext";
import { auth } from "services/firebase";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        user.getIdToken().then((token) => setToken(token));
        setLoading(false);
      } else {
        setUser(null);
        setToken(null);
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={{ user, loading, token }}>{children}</UserContext.Provider>;
};
