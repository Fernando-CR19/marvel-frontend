import { View } from "./View";
import { SignUpForm } from "./SignUpForm";

export const SignUpView = ({ formProps }) => {
  return (
    <View>
      <SignUpForm
        {...formProps}
        className="max-w-lg mx-auto h-full flex flex-col justify-center"
      />
    </View>
  );
};
