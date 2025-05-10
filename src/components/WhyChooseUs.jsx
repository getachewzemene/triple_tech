import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const WhyChooseSection = styled.section`
  padding: 50px;
  background: #fff;
  text-align: center;
`;

const ImpactCard = styled(motion.div)`
  background: #003366;
  color: white;
  margin: 10px;
  padding: 20px;
  border-radius: 8px;
  display: inline-block;
  width: 200px;
`;

const WhyChooseUs = () => (
  <WhyChooseSection id="our-impact">
    <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      Why Choose Us
    </motion.h2>
    <ImpactCard whileHover={{ scale: 1.05 }}>
      <h3>Innovation</h3>
      <p>Cutting-edge solutions.</p>
    </ImpactCard>
    <ImpactCard whileHover={{ scale: 1.05 }}>
      <h3>Expertise</h3>
      <p>Decades of experience.</p>
    </ImpactCard>
    <ImpactCard whileHover={{ scale: 1.05 }}>
      <h3>Support</h3>
      <p>24/7 attentive support.</p>
    </ImpactCard>
  </WhyChooseSection>
);

export default WhyChooseUs;
