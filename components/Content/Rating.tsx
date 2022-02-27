import { StarIcon } from '@chakra-ui/icons';

interface RatingProps {
  handleMouseEnter: (e: any) => void;
  handleMouseLeave: () => void;
  handleClick: (e: any) => void;
  hovered: string;
  selected: string;
}

export default function Rating({
  handleMouseEnter,
  handleMouseLeave,
  handleClick,
  hovered,
  selected,
}: RatingProps) {
  return (
    <div className="item">
      <p className="subtitle">Rate this applicant</p>
      <p className="value stars" onMouseLeave={handleMouseLeave}>
        <StarIcon
          boxSize={6}
          onMouseEnter={handleMouseEnter}
          onClick={handleClick}
          color={
            hovered.includes('1') || selected.includes('1') ? '#ffd700' : '#bbb'
          }
          id="1"
        />
        <StarIcon
          boxSize={6}
          onMouseEnter={handleMouseEnter}
          onClick={handleClick}
          color={
            hovered.includes('2') || selected.includes('2') ? '#ffd700' : '#bbb'
          }
          id="12"
        />
        <StarIcon
          boxSize={6}
          onMouseEnter={handleMouseEnter}
          onClick={handleClick}
          color={
            hovered.includes('3') || selected.includes('3') ? '#ffd700' : '#bbb'
          }
          id="123"
        />
        <StarIcon
          boxSize={6}
          onMouseEnter={handleMouseEnter}
          onClick={handleClick}
          color={
            hovered.includes('4') || selected.includes('4') ? '#ffd700' : '#bbb'
          }
          id="1234"
        />
        <StarIcon
          boxSize={6}
          onMouseEnter={handleMouseEnter}
          onClick={handleClick}
          color={
            hovered.includes('5') || selected.includes('5') ? '#ffd700' : '#bbb'
          }
          id="12345"
        />
      </p>
    </div>
  );
}
