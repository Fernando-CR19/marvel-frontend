import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useAuthContext } from "../../contexts/Auth";

export const SignOutViewContainer = () => {
  const [redirect, setRedirect] = useState(false);
  const { setAuth } = useAuthContext();

  useEffect(() => {
    setTimeout(() => {
      setAuth({});
      setRedirect(true);
    }, 1000);
  }, []);

  return redirect ? <Navigate to="/signin" /> : <div>Signing out...</div>;
};
