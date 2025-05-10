import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const ContactSection = styled.section`
  padding: 50px;
  background: white;
  text-align: center;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const SubmitButton = styled(motion.button)`
  padding: 10px;
  border: none;
  background: #003366;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #ffd700;
    color: black;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the data to an API
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <ContactSection>
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        Contact Us
      </motion.h2>
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
          rows="4"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        <SubmitButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit">
          Send Message
        </SubmitButton>
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;
