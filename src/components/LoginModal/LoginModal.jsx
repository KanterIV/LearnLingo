import { Modal, Button } from "../../components";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/helpers/schemas/loginSchema";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { userLogin } from "../../redux/user/userSlice";

import IconOpenedEye from "../../assets/icons/eye-on.svg?react";
import IconClosedEye from "../../assets/icons/eye-off.svg?react";
import { closeAllModals } from "../../redux/modals/modalsSlice";
import { selectUserSingnedIn } from "../../redux/user/userSelectors";
import { toastPromise } from "../../utils/helpers/userNotifications";

const LoginModal = () => {
  const dispatch = useDispatch();
  const userSignInStatus = useSelector(selectUserSingnedIn);
  const [privatPassword, setPrivatPassword] = useState(true);
  const loginText =
    "Welcome back! Please enter your credentials to access your account and continue your search for an teacher.";

  const onPasswordPrivacySetting = () => {
    setPrivatPassword((prevPasswordSettings) => !prevPasswordSettings);
  };

  useEffect(() => {
    if (userSignInStatus) {
      dispatch(closeAllModals());
    }
  }, [dispatch, userSignInStatus]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });

  const handleFormSubmit = (values) => {
    const formData = {
      email: values.email,
      password: values.password,
    };
    const loginPromise = dispatch(userLogin(formData)).unwrap();

    toastPromise(loginPromise);
  };

  return (
    <Modal styledClass="login-modal" title="Log In" textContent={loginText}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="input-wrapper">
          <input
            {...register("email")}
            className={`input ${errors.email ? "error-input" : ""} `}
            type="text"
            name="email"
            placeholder="Email"
          />
          {errors.email && <div className="error">{errors.email?.message}</div>}
        </div>

        <div className="input-wrapper password-input-wrapper">
          <input
            {...register("password")}
            className={`input ${errors.password ? "error-input" : ""} `}
            type={privatPassword ? "password" : "text"}
            name="password"
            placeholder="Password"
          />
          {privatPassword ? (
            <IconClosedEye
              onClick={() => onPasswordPrivacySetting(false)}
              className="eye-icon"
            />
          ) : (
            <IconOpenedEye
              onClick={() => onPasswordPrivacySetting(true)}
              className="eye-icon"
            />
          )}

          {errors.password && (
            <div className="error">{errors.password?.message}</div>
          )}
        </div>
        <Button styledClass="form-btn" buttonType="submit">
          Login
        </Button>
      </form>
    </Modal>
  );
};

export default LoginModal;
