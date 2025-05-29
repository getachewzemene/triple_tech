import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Simple Title component using motion
const Title = ({ children, ...props }) => (
  <motion.h2
    style={{
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      textAlign: "center",
      color: "#222",
    }}
    {...props}
  >
    {children}
  </motion.h2>
);

const Carousel = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ position: "relative" }}
    >
      {/* Overlay text content */}
      <div
        id="home"
        style={{
          position: "absolute",
          top: "clamp(-150px, -10vw, 200px)",
          left: "clamp(-250px, -10vw, -10px)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
          pointerEvents: "none", // allows carousel interaction
          padding: "1rem",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.7)",
            borderRadius: "16px",
            padding: "2rem 1.5rem",
            maxWidth: 700,
            width: "100%",
            margin: "0 auto",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          }}
        >
          <Title
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: "clamp(1.2rem, 5vw, 2rem)",
              fontWeight: "bold",
              marginBottom: "1rem",
              textAlign: "center",
              color: "#222",
            }}
          >
            Accelerating business growth with smart technologies and impactful innovation.
          </Title>
          <p
            style={{
              fontSize: "clamp(1rem, 3vw, 18px)",
              color: "#2f2f2f",
              marginBottom: 0,
              textAlign: "center",
            }}
          >
            Triple Technologies delivers smart, practical tech solutions that empower businesses to grow faster and work smarter—through innovative software, IT training, digital marketing, and reliable network services.
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          style={{
            marginTop: "2rem",
            padding: "0.75rem 1.5rem",
            background: "#0077b6",
            color: "#fff",
            border: "none",
            borderRadius: "25px",
            fontSize: "clamp(1rem, 3vw, 1.1rem)",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 2px 12px rgba(0,119,182,0.08)",
            pointerEvents: "auto",
            transition: "background 0.2s",
            width: "clamp(140px, 40vw, 220px)",
            minWidth: 120,
          }}
          onClick={() => {
            const el = document.getElementById("contact");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Contact Us
        </motion.button>
      </div>
      {/* Carousel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        style={{
          width: "100%",
          height: "clamp(250px, 60vw, 700px)",
        }}
      >
        <SwiperSlide>
          <img
            src="/assets/images/c111.jpg"
            alt="Event 1"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/images/cdm.jpg"
            alt="Event 1"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/images/cdm2.jpg"
            alt="Event 2"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/images/c3.jpg"
            alt="Event 3"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
};

export default Carousel;