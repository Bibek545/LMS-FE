import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { Link } from "react-router-dom";
import libraryA from "../../assets/img/libraryA.jpg";
import libraryB from "../../assets/img/libraryB.jpg";
import libraryC from "../../assets/img/libraryC.jpg";

const CustomCard = ({
  thumbnail,
  title = "The Summer Days",
  author = "Bibek Hamal",
  publishedYear = "2021",
  slug = "Book Title ",
  
}) => {
    console.log("BASE URL:", import.meta.env.VITE_BASE_API_URL);
  console.log("THUMBNAIL RECEIVED:", thumbnail);
  console.log("SLUG RECEIVED:", slug);



  const baseURL = import.meta.env.VITE_BASE_API_URL;
  

  return (
    <Card style={{ width: "18rem" }}>
        <div className="m-2"> 
      <Card.Img variant="top" 
      // src={import.meta.env.VITE_BASE_API_URL + thumbnail}
         src={`${baseURL}/${thumbnail?.replace(/^\//, "")}`} className="rounded"/>
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {author} - {publishedYear}
        </Card.Text>
        <Link to={"/book/" +slug}>
          <Button variant="primary">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
