import React, { useState } from "react";
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
  padding: 20px 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
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
    width: 15px;
    height: 15px;
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

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #ffffff10;
  padding: 20px;
  border-radius: 12px;
  width: 100%;
  max-width: 300px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: none;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 6px;
  border: none;
`;

const SubmitButton = styled(motion.button)`
  padding: 10px;
  border: none;
  background: #f4af1b;
  color: #003366;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background: #ffd700;
    color: black;
  }
`;

const Copyright = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 30px;
  font-size: 15px;
  color: #ffffffaa;
`;

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with API call
    setFormData({ name: "", email: "", message: "" });
  };

  return (
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

        <Column>
          <LogoText>Contact Us</LogoText>
          <ContactForm onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <TextArea
              placeholder="Your Message"
              rows="3"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <SubmitButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit">
              Send
            </SubmitButton>
          </ContactForm>
        </Column>

        <Copyright>
          © 2025 Triple Technologies. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </motion.div>
  );
};

export default Footer;
