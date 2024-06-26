import { Modal, Button } from "../../components";
import { StyledRegisterForm } from "./RegisterModal.styled";
import { registerSchema } from "../../services/schemas/registerSchema";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { newUserRegister } from "../../redux/user/userSlice";
import { closeAllModals } from "../../redux/modals/modalsSlice";
import { selectUserSingnedIn } from "../../redux/user/userSelectors";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import IconOpenedEye from "../../assets/icons/eye-on.svg?react";
import IconClosedEye from "../../assets/icons/eye-off.svg?react";

const LoginModal = () => {
  const registerText =
    "Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.";
  const userSignInStatus = useSelector(selectUserSingnedIn);
  const dispatch = useDispatch();
  const [privatPassword, setPrivatPassword] = useState(true);

  useEffect(() => {
    if (userSignInStatus) {
      dispatch(closeAllModals());
    }
  }, [dispatch, userSignInStatus]);

  const onPasswordPrivacySetting = () => {
    setPrivatPassword((prevPasswordSettings) => !prevPasswordSettings);
  };

  const handleFormSubmit = async (values) => {
    const formData = {
      email: values.email,
      password: values.password,
    };
    dispatch(newUserRegister(formData));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onBlur",
  });

  return (
    <Modal
      styledClass="login-modal"
      title="Registration"
      textContent={registerText}
    >
      <StyledRegisterForm onSubmit={handleSubmit(handleFormSubmit)}>
        <input
          {...register("name")}
          className={`input ${errors.name ? "error-input" : ""} `}
          type="text"
          name="name"
          placeholder="Name"
        />
        {errors.name && <div className="error">{errors.name?.message}</div>}

        <input
          {...register("email")}
          className={`input ${errors.email ? "error-input" : ""} `}
          type="email"
          name="email"
          placeholder="Email"
        />
        {errors.email && <div className="error">{errors.email?.message}</div>}

        <div className="password-input-wrapper">
          <input
            {...register("password")}
            className={`input ${errors.password ? "error-input" : ""} `}
            type={privatPassword ? "password" : "text"}
            name="password"
            placeholder="Password"
          />
          {privatPassword ? (
            <IconClosedEye
              onClick={() => onPasswordPrivacySetting("password")}
              className="eye-icon"
            />
          ) : (
            <IconOpenedEye
              onClick={() => onPasswordPrivacySetting("password")}
              className="eye-icon"
            />
          )}

          {errors.password ? (
            <div className="error">{errors.password?.message}</div>
          ) : null}
        </div>
        <Button styledClass="form-btn" buttonType="submit">
          Sign Up
        </Button>
      </StyledRegisterForm>
    </Modal>
  );
};

export default LoginModal;
