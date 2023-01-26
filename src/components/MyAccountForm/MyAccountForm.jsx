import { Field } from "../Field";

export const MyAccountForm = ({
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
            <h3 className="text-lg text-center">Personal Info</h3>
            <div className="space-y-4">
                <Field
                    label="Name"
                    type="text"
                    name="name"
                    value={values.name}
                    placeholder="Your Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <Field
                    label="Email"
                    type="text"
                    name="email"
                    value={values.email}
                    readOnly
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <Field
                    label="Phone"
                    type="text"
                    name="phone"
                    value={values.phone}
                    placeholder="Your Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <button
                    type="submit"
                    className="text-red-800 bg-gray-100 px-4 py-4 rounded-lg w-full"
                >
                    Save
                </button>
            </div>
        </form>
    );
};
