import { StarIcon } from '@chakra-ui/icons';
import { RatingProps } from './types';

function Point() {
  return <StarIcon boxSize={6} color="#ffd700" />;
}

function NoPoint() {
  return <StarIcon boxSize={6} color="#bbb" />;
}

const MAX_RATING = 5;

export default function Rating({
  rating,
  onUpdateRating,
}: RatingProps): JSX.Element {
  return (
    <div className="item">
      <p className="subtitle">Rate this applicant</p>
      <div className="value stars">
        {new Array(MAX_RATING).fill(undefined).map((_, index) => {
          index += 1;
          return (
            <button
              className="star"
              type="submit"
              key={index}
              onClick={(e): void => {
                e.preventDefault();
                onUpdateRating(index);
              }}
            >
              {index <= rating ? <Point /> : <NoPoint />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
