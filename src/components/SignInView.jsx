import { View } from "./View";
import { SignInForm } from "./SignInForm";

export const SignInView = ({ formProps }) => {
  return (
    <View>
      <SignInForm
        {...formProps}
        className="max-w-lg mx-auto h-full flex flex-col justify-center"
      />
    </View>
  );
};
