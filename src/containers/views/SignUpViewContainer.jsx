import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { SignUpView } from "../../components/SignUpView";
import { useSignUpForm } from "../../components/SignUpForm/useSignUpForm";
import { useFetchApi } from "../../hooks/useFetchApi";
import { useAuthContext } from "../../contexts/Auth";

export const SignUpViewContainer = () => {
  const { data, startFetch } = useFetchApi("/auth/local/signup", "POST");
  const { setAuth } = useAuthContext();

  const form = useSignUpForm({
    onSubmit: (values) => {
      startFetch(JSON.stringify(values));
    },
  });

  useEffect(() => {
    if (!form.isSubmitting) {
      return;
    }
    if (data) {
      setAuth(data);
    }
  }, [data, form]);

  return form.isSubmitting && data?.user ? (
    <Navigate to="/my-account" />
  ) : (
    <SignUpView formProps={form} />
  );
};
