import Select from "react-select";
import {
  languageLevel,
  teachersLanguage,
  teachersPrice,
} from "../../assets/data/teachersFilterVariables";
import { StyledFilterSelectList } from "./FilterSelect.styled";
import {
  MobileSelectStyles,
  TabletDesktopSelectStyles,
} from "../../assets/data/selectStyles";
import { useMediaQuery } from "react-responsive";

const FilterSelect = ({ setTeacherFilters }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const handleSelectChange = (selectOption, { name }) => {
    setTeacherFilters((prevState) => ({
      ...prevState,
      [name]: selectOption.value,
    }));
  };

  return (
    <StyledFilterSelectList className="filter-list">
      <li className="filter-list-item">
        <p className="filter-title">Languages</p>
        <Select
          name="languages"
          placeholder="Language"
          aria-label="language filter"
          options={teachersLanguage}
          blurInputOnSelect="true"
          styles={isMobile ? MobileSelectStyles : TabletDesktopSelectStyles}
          onChange={handleSelectChange}
        />
      </li>
      <li className="filter-list-item">
        <p className="filter-title">Level of knowledge</p>
        <Select
          name="levels"
          placeholder="Level"
          aria-label="level filter"
          options={languageLevel}
          blurInputOnSelect="true"
          styles={isMobile ? MobileSelectStyles : TabletDesktopSelectStyles}
          onChange={handleSelectChange}
        />
      </li>
      <li className="filter-list-item">
        <p className="filter-title">Price</p>
        <Select
          name="price_per_hour"
          placeholder="$/hour"
          aria-label="price filter"
          options={teachersPrice}
          blurInputOnSelect="true"
          styles={isMobile ? MobileSelectStyles : TabletDesktopSelectStyles}
          onChange={handleSelectChange}
        />
      </li>
    </StyledFilterSelectList>
  );
};

export default FilterSelect;
