import { memo } from "react";
import { Star } from "lucide-react";

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map(function (_, index) {
        const fillPercentage = Math.min(Math.max(rating - index, 0), 1) * 100;

        return (
          <div key={index} className="relative">
            <Star className="w-4 h-4 text-primary-light" />
            <div
              className="absolute top-0 left-0 overflow-hidden"
              style={{ width: `${fillPercentage}%` }}
            >
              <Star className="w-4 h-4 text-primary-dark fill-primary-default" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default memo(StarRating);
