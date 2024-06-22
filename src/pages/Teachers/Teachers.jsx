import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTeachers } from "../../redux/user/userSlice";
import TeachersList from "../../components/TeachersList/TeachersList";
import { selectAllteachers } from "../../redux/user/userSelectors";
import Button from "../../components/Button/Button";

const Teachers = () => {
  const [visibleTeachersArr, setVisibleTeachersArr] = useState(4);
  const allTeachersArr = useSelector(selectAllteachers);
  const dispatch = useDispatch();

  const onloadMoreBtnClick = () => {
    setVisibleTeachersArr((prevState) => prevState + 4);
  };
  useEffect(() => {
    dispatch(getAllTeachers());
  }, [dispatch]);

  return (
    <>
      <TeachersList teachersArr={allTeachersArr.slice(0, visibleTeachersArr)} />
      {allTeachersArr.length > visibleTeachersArr && (
        <Button
          styledClass="registerBtn"
          buttonType="button"
          onClickFunction={onloadMoreBtnClick}
        >
          Load more
        </Button>
      )}
    </>
  );
};

export default Teachers;
