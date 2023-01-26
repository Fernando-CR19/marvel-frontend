import { useEffect } from "react";
import { useChangePasswordForm } from "../../components/ChangePasswordForm/useMyChangePasswordForm";
import { useMyAccountForm } from "../../components/MyAccountForm/UseMyAccountForm";
import { MyAccountView } from "../../components/MyAccountView";
import { useAuthContext } from "../../contexts/Auth";
import { useFetchApi } from "../../hooks/useFetchApi"

export const MyAccountViewContainer = () => {
  const { setAuth, auth } = useAuthContext();
  
  const { data, startFetch } = useFetchApi("/api/users/me/avatar", "POST", {
    headers: {}
  })

  const { startFetch: changePersonalInfo } = useFetchApi("/api/users/me", "PUT")

  const { startFetch: changePassword } = useFetchApi("/auth/change-password", "PATCH")

  const myAccountForm = useMyAccountForm({
    initialValues: {
      name: auth.user.name,
      email: auth.user.email,
      phone: auth.user.phone
    },
    onSubmit: (values) => {
      changePersonalInfo(JSON.stringify({
        name: auth.user.name,
        phone: auth.user.phone,
      }))
    }
  })

  const changePasswordForm = useChangePasswordForm({
    onSubmit: (values) => {
      changePassword(JSON.stringify({
        password: values.password,
        newPassword: values.new_password
      }))
    }
  })

  const onChangeAvatar = (e) => {
    const form = new FormData();
    const file = e.target.files[0];
    form.append("avatar", file);
    console.log(form.get("avatar"))
    startFetch(form)
  }

  const avatar = `${process.env.REACT_APP_API_BASE}${auth?.user.avatar}`;

  useEffect(() => {
    if (!data?.avatar) {
      return
    }

    setAuth((prev) => {
      return {
        ...prev,
        user: {
          ...prev.user,
          avatar: data.avatar,
        }
      }
    })
  }, [data]);

  return <MyAccountView user={auth?.user} onChangeAvatar={onChangeAvatar} myAccountFormProps={myAccountForm} changePasswordForm={changePasswordForm} />;
};
