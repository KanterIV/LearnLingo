import Button from "../Button/Button";
import MainPicture from "../../assets/images/mainimage.png";

const InitialPage = () => {
  return (
    <>
      <h1>Unlock your potential with the best language tutors</h1>
      <p>
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </p>
      <Button>Get started</Button>
      <img src={MainPicture} alt="Main page picture" />
      <ul>
        <li>
          <span>32,000 +</span>
          <p>Experienced tutors</p>
        </li>
        <li>
          <span>300,000 +</span>
          <p>5-star tutor reviews</p>
        </li>
        <li>
          <span>120 +</span>
          <p>Subjects taught</p>
        </li>
        <li>
          <span>200 +</span>
          <p>Tutor nationalities</p>
        </li>
      </ul>
    </>
  );
};

export default InitialPage;
