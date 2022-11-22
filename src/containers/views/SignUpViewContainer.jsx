import SignUpForm from "../../components/SignUpForm/SignUpForm"
import { View } from "../../components/View"
import { useSignUpForm } from "../../components/SignUpForm/useSignUpForm"

export const SignUpViewContainer = () => {

    const form = useSignUpForm({
        onSubmit: (values) => {
            console.log("Sign in form values", values)
        }
    })

    return <div>
        <View>
            <SignUpForm {...form}/>
        </View>
    </div>
}