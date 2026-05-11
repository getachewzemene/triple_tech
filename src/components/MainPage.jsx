// /src/components/MainPage.js
import React from "react";
import { motion } from "framer-motion";
import Carousel from "./Carousel";
import Services from "./Services";
import Projects from "./Projects";
import Team from "./Team";
import WhyChooseUs from "./WhyChooseUs";
import Header from "./Header";

const MainPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Header />
      <Carousel />
      <Services />
      <Projects />
      <WhyChooseUs />
      <Team />
    </motion.div>
  );
};

export default MainPage;
