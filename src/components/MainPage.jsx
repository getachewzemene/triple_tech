// /src/components/MainPage.js
import React from "react";
import Carousel from "./Carousel";
import Home from "./Home";
import Services from "./Services";
import Projects from "./Projects";
import Team from "./Team";
import About from "./About";
import Testimonials from "./Testimonials";
import Partners from "./Partners";
import TrustedBy from "./TrustedBy";
import WhyChooseUs from "./WhyChooseUs";
import Contact from "./Contact";

const MainPage = () => {
  return (
    <>
      <Carousel />
      <Home />
      <Services />
      <Projects />
      <Team />
      <About />
      <Testimonials />
      <Partners />
      <TrustedBy />
      <WhyChooseUs />
      <Contact />
    </>
  );
};

export default MainPage;
