import React from 'react'
import { useFormik } from 'formik'
import Field from '../Field';

export default function SignInForm({ handleSubmit, handleChange, handleBlur, isSubmitting, values, errors }) {

    const formik = useFormik({
        initialValues: {
            Username: '',
            Email: '',
            Password: '',
        },
        onSubmit: values => {
            console.log(values)
            // alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto h-full flex flex-col justify-center mt-[5rem]">
            <h3 className="text-lg text-center">Sign up</h3>
            <div className="space-y-4">
                <Field
                    label="Username"
                    type="username"
                    name="username"
                    value={values.username}
                    placeholder="your username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errorMessage={errors.username}
                />
                <Field
                    label="Email"
                    type="text"
                    name="email"
                    value={values.email}
                    placeholder="your@email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errorMessage={errors.email}
                />
                <Field
                    label="Password"
                    type="password"
                    name="password"
                    value={values.password}
                    placeholder="your password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errorMessage={errors.password}
                />
                <button
                    type="submit"
                    // disabled={isSubmitting}
                    className="text-red-800 bg-gray-100 px-4 py-4 rounded-lg w-full"
                >
                    Sign up
                </button>
            </div>
        </form>
    )
}

