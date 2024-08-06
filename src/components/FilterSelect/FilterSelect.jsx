import Select from "react-select";
import {
  languageLevel,
  teachersLanguage,
  teachersPrice,
} from "../../utils/constants/teachersFilterVariables";
import { StyledFilterSelectList } from "./FilterSelect.styled";
import {
  MobileSelectStyles,
  TabletDesktopSelectStyles,
} from "../../utils/helpers/selectStyles";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

const FilterSelect = ({ teacherfilters, setTeacherFilters }) => {
  const [{ languages, levels, price_per_hour }, setSelectValue] = useState({
    languages: null,
    levels: null,
    price_per_hour: null,
  });

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const handleSelectChange = (selectOption, { name }) => {
    setTeacherFilters((prevState) => ({
      ...prevState,
      [name]: selectOption.value,
    }));
  };

  useEffect(() => {
    const handleSelectValueChange = (filters) => {
      const { languages, levels, price_per_hour } = filters;

      const findOption = (options, value) =>
        options.find((option) => option.value === value);

      setSelectValue({
        languages: findOption(teachersLanguage, languages),
        levels: findOption(languageLevel, levels),
        price_per_hour: findOption(teachersPrice, price_per_hour),
      });
    };

    handleSelectValueChange(teacherfilters);
  }, [teacherfilters]);

  return (
    <StyledFilterSelectList className="filter-list">
      <li className="filter-list-item">
        <p className="filter-title">Languages</p>
        <Select
          name="languages"
          value={languages ? languages : null}
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
          value={levels ? levels : null}
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
          value={price_per_hour ? price_per_hour : null}
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
