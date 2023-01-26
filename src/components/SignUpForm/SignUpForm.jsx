import { Field } from "../Field";

export const SignUpForm = ({
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
      <h3 className="text-lg text-center">Sign up</h3>
      <div className="space-y-4">
        <Field
          label="Name"
          type="text"
          name="name"
          value={values.name}
          placeholder="your name"
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessage={errors.name}
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

        <Field
          label="Confirm your password"
          type="password"
          name="password_confirm"
          value={values.password_confirm}
          placeholder="your password"
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessage={errors.password_confirm}
        />
        <button
          type="submit"
          className="text-red-800 bg-gray-100 px-4 py-4 rounded-lg w-full"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};
