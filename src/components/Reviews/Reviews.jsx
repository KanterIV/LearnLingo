import { StyledReviews } from "./Reviews.styled";
import StartIcon from "../../assets/icons/star.svg?react";

const Reviews = ({ reviews }) => {
  const clientAvatarLink = () => {
    return `https://picsum.photos/seed/${Math.round(Math.random() * 100)}/200`;
  };

  const reviewMarkup = () =>
    reviews.map((review, index) => {
      const { reviewer_name, reviewer_rating, comment } = review;

      return (
        <StyledReviews key={`${reviewer_name}_${index}_${reviewer_rating}`}>
          <img src={clientAvatarLink()} alt="User avatar" />
          <p>{reviewer_name}</p>
          <StartIcon />
          <p>{reviewer_rating}</p>
          <p>{comment}</p>
        </StyledReviews>
      );
    });

  return reviews.length !== 0 ? reviewMarkup() : null;
};

export default Reviews;
