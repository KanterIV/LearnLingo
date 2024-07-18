import { Tooltip } from "react-tooltip";

const TooltipModal = () => {
  return (
    <Tooltip
      anchorSelect=".unlogged"
      openOnClick="true"
      place="top-end"
      className="favorite-tooltip"
      classNameArrow="favorite-tooltip-arrow"
      delayShow={150}
      delayHide={150}
    >
      Please sign in !
    </Tooltip>
  );
};

export default TooltipModal;
