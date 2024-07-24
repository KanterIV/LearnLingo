import { StyledTeachersList } from "./TeachersList.styled";
import TeachersListItem from "../TeachersListItem/TeachersListItem";

const TeachersList = ({ teachersArr, filterLevel }) => {
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
            id,
          } = teacher;

          return (
            <TeachersListItem
              key={id}
              id={id}
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
              filterLevel={filterLevel}
            />
          );
        })}
    </StyledTeachersList>
  );
};

export default TeachersList;
