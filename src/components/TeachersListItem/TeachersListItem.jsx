import Button from "../Button/Button";
import Reviews from "../Reviews/Reviews";
import TeacherLevelsList from "../TeacherLevelsList/TeacherLevels";
import { StyledTeachersListItem } from "./TeachersListItem.styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteTeacher,
  removeFavoriteTeacher,
} from "../../redux/user/userSlice";
import { setBookingModal } from "../../redux/modals/modalsSlice";
import {
  selectFavoriteteachers,
  selectUserSingnedIn,
} from "../../redux/user/userSelectors";

import BookIcon from "../../assets/icons/book.svg?react";
import StartIcon from "../../assets/icons/star.svg?react";
import HeartIcon from "../../assets/icons/heart.svg?react";
import OnlineIcon from "../../assets/icons/online.svg?react";

const TeachersListItem = ({
  id,
  name,
  surname,
  languages,
  levels,
  rating,
  reviews,
  price_per_hour,
  lessons_done,
  avatar_url,
  lesson_info,
  conditions,
  experience,
}) => {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteTeachersArr = useSelector(selectFavoriteteachers);
  const authenticated = useSelector(selectUserSingnedIn);
  const teacherData = {
    id,
    name,
    surname,
    languages,
    levels,
    rating,
    reviews,
    price_per_hour,
    lessons_done,
    avatar_url,
    lesson_info,
    conditions,
    experience,
  };

  useEffect(() => {
    if (favoriteTeachersArr.find((teacher) => teacher.id === id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favoriteTeachersArr, id]);

  const toggleFavoriteTeacher = () => {
    if (favoriteTeachersArr.find((teacher) => teacher.id === id)) {
      dispatch(removeFavoriteTeacher(teacherData.id));
    } else {
      dispatch(addFavoriteTeacher(teacherData));
    }
  };

  const onBookingBtnClick = () => {
    dispatch(setBookingModal({ status: true, id: id }));
  };

  return (
    <StyledTeachersListItem>
      <div className="teacher-avatar-wrapper">
        <img
          src={avatar_url}
          width="96px"
          className="teacher-avatar"
          alt="Teacher avatar"
        />
        <OnlineIcon className="online-icon" />
      </div>

      <p className="teachers-category">Languages</p>
      <ul className="stats-list">
        <li className="stats-list-item">
          <BookIcon />
          <p className="stats-text-content">Lessons online</p>
        </li>
        <li className="stats-list-item">
          <p className="stats-text-content">{`Lessons done: ${lessons_done}`}</p>
        </li>
        <li className="stats-list-item">
          <StartIcon />
          <p className="stats-text-content">{`Rating: ${rating}`}</p>
        </li>
        <li className="stats-list-item">
          <p className="stats-text-content">
            Price / 1 hour:
            <span className="stats-price">{` ${price_per_hour}$`}</span>
          </p>
        </li>
      </ul>
      <Button
        styledClass={
          authenticated && isFavorite
            ? "icon-heart-btn isFavorite"
            : "icon-heart-btn"
        }
        buttonType="button"
        tooltipAnchor="unlogged"
        onClickFunction={toggleFavoriteTeacher}
      >
        <HeartIcon />
      </Button>
      <h2>{`${name} ${surname}`}</h2>
      <p>{`Speaks: ${languages.join(", ")}`}</p>
      <p>{`Lesson Info: ${lesson_info}`}</p>
      <p>{`Conditions: ${conditions.join(" ")}`}</p>
      <p>{experience}</p>
      <Reviews reviews={reviews} />
      <TeacherLevelsList levels={levels} />
      <Button
        styledClass="bookBtn"
        buttonType="button"
        onClickFunction={onBookingBtnClick}
      >
        Book trial lesson
      </Button>
    </StyledTeachersListItem>
  );
};

export default TeachersListItem;
