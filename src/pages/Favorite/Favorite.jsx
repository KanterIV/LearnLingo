import { useSelector } from "react-redux";
import { selectFavoriteteachers } from "../../redux/user/userSelectors";
import TeachersList from "../../components/TeachersList/TeachersList";
import { useState } from "react";
import Button from "../../components/Button/Button";

const Favorite = () => {
  const [visibleTeachersArr, setVisibleTeachersArr] = useState(4);
  const favotireTeachersArr = useSelector(selectFavoriteteachers);

  const onloadMoreBtnClick = () => {
    setVisibleTeachersArr((prevState) => prevState + 4);
  };

  return (
    <>
      <TeachersList
        teachersArr={favotireTeachersArr.slice(0, visibleTeachersArr)}
      />
      {favotireTeachersArr.length > visibleTeachersArr && (
        <Button
          styledClass="load-more-btn"
          buttonType="button"
          onClickFunction={onloadMoreBtnClick}
        >
          Load more
        </Button>
      )}
    </>
  );
};

export default Favorite;
