import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllTeachers } from "../../redux/user/userSlice";
import TeachersList from "../../components/TeachersList/TeachersList";

const Teachers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTeachers());
  }, [dispatch]);

  return (
    <>
      <TeachersList />
    </>
  );
};

export default Teachers;
