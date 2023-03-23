import React from "react";
import "./Faculity.css";
import image1 from "../../images/1.jpg";
import image2 from "../../images/2.jpg";
import image3 from "../../images/3.jpg";
import image4 from "../../images/4.jpg";
import image5 from "../../images/5.jpg";
import image6 from "../../images/6.jpg";
import image7 from "../../images/7.jpg";
import image8 from "../../images/8.jpg";
import image9 from "../../images/9.jpg";
import image10 from "../../images/10.jpg";
import image11 from "../../images/11.jpg";
import image12 from "../../images/12.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const Faculty = () => {
  return (
    <>
      <div className="facility">
        <div className="container">
          <h1 className="heading">
            <span>'</span> our facilities <span>'</span>
            <div className="box-container">
              <div className="box">
                <a href="#@@@">
                  <img src={image1} alt="" />
                </a>
              </div>
              <div className="box">
                <a href="####">
                  <img src={image2} alt="" />
                </a>
              </div>
              <div className="box">
                <a href="#@#">
                  <img src={image3} alt="" />
                </a>
              </div>
              <div className="box">
                <a href="##@">
                  <img src={image4} alt="" />
                </a>
              </div>
              <div className="box">
                <a href="#!@">
                  <img src={image5} alt="" />
                </a>
              </div>
              <div className="box">
                <a href="##@">
                  <img src={image6} alt="" />
                </a>
              </div>
              <div className="box">
                <a href="##@">
                  <img src={image7} alt="" />
                </a>
              </div>
              <div className="box">
                <a href={image8}>
                  <img src={image8} alt="" />
                </a>
              </div>
              <div className="box">
                <a href={image8}>
                  <img src={image9} alt="" />
                </a>
              </div>
              <div className="box">
                <a href={image8}>
                  <img src={image10} alt="" />
                </a>
              </div>
              <div className="box">
                <a href={image8}>
                  <img src={image11} alt="" />
                </a>
              </div>
              <div className="box">
                <a href={image8}>
                  <img src={image12} alt="" />
                </a>
              </div>
            </div>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Faculty;
