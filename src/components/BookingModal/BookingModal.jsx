import { useForm } from "react-hook-form";
import Modal from "../Modal/Modal";
import { StyledBookingForm } from "./BookingModal.styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookingSchema } from "../../services/schemas/bookingSchema";
import Button from "../Button/Button";
import { closeAllModals } from "../../redux/modals/modalsSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectBookingModal } from "../../redux/modals/modalsSelectors";
import { selectAllteachers } from "../../redux/user/userSelectors";
import { useState } from "react";
import RadioBtnList from "./RadioBtnList/RadioBtnList";

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
  const handleFormSubmit = (values) => {
    console.log(values);
    dispatch(closeAllModals());
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
      styledClass="login-modal"
      title="Book trial lesson"
      textContent={registerText}
    >
      <img src={clickedTeacherCard.avatar_url} alt="Teacher avatar" />
      <p>Your teacher</p>
      <h3>{`${clickedTeacherCard.name} ${clickedTeacherCard.surname}`}</h3>
      <p>What is your main reason for learning English?</p>
      <StyledBookingForm onSubmit={handleSubmit(handleFormSubmit)}>
        <RadioBtnList
          radioBtnValue={radioValue}
          handleRadioBtnClick={handleRadioBtnClick}
        />
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

        <Button styledClass="form-btn" buttonType="submit">
          Book
        </Button>
      </StyledBookingForm>
    </Modal>
  );
};

export default BookingModal;
