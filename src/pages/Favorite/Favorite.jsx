import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectFavoriteteachers } from "../../redux/user/userSelectors";
import TeachersList from "../../components/TeachersList/TeachersList";
import Button from "../../components/Button/Button";
import FilterSelect from "../../components/FilterSelect/FilterSelect";
import { handleFilter } from "../../services/teacherFiltration";
import { StyledFavoritePage } from "./Favorite.styled";
import EmptyFavoritesPage from "../../components/EmptyFavoritePage/EmptyFavoritesPage";
import FilterSimilarityInfo from "../../components/FilterSimilarityInfo/FilterSimilarityInfo";

const Favorite = () => {
  const [visibleTeachersArr, setVisibleTeachersArr] = useState(4);
  const [filtredArray, setFiltredArray] = useState([]);
  const [teacherfilters, setTeacherFilters] = useState({
    languages: null,
    levels: null,
    price_per_hour: null,
  });
  const favotireTeachersArr = useSelector(selectFavoriteteachers);

  useEffect(() => {
    const filtered = handleFilter(favotireTeachersArr, teacherfilters);
    setFiltredArray(filtered);
  }, [favotireTeachersArr, teacherfilters]);

  const teachersToShow =
    filtredArray && filtredArray.length > 0
      ? filtredArray
      : favotireTeachersArr;

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

  return (
    <StyledFavoritePage>
      <div className="container favorite-container">
        <FilterSelect
          teacherfilters={teacherfilters}
          setTeacherFilters={setTeacherFilters}
        />
        {favotireTeachersArr.length > 0 ? (
          filtredArray !== null ? (
            <TeachersList
              teachersArr={teachersToShow.slice(0, visibleTeachersArr)}
            />
          ) : (
            <FilterSimilarityInfo handleResetFilters={handleResetFilters} />
          )
        ) : (
          <EmptyFavoritesPage />
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
    </StyledFavoritePage>
  );
};

export default Favorite;
