import { Star } from "lucide-react"

interface StarRatingProps {
  rating: number
  maxRating?: number
  size?: "sm" | "md" | "lg"
  className?: string
}

/**
 * StarRating component to visually display ratings
 *
 * @param rating - The rating value (e.g., 4.5)
 * @param maxRating - The maximum possible rating (default: 5)
 * @param size - Size of the stars (small, medium, or large)
 * @param className - Additional CSS classes
 */
export function StarRating({ rating, maxRating = 5, size = "md", className = "" }: StarRatingProps) {
  // Determine star size based on the size prop
  const starSize = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  }[size]

  // Create an array of length maxRating (e.g., [0, 1, 2, 3, 4] for maxRating=5)
  const stars = Array.from({ length: maxRating }, (_, i) => i + 1)

  return (
    <div className={`flex items-center ${className}`}>
      {stars.map((star) => (
        <Star
          key={star}
          className={`${starSize} ${
            star <= rating
              ? "text-yellow-400 fill-yellow-400" // Filled star
              : star - 0.5 <= rating
                ? "text-yellow-400 fill-yellow-400/50" // Half star (simplified)
                : "text-gray-300" // Empty star
          }`}
        />
      ))}
    </div>
  )
}
