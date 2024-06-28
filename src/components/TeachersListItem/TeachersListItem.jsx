import { StyledTeachersListItem } from "./TeachersListItem.styled";

import BookIcon from "../../assets/icons/book.svg?react";
import StartIcon from "../../assets/icons/star.svg?react";
import HeartIcon from "../../assets/icons/heart.svg?react";
import Button from "../Button/Button";
import Reviews from "../Reviews/Reviews";
import TeacherLevelsList from "../TeacherLevelsList/TeacherLevels";
import { useEffect, useState } from "react";
import {
  addFavoriteTeacher,
  removeFavoriteTeacher,
} from "../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFavoriteteachers,
  selectUserSingnedIn,
} from "../../redux/user/userSelectors";

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

  const onBookBtnClick = () => {
    console.log("book button click");
  };

  return (
    <StyledTeachersListItem>
      <img src={avatar_url} alt="Teacher avatar" />
      <p>Languages</p>
      <ul>
        <li>
          <BookIcon />
          <p>Lessons online</p>
        </li>
        <li>
          <p>{`Lessons done: ${lessons_done}`}</p>
        </li>
        <li>
          <StartIcon />
          <p>{`Rating: ${rating}`}</p>
        </li>
        <li>
          <p>
            Price / 1 hour: <span>{price_per_hour}</span>
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
        onClickFunction={onBookBtnClick}
      >
        Book trial lesson
      </Button>
    </StyledTeachersListItem>
  );
};

export default TeachersListItem;
