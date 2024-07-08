export const MobileSelectStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: "#FFFFFF",
    borderRadius: "14px",
    border: "none",
    width: "100%",
    boxShadow: isFocused && "0 0 0 1px #9fbaae",
    borderColor: isFocused && "#9fbaae",
  }),
  indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
  menu: (styles) => ({
    ...styles,
    width: "100%",
    borderRadius: "14px",
    "z-index": 3,
  }),
  option: (styles, { isSelected }) => ({
    ...styles,
    borderRadius: "8px",
    backgroundColor: isSelected && "#9fbaae",
  }),
  dropdownIndicator: (styles, { isFocused }) => ({
    ...styles,
    color: isFocused ? "#9fbaae" : "#121417",
    "&:hover": {
      color: "#9fbaae",
    },
  }),
};

export const TabletDesktopSelectStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: "#FFFFFF",
    borderRadius: "14px",
    border: "none",
    width: "100%",
    height: "48px",
    fontSize: "18px",
    boxShadow: isFocused && "0 0 0 1px #9fbaae",
    borderColor: isFocused && "#9fbaae",
  }),
  indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
  menu: (styles) => ({
    ...styles,
    width: "100%",
    borderRadius: "14px",
    "z-index": 3,
  }),
  option: (styles, { isSelected }) => ({
    ...styles,
    borderRadius: "8px",
    backgroundColor: isSelected && "#9fbaae",
  }),
  dropdownIndicator: (styles, { isFocused }) => ({
    ...styles,
    color: isFocused ? "#9fbaae" : "#121417",
    "&:hover": {
      color: "#9fbaae",
    },
  }),
};
