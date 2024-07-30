import { forwardRef } from "react";
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
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

const TeachersListItem = forwardRef(
  (
    {
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
      filterLevel,
    },
    ref
  ) => {
    const dispatch = useDispatch();
    const [isFavorite, setIsFavorite] = useState(false);
    const [isFullDetails, setIsFullDetails] = useState(false);
    const favoriteTeachersArr = useSelector(selectFavoriteteachers);
    const authenticated = useSelector(selectUserSingnedIn);
    const isTablet = useMediaQuery({ query: "(min-width: 320px)" });

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
      if (!authenticated) {
        return;
      } else if (favoriteTeachersArr.find((teacher) => teacher.id === id)) {
        dispatch(removeFavoriteTeacher(teacherData.id));
      } else {
        dispatch(addFavoriteTeacher(teacherData));
      }
    };

    const onBookingBtnClick = () => {
      dispatch(setBookingModal({ status: true, id: id }));
    };

    const onReadMoreBtnClick = () => {
      setIsFullDetails((prevDetailsSetting) => !prevDetailsSetting);
    };

    return (
      <StyledTeachersListItem ref={ref}>
        <div className="left-side-wrapper">
          <div className="teacher-avatar-wrapper">
            <img
              src={avatar_url}
              width="96px"
              className="teacher-avatar"
              alt="Teacher avatar"
            />
            <OnlineIcon className="online-icon" />
          </div>
        </div>
        <div className="right-side-wrapper">
          <div className="common-info-wrapper">
            <div className="teacher-name-wrapper">
              <p className="teachers-category">Languages</p>
              {isTablet && (
                <h2 className="teacher-name">{`${name} ${surname}`}</h2>
              )}
            </div>
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
          </div>
          <p className="teacher-info">
            <span className="teacher-info-subtitle">Speaks: </span>
            <span className="teacher-speaks">{`${languages.join(", ")}`}</span>
          </p>
          <p className="teacher-info">
            <span className="teacher-info-subtitle">Lesson Info:</span>
            {` ${lesson_info}`}
          </p>
          <p className="teacher-info conditions">
            <span className="teacher-info-subtitle">Conditions:</span>
            {` ${conditions.join(" ")}`}
          </p>

          {isFullDetails && (
            <div className="rest-teacher-info">
              <p className="teacher-experience">{experience}</p>
              <ul className="reviews-list">
                <Reviews reviews={reviews} />
              </ul>
            </div>
          )}
          <Button
            styledClass="readMoreBtn"
            buttonType="button"
            onClickFunction={onReadMoreBtnClick}
          >
            {isFullDetails ? "Hide details" : "Read more"}
          </Button>
          <TeacherLevelsList levels={levels} filterLevel={filterLevel} />
          <Button
            styledClass="bookBtn"
            buttonType="button"
            onClickFunction={onBookingBtnClick}
          >
            Book trial lesson
          </Button>
        </div>
      </StyledTeachersListItem>
    );
  }
);

TeachersListItem.displayName = "TeachersListItem";

export const MotionTeacherListItem = motion(TeachersListItem);

export default MotionTeacherListItem;
