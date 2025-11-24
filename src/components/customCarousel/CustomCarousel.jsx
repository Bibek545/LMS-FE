import React from "react";
import Carousel from "react-bootstrap/Carousel";
import libraryA from "../../assets/img/libraryA.jpg";
import libraryB from "../../assets/img/libraryB.jpg";
import libraryC from "../../assets/img/libraryC.jpg";

const CustomCarousel = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="w-75">
        {" "}
        {/* controls the width & centers */}
        <Carousel className="mt-4">
          <Carousel.Item>
            <img src={libraryA} alt="First slide" className="d-block w-100 " />
            <Carousel.Caption className="carousel-caption-bg rounded p-2">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={libraryB} alt="First slide" />
            <Carousel.Caption className="carousel-caption-bg rounded p-2">
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={libraryC} alt="First slide" />
            <Carousel.Caption className="carousel-caption-bg rounded p-2">
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default CustomCarousel;
