import { StyledTeachersListItem } from "./TeachersListItem.styled";

import BookIcon from "../../assets/icons/book.svg?react";
import StartIcon from "../../assets/icons/star.svg?react";
import HeartIcon from "../../assets/icons/heart.svg?react";
import Button from "../Button/Button";

const TeachersListItem = ({
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
  const clientAvatarLink = `https://picsum.photos/seed/${Math.round(
    Math.random() * 100
  )}/200`;

  const onHeartBtnClick = () => {
    console.log("heart button click");
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
        styledClass="heartBtn"
        buttonType="button"
        onClickFunction={onHeartBtnClick}
      >
        <HeartIcon />
      </Button>
      <h2>{`${name} ${surname}`}</h2>
      <p>{`Speaks: ${languages.join(", ")}`}</p>
      <p>{`Lesson Info: ${lesson_info}`}</p>
      <p>{`Conditions: ${conditions.join(" ")}`}</p>
      <p>{experience}</p>
      <img src={clientAvatarLink} alt="" />
    </StyledTeachersListItem>
  );
};

export default TeachersListItem;
