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
  FaTelegramPlane,
  FaInstagram,
} from "react-icons/fa";

// Styled Components (Mobile First)
const FooterWrapper = styled.footer`
  background: #003366;
  color: white;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: stretch;

  @media (min-width: 600px) {
    padding: 24px 24px;
    gap: 28px;
  }

  @media (min-width: 900px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    padding: 32px 40px;
    gap: 32px;
  }
`;

const Column = styled.div`
  width: 100%;
  margin-bottom: 16px;

  @media (min-width: 600px) {
    margin-bottom: 0;
  }

  @media (min-width: 900px) {
    flex: 1;
    min-width: 220px;
    width: auto;
  }
`;

const LogoText = styled.h4`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;

  @media (min-width: 600px) {
    font-size: 25px;
  }
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
  gap: 10px;
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

  @media (min-width: 600px) {
    gap: 12px;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #ffffff10;
  padding: 16px;
  border-radius: 12px;
  max-width: 100%;

  @media (min-width: 600px) {
    padding: 10px;
    max-width: 300px;
  }
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: none;
  font-size: 15px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 6px;
  border: none;
  font-size: 15px;
`;

const SubmitButton = styled(motion.button)`
  padding: 10px;
  border: none;
  background: #f4af1b;
  color: #003366;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  font-size: 15px;
  &:hover {
    background: #ffd700;
    color: black;
  }
`;

const Copyright = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  color: #ffffffaa;
`;

const MapContainer = styled.div`
  width: 100%;
  margin-top: -120px;
  margin-left: -200px;
  display: flex;
  justify-content: center;

  iframe {
    height: 250px;
    border: none;
    width: 100%;
    max-width: 800px;
  }

  @media (min-width: 600px, max-width: 900px) {
    iframe {
      height: 250px;
      max-width: 500px;
    }
  }

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
            <FaPhoneAlt /> +251 997 466 952
          </ContactItem>
          <ContactItem>
            <FaEnvelope /> tripletechnologies3@gmail.com
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
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <FaTelegramPlane />
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

        <MapContainer
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d213.25016210377703!2d38.794672956140744!3d9.02006823267653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85005f5bf7d9%3A0xdb4918396ab3f0d5!2sTriple%20Technologies!5e1!3m2!1sen!2set!4v1752069101685!5m2!1sen!2set" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
          }}
        />
        <Copyright>
          © 2025 Triple Technologies. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </motion.div>
  );
};

export default Footer;
