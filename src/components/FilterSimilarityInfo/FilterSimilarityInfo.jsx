import Button from "../Button/Button";
import { StyledFilterSimilarityInfo } from "./FilterSimilarityInfo.styled";

const FilterSimilarityInfo = ({ handleResetFilters }) => {
  return (
    <StyledFilterSimilarityInfo>
      <p>
        Nothing found! Please select some other filter or click the button below
        to reset it.
      </p>

      <Button buttonType="button" onClickFunction={handleResetFilters}>
        Reset filters
      </Button>
    </StyledFilterSimilarityInfo>
  );
};

export default FilterSimilarityInfo;
