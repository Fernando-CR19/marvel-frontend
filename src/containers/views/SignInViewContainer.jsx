import SignInForm from "../../components/SignInForm/SignInForm"
import { View } from "../../components/View"
import { useSignInForm } from "../../components/SignInForm/useSignInForm"

export const SignInViewContainer = () => {

    const form = useSignInForm({
        onSubmit: (values) => {
            console.log("Sign in form values", values)
        }
    })

    return <div>
        <View>
            <SignInForm {...form}/>
        </View>
    </div>
}