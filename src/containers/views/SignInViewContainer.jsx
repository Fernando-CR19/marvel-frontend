import { SignInView } from "../../components/SignInView";
import { useSignInForm } from "../../components/SignInForm/useSignInForm";
import { useFetchApi } from "../../hooks/useFetchApi";

export const SignInViewContainer = () => {
    const { startFetch } = useFetchApi("/auth/signin", "POST");
    const form = useSignInForm({
        onSubmit: (values) => {
            console.log(values);
            startFetch(JSON.stringify(values));
            console.log("sign in form values", values);
        },
    });
    return <SignInView formProps={form} />;
};