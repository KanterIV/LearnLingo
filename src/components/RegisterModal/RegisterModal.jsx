import { Modal, Button } from "../../components";
import { StyledRegisterForm } from "./RegisterModal.styled";
import { registerSchema } from "../../services/schemas/registerSchema";
import { auth } from "../../services/firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { useEffect, useState } from "react";

import IconOpenedEye from "../../assets/icons/eye-on.svg?react";
import IconClosedEye from "../../assets/icons/eye-off.svg?react";
import { newUserRegister } from "../../redux/user/userSlice";
import { closeAllModals } from "../../redux/modals/modalsSlice";
import { selectUserSingnedUp } from "../../redux/user/userSelectors";

const LoginModal = () => {
  const registerText =
    "Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.";
  const userSignUpStatus = useSelector(selectUserSingnedUp);
  const dispatch = useDispatch();
  const [privatPassword, setPrivatPassword] = useState(true);

  useEffect(() => {
    if (userSignUpStatus) {
      dispatch(closeAllModals());
    }
  }, [dispatch, userSignUpStatus]);

  const onPasswordPrivacySetting = () => {
    setPrivatPassword((prevPasswordSettings) => !prevPasswordSettings);
  };

  const handleFormSubmit = async (values) => {
    const formData = {
      auth: auth,
      email: values.email,
      password: values.password,
    };
    dispatch(newUserRegister(formData));
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: handleFormSubmit,
  });

  const { errors, touched, handleChange, handleBlur } = formik;

  return (
    <Modal
      styledClass="login-modal"
      title="Registration"
      textContent={registerText}
    >
      <StyledRegisterForm onSubmit={formik.handleSubmit}>
        <input
          className={`input ${
            errors.name && touched.name ? "error-input" : ""
          } `}
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={formik.values.name}
        />
        {errors.name && touched.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}

        <input
          className={`input ${
            errors.email && touched.email ? "error-input" : ""
          } `}
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={formik.values.email}
        />
        {errors.email && touched.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}

        <div className="password-input-wrapper">
          <input
            className={`input ${
              errors.password && touched.password ? "error-input" : ""
            } `}
            type={privatPassword.password ? "password" : "text"}
            name="password"
            placeholder="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={formik.values.password}
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

          {errors.password && touched.password ? (
            <div className="error">{formik.errors.password}</div>
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
