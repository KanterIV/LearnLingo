import HeartIcon from "../../assets/icons/heart.svg?react";
import { StyledEmptyFavoritesPage } from "./EmptyFavoritesPage.styled";

const EmptyFavoritesPage = () => {
  return (
    <StyledEmptyFavoritesPage>
      <h2 className="empty-page-title">Did you like one of our teachers? </h2>
      <p className="empty-text">
        Don&#39;t lose this contact - save all the data and have permanent
        access to it on the &#171;Favorites&#187; page.
      </p>
      <p className="empty-text empty-text-question">How do you do it ?</p>
      <ul className="empty-page-list">
        <li className="empty-page-item">
          <div>
            <span className="empty-accent-text">Step 1: </span>
          </div>
          <p className="empty-item-text">
            Click on the heart icon in the right corner of the teacher&#39;s
            card
          </p>
          <span className="empty-item-icons">
            <HeartIcon /> &#10231; <HeartIcon />
          </span>
        </li>
        <li className="empty-page-item">
          <span className="empty-accent-text">Step 2:</span> Enjoy &#61;&#41;
        </li>
      </ul>
    </StyledEmptyFavoritesPage>
  );
};

export default EmptyFavoritesPage;
