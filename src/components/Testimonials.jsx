import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const TestimonialsSection = styled.section`
  padding: 50px;
  background: #f5f5f5;
  text-align: center;
`;

const TestimonialCard = styled(motion.div)`
  background: #003366;
  color: white;
  padding: 20px;
  margin: 10px auto;
  max-width: 600px;
  border-radius: 8px;
`;

const Testimonials = () => (
  <TestimonialsSection id="testimonials">
    <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      Testimonials
    </motion.h2>
    <TestimonialCard whileHover={{ scale: 1.05 }}>
      <p>"Triple Technologies exceeded our expectations. Their innovation and professionalism is top-notch!"</p>
      <p>- Client A</p>
    </TestimonialCard>
    <TestimonialCard whileHover={{ scale: 1.05 }}>
      <p>"The team delivered outstanding services that boosted our business growth significantly!"</p>
      <p>- Client B</p>
    </TestimonialCard>
  </TestimonialsSection>
);

export default Testimonials;
