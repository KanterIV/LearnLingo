import { StyledTeachersListItem } from "./TeachersListItem.styled";

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
  return (
    <StyledTeachersListItem>
      <img src={avatar_url} alt="Teacher avatar" />
    </StyledTeachersListItem>
  );
};

export default TeachersListItem;
