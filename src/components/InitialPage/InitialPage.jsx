import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { StyledInitialPage } from "./InitialPage.styled";

import MainPictureX1webp from "../../assets/images/mainimage@1x.webp";
import MainPictureX2webp from "../../assets/images/mainimage@2x.webp";
import MainPictureX3webp from "../../assets/images/mainimage@3x.webp";
import MainPictureX1png from "../../assets/images/mainimage@1x.png";
import MainPictureX2png from "../../assets/images/mainimage@2x.png";
import MainPictureX3png from "../../assets/images/mainimage@3x.png";
import MainPictureX1jpg from "../../assets/images/mainimage@1x.jpg";
import MainPictureX2jpg from "../../assets/images/mainimage@2x.jpg";
import MainPictureX3jpg from "../../assets/images/mainimage@3x.jpg";

const InitialPage = () => {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate("/teachers");
  };

  return (
    <StyledInitialPage className="container initialpage-container">
      <div className="wrapper">
        <picture>
          <source
            srcSet={`${MainPictureX1webp} 1x,
            ${MainPictureX2webp} 2x,
            ${MainPictureX3webp} 3x
            `}
            type="image/webp"
          />
          <source
            srcSet={`${MainPictureX1png} 1x,
            ${MainPictureX2png} 2x,
            ${MainPictureX3png} 3x
            `}
            type="image/png"
          />
          <source
            srcSet={`${MainPictureX1jpg} 1x,
            ${MainPictureX2jpg} 2x,
            ${MainPictureX3jpg} 3x
            `}
            type="image/jpg"
          />
          <img
            className="initialpage-picture"
            src={MainPictureX1png}
            alt="Main page picture"
            width="568"
          />
        </picture>

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
