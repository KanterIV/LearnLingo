import { useSelector } from "react-redux";
import { StyledTeachersList } from "./TeachersList.styled";
import { selectAllteachers } from "../../redux/user/userSelectors";
import TeachersListItem from "../TeachersListItem/TeachersListItem";

const TeachersList = () => {
  const teachersArr = useSelector(selectAllteachers);

  return (
    <StyledTeachersList>
      {teachersArr.length !== 0 &&
        teachersArr.map((teacher) => {
          const {
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
          } = teacher;

          return (
            <TeachersListItem
              key={avatar_url}
              name={name}
              surname={surname}
              languages={languages}
              levels={levels}
              rating={rating}
              reviews={reviews}
              price_per_hour={price_per_hour}
              lessons_done={lessons_done}
              avatar_url={avatar_url}
              lesson_info={lesson_info}
              conditions={conditions}
              experience={experience}
            />
          );
        })}
    </StyledTeachersList>
  );
};

export default TeachersList;
