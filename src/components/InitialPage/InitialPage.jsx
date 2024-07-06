import Button from "../Button/Button";
import MainPicture from "../../assets/images/mainimage.png";
import { useNavigate } from "react-router-dom";
import { StyledInitialPage } from "./InitialPage.styled";

const InitialPage = () => {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate("/teachers");
  };

  return (
    <StyledInitialPage className="container initialpage-container">
      <div className="wrapper">
        <img
          className="initialpage-picture"
          src={MainPicture}
          alt="Main page picture"
        />
        <div className="info-wrapper">
          <h1 className="title">
            Unlock your potential with the best{" "}
            <span className="accent-word">language</span> tutors
          </h1>
          <p className="description">
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <Button
            buttonType="button"
            styledClass="get-started-btn"
            onClickFunction={onButtonClick}
          >
            Get started
          </Button>
        </div>
      </div>
      <ul className="stats-list">
        <li className="stats-list-item">
          <span className="stats-item-accent">32,000 +</span>
          <p className="stats-item-text">Experienced tutors</p>
        </li>
        <li className="stats-list-item">
          <span className="stats-item-accent">300,000 +</span>
          <p className="stats-item-text">5-star tutor reviews</p>
        </li>
        <li className="stats-list-item">
          <span className="stats-item-accent">120 +</span>
          <p className="stats-item-text">Subjects taught</p>
        </li>
        <li className="stats-list-item">
          <span className="stats-item-accent">200 +</span>
          <p className="stats-item-text">Tutor nationalities</p>
        </li>
      </ul>
    </StyledInitialPage>
  );
};

export default InitialPage;
