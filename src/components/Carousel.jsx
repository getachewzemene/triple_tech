import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Updated import
import "swiper/css";
import "swiper/css/pagination";

const Carousel = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Swiper
        modules={[Autoplay, Pagination]} // Pass modules here
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        style={{ width: "100%", height: "700px" }}
      >
        <SwiperSlide>
          <img
            src="/assets/images/c111.jpg"
            alt="Event 1"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/images/cdm.jpg"
            alt="Event 1"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/images/cdm2.jpg"
            alt="Event 2"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/images/c3.jpg"
            alt="Event 3"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
};

export default Carousel;