import { FaStar, FaRegStar } from 'react-icons/fa';

const Rating = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1 <= rating);

  return (
    <div className='flex items-center gap-x-1'>
      {stars.map((isFilled, i) => {
        const className = `size-3 ${
          isFilled ? 'text-primary' : 'text-grey-400'
        }`;
        return isFilled ? (
          <FaStar className={className} key={i} />
        ) : (
          <FaRegStar className={className} key={i} />
        );
      })}
    </div>
  );
};

export default Rating;

// Stars display logic
// Let rating = 2
// 1 <= 2 - true
// 2 <= 2 - true
// 3 <= 2 - false
// 4 <= 2 - false
// 5 <= 2 - false
// If true display FaStar else display FaRegStar
