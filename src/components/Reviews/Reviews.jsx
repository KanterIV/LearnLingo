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
          <div className="reviewer-details">
            <img
              src={clientAvatarLink()}
              className="reviewer_avatar"
              alt="User avatar"
            />
            <div>
              <p className="reviewer-name">{reviewer_name}</p>
              <div className="reviewer-rate-wrapper">
                <StartIcon />
                <p className="reviewer-rate">{`${reviewer_rating}.0`}</p>
              </div>
            </div>
          </div>
          <p className="reviewer-comment">{comment}</p>
        </StyledReviews>
      );
    });

  return reviews.length !== 0 ? reviewMarkup() : null;
};

export default Reviews;
