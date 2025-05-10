import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const PartnersSection = styled.section`
  padding: 50px;
  background: white;
  text-align: center;
`;

const PartnerLogo = styled(motion.img)`
  width: 150px;
  margin: 10px;
  filter: grayscale(100%);
  transition: filter 0.3s;
  &:hover {
    filter: grayscale(0);
  }
`;

const Partners = () => (
  <PartnersSection>
    <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      Our Partners
    </motion.h2>
    <div>
      <PartnerLogo src="/images/partner1.png" alt="Partner 1" />
      <PartnerLogo src="/images/partner2.png" alt="Partner 2" />
      <PartnerLogo src="/images/partner3.png" alt="Partner 3" />
    </div>
  </PartnersSection>
);

export default Partners;
