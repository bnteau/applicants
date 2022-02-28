import { StarIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';
import { RatingProps } from './types';

function Point() {
  return <StarIcon boxSize={6} color="#ffd700" />;
}

function NoPoint() {
  return <StarIcon boxSize={6} color="#bbb" />;
}

const MAX_RATING = 5;

export default function Rating({
  // handleClick,
  applicant,
  value,
  onSelect,
}: RatingProps): JSX.Element {
  const [displayedValue, setCurrentValue] = useState(value);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  return (
    <div className="item">
      <p className="subtitle">Rate this applicant</p>
      <div className="value stars">
        {[...new Array(MAX_RATING)].map((_, index) => {
          index += 1;
          return (
            <button
              className="star"
              type="submit"
              key={index}
              onMouseEnter={(): void => setCurrentValue(index)}
              onMouseLeave={(): void => setCurrentValue(value)}
              onClick={(e): void => {
                e.preventDefault();
                onSelect(index);
                if (applicant) applicant.rating = value;
              }}
            >
              {index <= displayedValue ? <Point /> : <NoPoint />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
