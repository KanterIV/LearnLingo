import Button from "../Button/Button";
import { StyledFilterSimilarityInfo } from "./FilterSimilarityInfo.styled";
import CatPicture from "../../assets/images/cat.png";

const FilterSimilarityInfo = ({ handleResetFilters }) => {
  return (
    <StyledFilterSimilarityInfo>
      <img
        className="filter-info-picture"
        src={CatPicture}
        alt="cat image"
        width="360"
        height="360"
      />
      <div>
        <p className="filter-info-text">
          Unfortunately, <span>no results were found</span>. Please try using
          different filters or click the button below to reset them.
        </p>
        <Button
          styledClass="get-started-btn"
          buttonType="button"
          onClickFunction={handleResetFilters}
        >
          Reset filters
        </Button>
      </div>
    </StyledFilterSimilarityInfo>
  );
};

export default FilterSimilarityInfo;
