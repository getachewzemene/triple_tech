import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

// Styled wrapper for full-width video background
const VideoSection = styled.section`
  position: relative;
  width: 100%;
  height: clamp(300px, 75vw, 550px);
  overflow: hidden;

  iframe {
    position: absolute;
    top: 30%;
    left: 50%;
    width: 100%; /* 100 * (16 / 9) for full aspect fill */
    height: 100vh;
    transform: translate(-50%, -50%);
    z-index: 1;
    pointer-events: none;
    border: none;
  }

  .overlay {
    position: relative;
    margin-top: -170px;
    margin-left: -500px;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }

  .content-box {
    padding: 2rem;
    border-radius: 16px;
    text-align: center;
    max-width: 700px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  }
`;

const StyledButton = styled(motion.button)`
  margin-top: 2rem;
  padding: 0.75rem 1rem;
  background: #003366;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: clamp(1rem, 3vw, 1.1rem);
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 12px rgba(0, 119, 182, 0.08);
  min-width: 150px;
  transition: background 0.2s, color 0.2s;

  &:hover {
    color: #ffd700;
    text-decoration: underline;
  }
`;

const Carousel = () => {
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <VideoSection>
        {/* Background YouTube Video */}
        <iframe
          src="https://www.youtube.com/embed/rNSIwjmynYQ?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestbranding=1&playlist=rNSIwjmynYQ"
          title="Background Video"
          allow="autoplay; muted; loop"
          allowFullScreen
        />

        {/* Overlaid Content */}
        <div className="overlay">
          <div className="content-box">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                fontSize: "clamp(1.2rem, 5vw, 2rem)",
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "#ffd700",
              }}
            >
              Accelerating business growth with smart technologies and impactful innovation.
            </motion.h2>
            <p
              style={{
                fontSize: "clamp(1rem, 3vw, 18px)",
                color: "#ffffff",
                fontWeight: 500,
                lineHeight: 1.6,
                marginBottom: 0,
              }}
            >
              Triple Technologies fuels business growth with smart software, training, and digital marketing.
            </p>

            <StyledButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const el = document.getElementById("footer");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Us
            </StyledButton>
          </div>
        </div>
      </VideoSection>
    </motion.div>
  );
};

export default Carousel;
