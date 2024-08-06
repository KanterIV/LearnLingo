import * as yup from "yup";

export const bookingSchema = yup.object().shape({
  name: yup.string().required("Please enter your name").max(32, "To long name"),

  email: yup
    .string()
    .required("Please enter your e-mail")
    .email("Invalid email"),

  phoneNumber: yup
    .string()
    .required("Please enter your phone number")
    .matches(/^\+?\d{0,3}?[-\d]{7,19}$/, { message: "Invalid phone number!" })
    .max(18, "Number too long (max. 18 characters)"),
});
