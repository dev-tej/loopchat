import { useContext } from "react";
import { UserContext } from "constants/userContext";

export function useAuth() {
  return useContext(UserContext);
}
