import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTeachers } from "../../redux/user/userSlice";
import TeachersList from "../../components/TeachersList/TeachersList";
import { selectAllteachers } from "../../redux/user/userSelectors";
import Button from "../../components/Button/Button";
import FilterSelect from "../../components/FilterSelect/FilterSelect";
import { handleFilter } from "../../services/teacherFiltration";
import { StyledTeachersPage } from "./Teachers.styled";

const Teachers = () => {
  const [visibleTeachersArr, setVisibleTeachersArr] = useState(4);
  const [filtredArray, setFiltredArray] = useState([]);
  const [teacherfilters, setTeacherFilters] = useState({
    languages: null,
    levels: null,
    price_per_hour: null,
  });

  const allTeachersArr = useSelector(selectAllteachers);
  const dispatch = useDispatch();

  const onloadMoreBtnClick = () => {
    setVisibleTeachersArr((prevState) => prevState + 4);
  };
  useEffect(() => {
    if (allTeachersArr.length === 0) {
      dispatch(getAllTeachers());
    }
  }, [dispatch, allTeachersArr]);

  useEffect(() => {
    const filtered = handleFilter(allTeachersArr, teacherfilters);
    setFiltredArray(filtered);
  }, [allTeachersArr, teacherfilters]);

  const teachersToShow =
    filtredArray.length > 0 ? filtredArray : allTeachersArr;

  return (
    <StyledTeachersPage>
      <div className="container teachers-container">
        <FilterSelect setTeacherFilters={setTeacherFilters} />
        <TeachersList
          teachersArr={teachersToShow.slice(0, visibleTeachersArr)}
          filterLevel={teacherfilters.levels}
        />
        {teachersToShow.length > visibleTeachersArr && (
          <Button
            styledClass="loadMoreBtn"
            buttonType="button"
            onClickFunction={onloadMoreBtnClick}
          >
            Load more
          </Button>
        )}
      </div>
    </StyledTeachersPage>
  );
};

export default Teachers;
