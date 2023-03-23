import React from "react";
import Banner from "./Banner";
import Faculty from "./Faculty";
import PeopleReview from "./PeopleReview";
import Counter from "./Counter";
import OutPost from "./OutPost";
import Footer from "../navbar/Footer";

const Home = () => {
  return (
    <>
      <Banner />
      <Faculty />
      <PeopleReview />
      <Counter />
      <OutPost />
      <Footer />
    </>
  );
};

export default Home;
