import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import one from "../../images/one.jpg";
import sec from "../../images/sec.png";
import third from "../../images/third.jpg";
import four from "../../images/four.jpg";
import five from "../../images/five.jpg";
const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            // height={730}
            className="d-block w-100"
            src={sec}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            // height={730}
            className="d-block w-100 "
            src={one}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            // height={730}
            className="d-block w-100 "
            src={third}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            // height={730}
            className="d-block w-100 "
            src={four}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            // height={730}
            className="d-block w-100 "
            src={five}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
