import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { SignInView } from "../../components/SignInView";
import { useSignInForm } from "../../components/SignInForm/useSignInForm";
import { useFetchApi } from "../../hooks/useFetchApi";
import { useAuthContext } from "../../contexts/Auth";

export const SignInViewContainer = () => {
  const { data, startFetch } = useFetchApi("/auth/local/signin", "POST");
  const { setAuth } = useAuthContext();

  const form = useSignInForm({
    onSubmit: (values) => {
      startFetch(JSON.stringify(values));
    },
  });

  useEffect(() => {
    if (!form.isSubmitting) {
      return;
    }
    debugger;
    if (data) {
      setAuth(data);
    }
  }, [data, form]);

  return form.isSubmitting && data?.user ? (
    <Navigate to="/my-account" />
  ) : (
    <SignInView formProps={form} />
  );
};
