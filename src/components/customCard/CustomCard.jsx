import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { Link } from "react-router-dom";
import libraryA from "../../assets/img/libraryA.jpg";
import libraryB from "../../assets/img/libraryB.jpg";
import libraryC from "../../assets/img/libraryC.jpg";

const CustomCard = ({
  thumbnail = libraryB,
  title = "The Summer Days",
  author = "Bibek Hamal",
  year = "2021",
  slug = "Book Title ",
}) => {
  return (
    <Card style={{ width: "18rem" }}>
        <div className="m-2"> 
      <Card.Img variant="top" src={thumbnail} className="rounded"/>
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {author} - {year}
        </Card.Text>
        <Link to={slug}>
          <Button variant="primary">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
