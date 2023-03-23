import React from "react";
import "./Faculity.css";
import post1 from "../../images/post1.jpg";
import post2 from "../../images/post2.jpg";
import post3 from "../../images/post3.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const OutPost = () => {
  return (
    <>
      <div className="post">
        <div className="container min-vh-100">
          <h1 className="heading">
            <span>'</span> out posts <span>'</span>
          </h1>

          <div className="box-container">
            <div className="box" data-aos="fade-right">
              <img src={post1} alt="" />
              <div className="content">
                <span>jan 5, 2021</span>
                <a href="##">
                  <h3>post title goes here</h3>
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  ex porro libero at veniam molestias facere quo necessitatibus
                  ipsum ad?
                </p>
                <a href="#@">
                  <button className="button">learn more</button>
                </a>
              </div>
            </div>

            <div className="box" data-aos="fade-up">
              <img src={post2} alt="" />
              <div className="content">
                <span>jan 5, 2021</span>
                <a href="##">
                  <h3>post title goes here</h3>
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  ex porro libero at veniam molestias facere quo necessitatibus
                  ipsum ad?
                </p>
                <a href="#@">
                  <button className="button">learn more</button>
                </a>
              </div>
            </div>

            <div className="box" data-aos="fade-left">
              <img src={post3} alt="" />
              <div className="content">
                <span>jan 5, 2021</span>
                <a href="##">
                  <h3>post title goes here</h3>
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  ex porro libero at veniam molestias facere quo necessitatibus
                  ipsum ad?
                </p>
                <a href="#@">
                  <button className="button">learn more</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OutPost;
