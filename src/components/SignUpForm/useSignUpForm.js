import * as Yup from "yup";
import { useFormik } from "formik";

const Schema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .required("Password is required"),
  password_confirm: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .required("Password confirmation is required")
    .when("password", {
      is: (val) => Boolean(val?.length),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    }),
});

export const useSignUpForm = ({ onSubmit }) => {
  return useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirm: "",
    },
    onSubmit,
    validationSchema: Schema,
    validateOnBlur: true,
    validateOnChange: false,
  });
};
