import * as Yup from "yup";
import { useFormik } from "formik";

const Schema = Yup.object({
    name: Yup.string(),
    email: Yup.string(),
    phone: Yup.string(),
});

export const useMyAccountForm = ({ onSubmit, initialValues }) => {
    return useFormik({
        initialValues,  
        onSubmit,
        validationSchema: Schema,
        validateOnBlur: true,
        validateOnChange: false,
    });
};
