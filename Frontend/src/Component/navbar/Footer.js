import React from "react";
import "../home/Faculity.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4" data-aos="fade-right">
              <a href="####" className="logo">
                <span>H</span>ospital<span>M</span>anagement<span>S</span>
                ystem.
              </a>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur nemo porro quasi minima consequuntur dolorum, quas amet
                in autem id?
              </p>
            </div>

            <div className="col-md-4 text-center" data-aos="fade-up">
              <h3>links</h3>
              <a href="####">home</a>
              <a href="####">about</a>
              <a href="####">facility</a>
              <a href="####">review</a>
              <a href="####">contact</a>
              <a href="####">post</a>
            </div>

            <div className="col-md-4 text-center" data-aos="fade-left">
              <h3>share</h3>
              <a href="####">facebook</a>
              <a href="####">twitter</a>
              <a href="####">instagram</a>
              <a href="####">github</a>
            </div>
          </div>
        </div>

        <h1 className="credit text-center mx-auto">
          created by <span>Muhammad Anas Khan MERN Developer</span> | all rights
          reserved.
        </h1>
      </div>
    </>
  );
};

export default Footer;
