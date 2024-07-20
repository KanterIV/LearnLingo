import { ClipLoader } from "react-spinners";
import { StyledLoaderBackdrop } from "./Loader.styled";

const Loader = () => {
  return (
    <StyledLoaderBackdrop>
      <ClipLoader color={`var(--accent-color)`} />
    </StyledLoaderBackdrop>
  );
};

export default Loader;
