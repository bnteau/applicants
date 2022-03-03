import { StarIcon } from '@chakra-ui/icons';
import { useStore } from './store/hook';

function Point() {
  return <StarIcon boxSize={6} color="#ffd700" />;
}

function NoPoint() {
  return <StarIcon boxSize={6} color="#bbb" />;
}

const MAX_RATING = 5;

export default function Rating(): JSX.Element {
  const { updateRating, currentRating } = useStore();

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
                updateRating(index);
              }}
            >
              {index <= currentRating ? <Point /> : <NoPoint />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
