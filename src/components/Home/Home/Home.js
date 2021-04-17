import React from "react";
import HeaderCarousel from "../HeaderCarousel/HeaderCarousel";
import LatestNews from "../LatestNews/LatestNews";
import NavBar from "../NavBar/NavBar";
import ReviewOfTheDay from "../ReviewOfTheDay/ReviewOfTheDay";
import Reviews from "../Reviews/Reviews";
import TeaVariants from "../TeaVariants/TeaVariants";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <HeaderCarousel></HeaderCarousel>
      <TeaVariants></TeaVariants>
      <ReviewOfTheDay></ReviewOfTheDay>
      <Reviews></Reviews>
      <LatestNews></LatestNews>
    </div>
  );
};

export default Home;
