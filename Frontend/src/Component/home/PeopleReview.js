import React from "react";
import "./Faculity.css";
import a1 from "../../images/a1.jpg";
import a2 from "../../images/a2.jpg";
import a3 from "../../images/a3.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const PeopleReview = () => {
  return (
    <>
      <div className="review">
        <div className="container">
          <h1 className="heading">
            <span>'</span> people's review <span>'</span>
          </h1>

          <div className="box-container">
            <div className="box" data-aos="fade-right">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur accusantium error numquam dolore atque. Atque totam
                ad sint ducimus! Maxime!
              </p>
              <h3>someone's name</h3>
              <span>jan 5, 2021</span>
              <img src={a1} alt="" />
            </div>

            <div className="box" data-aos="fade-up">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur accusantium error numquam dolore atque. Atque totam
                ad sint ducimus! Maxime!
              </p>
              <h3>someone's name</h3>
              <span>jan 7, 2021</span>
              <img src={a2} alt="" />
            </div>

            <div className="box" data-aos="fade-left">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur accusantium error numquam dolore atque. Atque totam
                ad sint ducimus! Maxime!
              </p>
              <h3>someone's name</h3>
              <span>jan 10, 2021</span>
              <img src={a3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PeopleReview;
