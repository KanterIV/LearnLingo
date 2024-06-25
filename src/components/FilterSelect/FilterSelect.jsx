import Select from "react-select";
import {
  languageLevel,
  teachersLanguage,
  teachersPrice,
} from "../../assets/data/teachersFilterVariables";

const FilterSelect = () => {
  const selectStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#FFFFFF",
      //   border: "none",
      borderRadius: "14px",
      width: "400px",
    }),
    indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
    menu: (styles) => ({ ...styles, width: "400px" }),
  };

  return (
    <ul>
      <li>
        <p>Languages</p>
        <Select
          options={teachersLanguage}
          defaultValue={teachersLanguage[0]}
          blurInputOnSelect="true"
          hideSelectedOptions="true"
          styles={selectStyles}
        />
      </li>
      <li>
        <p>Level of knowledge</p>
        <Select
          options={languageLevel}
          defaultValue={languageLevel[0]}
          blurInputOnSelect="true"
          hideSelectedOptions="true"
          styles={selectStyles}
        />
      </li>
      <li>
        <p>Price</p>
        <Select
          options={teachersPrice}
          defaultValue={teachersPrice[0]}
          blurInputOnSelect="true"
          hideSelectedOptions="true"
          styles={selectStyles}
        />
      </li>
    </ul>
  );
};

export default FilterSelect;
