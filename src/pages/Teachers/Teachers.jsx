import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTeachers } from "../../redux/user/userSlice";
import TeachersList from "../../components/TeachersList/TeachersList";
import { selectAllteachers } from "../../redux/user/userSelectors";
import Button from "../../components/Button/Button";
import FilterSelect from "../../components/FilterSelect/FilterSelect";

const Teachers = () => {
  const [visibleTeachersArr, setVisibleTeachersArr] = useState(4);
  const [filtredArray, setFiltredArray] = useState([]);
  const [teacherfilters, setTeacherFilters] = useState({
    languages: null,
    levels: null,
    price_per_hour: null,
  });
  console.log(filtredArray);

  const allTeachersArr = useSelector(selectAllteachers);
  const dispatch = useDispatch();

  const onloadMoreBtnClick = () => {
    setVisibleTeachersArr((prevState) => prevState + 4);
  };
  useEffect(() => {
    dispatch(getAllTeachers());
  }, [dispatch]);

  useEffect(() => {
    const handleFilter = (teachers, filters) => {
      const { languages, levels, price_per_hour } = filters;
      if (!teachers) {
        return [];
      }
      if (!languages && !levels && !price_per_hour) {
        return [];
      }

      const filteredTeacherArray = teachers.filter((teacher) => {
        let matches = true;

        if (teacherfilters.languages) {
          matches = matches && teacher.languages.includes(filters.languages);
        }

        if (teacherfilters.levels) {
          matches = matches && teacher.levels.includes(filters.levels);
        }

        if (teacherfilters.price_per_hour) {
          matches =
            matches &&
            Number(teacher.price_per_hour) === Number(filters.price_per_hour);
        }
        return matches;
      });

      if (filteredTeacherArray.length > 0) {
        return filteredTeacherArray;
      } else {
        return [];
      }
    };
    const filtered = handleFilter(allTeachersArr, teacherfilters);
    setFiltredArray(filtered);
  }, [allTeachersArr, teacherfilters]);

  const teachersToShow =
    filtredArray.length > 0 ? filtredArray : allTeachersArr;

  return (
    <>
      <FilterSelect setTeacherFilters={setTeacherFilters} />
      <TeachersList teachersArr={teachersToShow.slice(0, visibleTeachersArr)} />
      {teachersToShow.length > visibleTeachersArr && (
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
