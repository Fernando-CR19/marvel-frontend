import { Field } from "../Field";

export const ChangePasswordForm = ({
    handleSubmit,
    handleChange,
    handleBlur,
    isSubmitting,
    values = {},
    errors = {},
    className,
}) => {
    return (
        <form onSubmit={handleSubmit} className={className}>
            <h3 className="text-2xl text-center mt-7 text-red-700">Change Your Password</h3>
            <div className="space-y-4">
                <Field
                    label="Password"
                    type="password"
                    name="password"
                    value={values.password}
                    placeholder="Your password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errorMessage={errors.password}
                />
                <Field
                    label="New Password"
                    type="password"
                    name="new_password"
                    value={values.new_password}
                    placeholder="New Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errorMessage={errors.new_password}
                />
                <Field
                    label="Confirm New Password"
                    type="password"
                    name="confirm_new_password"
                    value={values.confirm__new_password}
                    placeholder="Confirm New Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errorMessage={errors.confirm_new_password}
                />
                <button
                    type="submit"
                    className="text-red-800 bg-gray-100 px-4 py-4 rounded-lg w-full"
                >
                    Change Password
                </button>
            </div>
        </form>
    );
};
