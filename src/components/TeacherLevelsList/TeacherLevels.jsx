import { StyledTeacherLevels } from "./TheacherLevels.styled";

const TeacherLevelsList = ({ levels, filterLevel }) => {
  const teacherLevelsItem = levels.map((level) => (
    <li
      className={
        level === filterLevel
          ? "level-list-item accent-level-list-item"
          : "level-list-item"
      }
      key={level}
    >{`#${level}`}</li>
  ));
  return <StyledTeacherLevels>{teacherLevelsItem}</StyledTeacherLevels>;
};

export default TeacherLevelsList;
