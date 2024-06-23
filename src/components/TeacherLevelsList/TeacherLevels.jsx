import { StyledTeacherLevels } from "./TheacherLevels.styled";

const TeacherLevelsList = ({ levels }) => {
  const teacherLevelsItem = levels.map((level) => (
    <li key={level}>{`#${level}`}</li>
  ));
  return <StyledTeacherLevels>{teacherLevelsItem}</StyledTeacherLevels>;
};

export default TeacherLevelsList;
