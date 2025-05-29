// Replace import { Star } from "lucide-react" with a custom SVG

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const StarIcon = ({
  filled,
  half,
  className = '',
}: {
  filled?: boolean;
  half?: boolean;
  className?: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    fill={
      filled
        ? 'url(#star-gradient)'
        : half
        ? 'url(#star-gradient-half)'
        : 'none'
    }
    stroke="#fbbf24"
    strokeWidth="1.5"
    className={className}
    style={{
      filter: filled || half ? 'drop-shadow(0 1px 4px #fbbf24aa)' : undefined,
    }}
  >
    <defs>
      <linearGradient id="star-gradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffe066" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>
      <linearGradient id="star-gradient-half" x1="0" y1="0" x2="1" y2="0">
        <stop offset="50%" stopColor="#ffe066" />
        <stop offset="50%" stopColor="#fff" />
      </linearGradient>
    </defs>
    <polygon
      points="12,2 15,9 22,9.5 17,14.5 18.5,22 12,18.5 5.5,22 7,14.5 2,9.5 9,9"
      strokeLinejoin="round"
      strokeLinecap="round"
      fill={
        filled
          ? 'url(#star-gradient)'
          : half
          ? 'url(#star-gradient-half)'
          : 'none'
      }
    />
  </svg>
);

/**
 * StarRating component to visually display ratings
 *
 * @param rating - The rating value (e.g., 4.5)
 * @param maxRating - The maximum possible rating (default: 5)
 * @param size - Size of the stars (small, medium, or large)
 * @param className - Additional CSS classes
 */
export function StarRating({
  rating,
  maxRating = 5,
  size = 'md',
  className = '',
}: StarRatingProps) {
  // Determine star size based on the size prop
  const starSize = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-7 h-7',
  }[size];

  // Create an array of length maxRating (e.g., [0, 1, 2, 3, 4] for maxRating=5)
  const stars = Array.from({ length: maxRating }, (_, i) => i + 1);

  return (
    <div className={`flex items-center ${className}`}>
      {stars.map((star) => {
        const filled = star <= Math.floor(rating);
        const half = !filled && star - 0.5 <= rating;
        return (
          <StarIcon
            key={star}
            filled={filled}
            half={half}
            className={starSize + ' mx-0.5'}
          />
        );
      })}
    </div>
  );
}
