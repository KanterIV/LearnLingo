import { StyledTeacherLevels } from "./TheacherLevels.styled";

const TeacherLevelsList = ({ levels }) => {
  const teacherLevelsItem = levels.map((level) => (
    <li className="level-list-item" key={level}>{`#${level}`}</li>
  ));
  return <StyledTeacherLevels>{teacherLevelsItem}</StyledTeacherLevels>;
};

export default TeacherLevelsList;
