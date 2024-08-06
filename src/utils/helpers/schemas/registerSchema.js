import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("Please enter your name").max(32, "To long name"),

  email: yup
    .string()
    .required("Please enter your e-mail")
    .email("Invalid email"),

  password: yup
    .string()
    .min(8, "Password is too short")
    .max(64, "Password is too long"),
});
