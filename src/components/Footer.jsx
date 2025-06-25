import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

// Styled Components
const FooterWrapper = styled.footer`
  background: #003366;
  color: white;
  padding: 40px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

const Column = styled.div`
  flex: 1;
  min-width: 220px;
`;

const LogoText = styled.h4`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const ContactItem = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 15px;

  svg {
    margin-right: 8px;
    color: #f4af1b;
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;

  a {
    background: white;
    color: #003366;
    padding: 8px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background: #f4af1b;
      color: #003366;
    }

    svg {
      font-size: 16px;
    }
  }
`;

const Copyright = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 30px;
  font-size: 14px;
  opacity: 0.7;
`;

const Footer = () => (
  <motion.div
    id="footer"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <FooterWrapper>
      <Column>
        <LogoText>Triple Technologies</LogoText>
        <ContactItem>
          <FaMapMarkerAlt /> Megenagna, Addis Ababa
        </ContactItem>
        <ContactItem>
          <FaPhoneAlt /> +251 912 345 678
        </ContactItem>
        <ContactItem>
          <FaEnvelope /> info@tripletech.com
        </ContactItem>
      </Column>

      <Column>
        <LogoText>Connect With Us</LogoText>
        <SocialRow>
          <a href="mailto:info@tripletech.com" aria-label="Gmail">
            <FaEnvelope />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
        </SocialRow>
      </Column>

      <Copyright>
        © 2025 Triple Technologies. All rights reserved.
      </Copyright>
    </FooterWrapper>
  </motion.div>
);

export default Footer;
