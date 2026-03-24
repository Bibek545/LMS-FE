import React from "react";
import Star from "../star/Star";
import { formatDistanceToNow } from "date-fns";

const reviews = [
  {
    title: "this is awesome book",
    rating: 4.5,
    details:
      "My name is bibek hamal,My name is bibek hamal,My name is bibek hamal,My name is bibek hamal",
    createdAt: "2026-1-22",
    reviewdBy: "Bibek Hamal",
  },
  {
    title: "this is awesome book",
    rating: 4.5,
    details:
      "My name is bibek hamal,My name is bibek hamal,My name is bibek hamal,My name is bibek hamal",
    createdAt: "2022-2-22",
    reviewdBy: "Bibek Hamal",
  },
  {
    title: "this is awesome book",
    rating: 4.5,
    details:
      "My name is bibek hamal,My name is bibek hamal,My name is bibek hamal,My name is bibek hamal",
    createdAt: "2022-2-22",
    reviewdBy: "Bibek Hamal",
  },
  {
    title: "this is awesome book",
    rating: 4.5,
    details:
      "My name is bibek hamal,My name is bibek hamal,My name is bibek hamal,My name is bibek hamal",
    createdAt: "2022-2-22",
    reviewdBy: "Bibek Hamal",
  },
];
const Reviews = ({}) => {
  return (
    <div className="reviews-tab">
      {reviews.map((r, i) => (
        <div
          key={i}
          className="border rounded p-3 shadow-lg d-flex review-item gap-5"
        >
          <div className="left d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center fs-1 fw-bold">
              BH
            </div>
          </div>
          <div className="right">
            <h3>{r.title}</h3>
            <div
              className="
            d-flex gap-3"
            >
              <Star avgRating={r.rating} /> <span>
                {formatDistanceToNow(new Date(r.createdAt), { addSuffix: true })}
              </span>
            </div>

            <p>{r.details}</p>
            <div className="text-end"> {r.reviewdBy}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
