import { StyledLoginFrom } from "./LoginModal.styled";
import { Modal, Button } from "../../components";
import { loginSchema } from "../../services/schemas/loginSchema";
import { useFormik } from "formik";
import { useState } from "react";

import IconOpenedEye from "../../assets/icons/eye-on.svg?react";
import IconClosedEye from "../../assets/icons/eye-off.svg?react";

const LoginModal = () => {
  const loginText =
    "Welcome back! Please enter your credentials to access your account and continue your search for an teacher.";

  const [privatPassword, setPrivatPassword] = useState(true);

  const onPasswordPrivacySetting = () => {
    setPrivatPassword((prevPasswordSettings) => !prevPasswordSettings);
  };

  const handleFormSubmit = (values) => {
    const formData = { email: values.email, password: values.password };
    console.log(formData);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: handleFormSubmit,
  });

  const { errors, touched, handleChange, handleBlur } = formik;

  return (
    <Modal styledClass="login-modal" title="Log In" textContent={loginText}>
      <StyledLoginFrom onSubmit={formik.handleSubmit}>
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
            type={privatPassword ? "password" : "text"}
            name="password"
            placeholder="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={formik.values.password}
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

          {errors.password && touched.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
        </div>
        <Button styledClass="form-btn" buttonType="submit">
          Login
        </Button>
      </StyledLoginFrom>
    </Modal>
  );
};

export default LoginModal;
