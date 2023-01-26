import * as Yup from "yup";
import { useFormik } from "formik";

const Schema = Yup.object({
    password: Yup.string().required("Password confirmation is required"),
    new_password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password confirmation is required")
        .when("password", {
            is: (val) => Boolean(val?.length),
            then: Yup.string().oneOf(
                [Yup.ref("password")],
                "Both password need to be the same"
            ),
        }),
    confirm_new_password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password confirmation is required")
        .when("password", {
            is: (val) => Boolean(val?.length),
            then: Yup.string().oneOf(
                [Yup.ref("password")],
                "Both password need to be the same"
            ),
        }),
});

export const useChangePasswordForm = ({ onSubmit }) => {
    return useFormik({
        initialValues: {
            password: "",
            new_password: "",
            confirm_new_password: "",
        },
        onSubmit,
        validationSchema: Schema,
        validateOnBlur: true,
        validateOnChange: false,
    });
};
