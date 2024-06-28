import { useForm } from "react-hook-form";
import Modal from "../Modal/Modal";
import { StyledBookingForm } from "./BookingModal.styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookingSchema } from "../../services/schemas/bookingSchema";
import Button from "../Button/Button";
import { setBookingModal } from "../../redux/modals/modalsSlice";
import { useDispatch } from "react-redux";

const BookingModal = () => {
  const registerText =
    "Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.";
  const dispatch = useDispatch();
  const handleFormSubmit = () => {
    dispatch(setBookingModal(false));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookingSchema),
    mode: "onBlur",
  });

  return (
    <Modal
      styledClass="login-modal"
      title="Book trial lesson"
      textContent={registerText}
    >
      <StyledBookingForm onSubmit={handleSubmit(handleFormSubmit)}>
        <input
          {...register("name")}
          className={`input ${errors.name ? "error-input" : ""} `}
          type="text"
          name="name"
          placeholder="Full Name"
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
            {...register("phoneNumber")}
            className={`input ${errors.password ? "error-input" : ""} `}
            type="tel"
            name="phoneNumber"
            placeholder="Phone number"
          />
          {errors.phoneNumber ? (
            <div className="error">{errors.phoneNumber?.message}</div>
          ) : null}
        </div>
        <Button styledClass="form-btn" buttonType="submit">
          Book
        </Button>
      </StyledBookingForm>
    </Modal>
  );
};

export default BookingModal;
