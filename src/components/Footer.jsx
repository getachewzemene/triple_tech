import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding: 20px;
  background: #222;
  color: white;
  text-align: center;
`;

const Footer = () => (
  <motion.div id="footer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    <FooterWrapper>
      <p>© 2025 Triple Technologies | Contact: info@tripletech.com</p>
      <p>Follow us on: LinkedIn | Twitter | Facebook</p>
    </FooterWrapper>
  </motion.div>
);

export default Footer;
