import { radioButtonsOptions } from "../../../assets/data/radioButtonsOptions";

const RadioBtnList = ({ radioBtnValue, handleRadioBtnClick }) => {
  const radioBtnsMarkup = radioButtonsOptions.map((option) => {
    return (
      <div key={option.id}>
        <input
          className={`radioBtn ${option.id}`}
          type="radio"
          id={option.id}
          name="reason"
          value={option.value}
          checked={option.value === radioBtnValue}
          onChange={handleRadioBtnClick}
        />
        <label htmlFor={option.id}>{option.value}</label>
      </div>
    );
  });
  return <div>{radioBtnsMarkup}</div>;
};

export default RadioBtnList;
