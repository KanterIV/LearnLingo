import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTeachers } from "../../redux/user/userSlice";
import { selectAllteachers } from "../../redux/user/userSelectors";
import TeachersList from "../../components/TeachersList/TeachersList";
import Button from "../../components/Button/Button";
import FilterSelect from "../../components/FilterSelect/FilterSelect";
import FilterSimilarityInfo from "../../components/FilterSimilarityInfo/FilterSimilarityInfo";
import { handleFilter } from "../../utils/helpers/teacherFiltration";
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

  const handleResetFilters = () => {
    setTeacherFilters({
      languages: null,
      levels: null,
      price_per_hour: null,
    });
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
    filtredArray && filtredArray.length > 0 ? filtredArray : allTeachersArr;

  return (
    <StyledTeachersPage>
      <div className="container teachers-container">
        <FilterSelect
          teacherfilters={teacherfilters}
          setTeacherFilters={setTeacherFilters}
        />
        {filtredArray !== null ? (
          <TeachersList
            teachersArr={teachersToShow.slice(0, visibleTeachersArr)}
            filterLevel={teacherfilters.levels}
          />
        ) : (
          <FilterSimilarityInfo handleResetFilters={handleResetFilters} />
        )}
        {filtredArray && teachersToShow.length > visibleTeachersArr && (
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
