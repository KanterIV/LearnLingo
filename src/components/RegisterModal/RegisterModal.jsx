import { Modal, Button } from "../../components";
import { StyledRegisterForm } from "./RegisterModal.styled";
import { registerSchema } from "../../services/schemas/registerSchema";
import { useFormik } from "formik";
import { useState } from "react";

import IconOpenedEye from "../../assets/icons/eye-on.svg?react";
import IconClosedEye from "../../assets/icons/eye-off.svg?react";

const LoginModal = () => {
  const loginText =
    "Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.";

  const [privatPassword, setPrivatPassword] = useState(true);

  const onPasswordPrivacySetting = () => {
    setPrivatPassword((prevPasswordSettings) => !prevPasswordSettings);
  };

  const handleFormSubmit = (values) => {
    const formData = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    console.log(formData);
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
    <Modal styledClass="login-modal" title="Log In" textContent={loginText}>
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
