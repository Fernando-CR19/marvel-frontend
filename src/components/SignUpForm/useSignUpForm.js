import * as Yup from "yup"
import { useFormik } from "formik"

const Schema = Yup.object({
    username: Yup.string()
        .min(3, "This username is already in use")
        .required("Username is required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    password: Yup.string()
        .min(4, "Password must be at least 4 characters")
        .required("Password is required")
})

export const useSignUpForm = ({ onSubmit }) => {
    return (
        useFormik({
            initialValues: {
                username: "",
                email: "",
                password: "",
            },
            onSubmit,
            validationSchema: Schema,
            validateOnBlur: true,
            validateOnChangeF: false,
        })
    )
}