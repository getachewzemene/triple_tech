// /src/components/MainPage.js
import React from "react";
import Carousel from "./Carousel";
import Services from "./Services";
import Projects from "./Projects";
import Team from "./Team";
import WhyChooseUs from "./WhyChooseUs";
import Contact from "./Contact";
import Header from "./Header";
const MainPage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Services />
      <Projects />
      <WhyChooseUs />
      <Team />
      <Contact />
    </>
  );
};

export default MainPage;
