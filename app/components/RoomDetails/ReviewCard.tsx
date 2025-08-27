interface startRatingProps{
    rating:number
}

// Helper to generate stars
const StarRating:React.FC<startRatingProps> = ({ rating }) => {
    const stars = Array(5)
      .fill(0)
      .map((_, i) => (
        <span key={i}>
          {i < rating ? '⭐' : '☆'}
        </span>
      ));
    return <div className="text-yellow-500 text-lg">{stars}</div>;
  };
  
  
// Props for ReviewCard
interface ReviewCardProps {
    reviewer: string;
    comment: string;
    rating: number;
  }

const  ReviewCard:React.FC<ReviewCardProps> =({ reviewer, comment, rating }) => {
    return (
      <div className="bg-white shadow rounded-lg p-4 mb-4 ">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-semibold text-lg">{reviewer}</h4>
          <StarRating rating={rating} />
        </div>
        <p className="text-gray-600 text-sm">{comment}</p>
      </div>
    );
  };
  export default ReviewCard;