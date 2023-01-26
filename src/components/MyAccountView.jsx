import { View } from "./View";
import { Avatar } from "./Avatar";
import { MyAccountForm } from "./MyAccountForm/MyAccountForm";
import { ChangePasswordForm } from "./ChangePasswordForm/ChangePasswordForm";

export const MyAccountView = ({ user, onChangeAvatar, myAccountFormProps, changePasswordFormProps }) => {
  return (
    <View>
      <div className="flex flex-col items-center">
        <Avatar src={user?.avatar} onChange={onChangeAvatar} />
        <h2 className="text-2xl font-semibold">{user?.name}</h2>
      </div>
      <div className="lg:container lg:mx-auto lg:max-w-lg mt-7 space-y-12">
        <MyAccountForm {...myAccountFormProps} />
        <ChangePasswordForm {...changePasswordFormProps} />
      </div>
    </View>
  );
};
