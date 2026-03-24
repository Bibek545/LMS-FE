import { Placeholder } from "react-bootstrap";

export const reviewInputes = [
  {
    label: "Title ",
    name: "title",
    type: "text",
    required: true,
    placeholder: "Book Title",
  },
  {
    label: "Review Message ",
    name: "reviewMessage",
    type: "Number",
    as: "textarea",
    required: true,
    placeholder: "write your review here",
  },
   {
    label: "Rating ",
    name: "rating",
    type: "Number",
    min: "1",
    max: "5",
    required: true,
    placeholder: "Rate the book from 1 to 5",
  },
];
