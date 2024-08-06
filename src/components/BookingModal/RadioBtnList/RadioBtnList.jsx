import { radioButtonsOptions } from "../../../utils/constants/radioButtonsOptions";

const RadioBtnList = ({ radioBtnValue, handleRadioBtnClick }) => {
  const radioBtnsMarkup = radioButtonsOptions.map((option) => {
    return (
      <label className="radio-lable" key={option.id}>
        <input
          className={`radio-button ${option.id}-button`}
          type="radio"
          id={option.id}
          name="reason"
          value={option.value}
          checked={option.value === radioBtnValue}
          onChange={handleRadioBtnClick}
        />
        <span className="custom-radio-button" />
        {option.value}
      </label>
    );
  });
  return (
    <fieldset className="radio-buttons-fieldset">{radioBtnsMarkup}</fieldset>
  );
};

export default RadioBtnList;
