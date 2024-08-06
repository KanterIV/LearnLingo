import { useForm } from "react-hook-form";
import Modal from "../Modal/Modal";
import { StyledBookingForm } from "./BookingModal.styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookingSchema } from "../../utils/helpers/schemas/bookingSchema";
import Button from "../Button/Button";
import { closeAllModals } from "../../redux/modals/modalsSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectBookingModal } from "../../redux/modals/modalsSelectors";
import { selectAllteachers } from "../../redux/user/userSelectors";
import { useState } from "react";
import RadioBtnList from "./RadioBtnList/RadioBtnList";
import { toastBooking } from "../../utils/helpers/userNotifications";

const BookingModal = () => {
  const registerText =
    "Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.";
  const allTeachersArr = useSelector(selectAllteachers);
  const { clickedTeachersCardId } = useSelector(selectBookingModal);
  const clickedTeacherCard = allTeachersArr.find((teacher) => {
    return teacher.id === clickedTeachersCardId;
  });
  const [radioValue, setRadioValue] = useState("Career and business");

  const dispatch = useDispatch();
  const handleFormSubmit = ({ name }) => {
    dispatch(closeAllModals());
    toastBooking(
      `${name}, thank you for your booking! We will be in touch with you soon.`
    );
  };
  const handleRadioBtnClick = (event) => {
    setRadioValue(event.target.value);
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
      styledClass="booking-modal"
      title="Book trial lesson"
      textContent={registerText}
    >
      <div className="booking-avatar-wrapper">
        <img
          className="booking-teacher-avatar"
          src={clickedTeacherCard.avatar_url}
          alt="Teacher avatar"
        />
        <div>
          <p className="booking-name-title">Your teacher</p>
          <h3 className="booking-teacher-name">{`${clickedTeacherCard.name} ${clickedTeacherCard.surname}`}</h3>
        </div>
      </div>
      <p className="booking-question">
        What is your main reason for learning English?
      </p>
      <StyledBookingForm onSubmit={handleSubmit(handleFormSubmit)}>
        <RadioBtnList
          radioBtnValue={radioValue}
          handleRadioBtnClick={handleRadioBtnClick}
        />

        <div className="input-wrapper">
          <input
            {...register("name")}
            className={`input ${errors.name ? "error-input" : ""} `}
            type="text"
            name="name"
            placeholder="Full Name"
          />
          {errors.name && <div className="error">{errors.name?.message}</div>}
        </div>

        <div className="input-wrapper">
          <input
            {...register("email")}
            className={`input ${errors.email ? "error-input" : ""} `}
            type="email"
            name="email"
            placeholder="Email"
          />
          {errors.email && <div className="error">{errors.email?.message}</div>}
        </div>

        <div className="input-wrapper">
          <input
            {...register("phoneNumber")}
            className={`input ${errors.phoneNumber ? "error-input" : ""} `}
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
