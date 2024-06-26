import Select from "react-select";
import {
  languageLevel,
  teachersLanguage,
  teachersPrice,
} from "../../assets/data/teachersFilterVariables";

const FilterSelect = ({ setTeacherFilters }) => {
  const selectStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#FFFFFF",
      borderRadius: "14px",
      width: "400px",
    }),
    indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
    menu: (styles) => ({ ...styles, width: "400px" }),
  };

  const handleSelectChange = (selectOption, { name }) => {
    setTeacherFilters((prevState) => ({
      ...prevState,
      [name]: selectOption.value,
    }));
  };

  return (
    <ul>
      <li>
        <p>Languages</p>
        <Select
          name="languages"
          placeholder="Language"
          options={teachersLanguage}
          blurInputOnSelect="true"
          styles={selectStyles}
          onChange={handleSelectChange}
        />
      </li>
      <li>
        <p>Level of knowledge</p>
        <Select
          name="levels"
          placeholder="Level"
          options={languageLevel}
          blurInputOnSelect="true"
          styles={selectStyles}
          onChange={handleSelectChange}
        />
      </li>
      <li>
        <p>Price</p>
        <Select
          name="price_per_hour"
          placeholder="$/hour"
          options={teachersPrice}
          blurInputOnSelect="true"
          styles={selectStyles}
          onChange={handleSelectChange}
        />
      </li>
    </ul>
  );
};

export default FilterSelect;
