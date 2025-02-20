import { Star } from "../../icons/CustomIcons";
import React, { useState } from "react";

const StarRating = ({ rating }) => {
  const finalRating = Math.max(0, Math.min(rating, 5));

  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <Star key={index} filled={index < finalRating} />
      ))}
      <div>Your rating: {finalRating}</div>
    </div>
  );
};

export default StarRating;
