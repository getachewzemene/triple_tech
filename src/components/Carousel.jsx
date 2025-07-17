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
    top: 50%;
    left: 50%;
    width: 100vw;
    height: 100vw;
    max-width: 100%;
    max-height: 100%;
    min-height: 300px;
    aspect-ratio: 16/9;
    transform: translate(-50%, -50%);
    z-index: 1;
    pointer-events: none;
    border: none;
  }

  .overlay {
    position: absolute;
    top: 20px;
    left: -250px;
    z-index: 2;
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: none; /* Hide by default */
  }

  .content-box {
    padding: 1.2rem;
    border-radius: 12px;
    text-align: center;
    max-width: 95vw;
    background: rgba(0, 51, 102, 0.3);
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
    margin: 0 auto;
  }

  @media (min-width: 600px, max-width: 900px) {
    height: clamp(350px, 60vw, 550px);
    .overlay {
      left: 0;
      padding: 1rem;
      display: block; /* Show overlay on medium+ screens */
    }
    .content-box {
      padding: 2rem;
      max-width: 500px;
      border-radius: 16px;
    }
  }

  @media (min-width: 900px) {
    .overlay {
      display: block; /* Show overlay on large screens */
    }
    .content-box {
      padding: 2.5rem;
      max-width: 700px;
    }
  }
`;

const StyledButton = styled(motion.button)`
  margin-top: 1.5rem;
  padding: 0.75rem 1rem;
  background: #003366;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: clamp(1rem, 4vw, 1.1rem);
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 12px rgba(0, 119, 182, 0.08);
  min-width: 120px;
  transition: background 0.2s, color 0.2s;

  &:hover {
    color: #ffd700;
    text-decoration: underline;
  }

  @media (min-width: 600px) {
    min-width: 150px;
    font-size: clamp(1rem, 3vw, 1.1rem);
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

        {/* Overlaid Content (hidden on small screens) */}
        <div className="overlay">
          <div className="content-box">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                fontSize: "clamp(1.1rem, 6vw, 2rem)",
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "#ffd700",
              }}
            >
              Accelerating business growth with smart technologies and impactful innovation.
            </motion.h2>
            <p
              style={{
                fontSize: "clamp(0.95rem, 4vw, 18px)",
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
