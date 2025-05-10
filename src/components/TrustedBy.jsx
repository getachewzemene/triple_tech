import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const TrustedBySection = styled.section`
  padding: 50px;
  background: #f9f9f9;
  text-align: center;
`;

const TrustedLogo = styled(motion.img)`
  width: 120px;
  margin: 10px;
  opacity: 0.7;
  transition: opacity 0.3s;
  &:hover {
    opacity: 1;
  }
`;

const TrustedBy = () => (
  <TrustedBySection id="trusted-by">
    <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      Trusted By
    </motion.h2>
    <div>
      <TrustedLogo src="/images/trusted1.png" alt="Trusted 1" />
      <TrustedLogo src="/images/trusted2.png" alt="Trusted 2" />
      <TrustedLogo src="/images/trusted3.png" alt="Trusted 3" />
    </div>
  </TrustedBySection>
);

export default TrustedBy;
