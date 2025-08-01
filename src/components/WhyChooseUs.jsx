import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaLightbulb, FaUserTie, FaHeadset } from "react-icons/fa";

const SectionWrapper = styled.section`
  padding: 30px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Heading = styled(motion.h2)`
  font-size: 32px;
  color: #003366;
  margin-bottom: 30px;
  text-align: center;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 2%;
    width: 50%;
    height: 4px;
    background: rgb(255, 174, 0); /* Light gold tone */
    border-radius: 2px;
  }
`;

const Card = styled(motion.div)`
  background: #fff;
  color: white;
  padding: 10px;
  margin: 10px;
  border: 1px solid #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 300px;
  height: 250px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
    background: #003399;
    color: white;
  }
.divider {
    width: 80px;
    height: 3px;
    background: #f4af1b;
    border-radius: 2px;
    margin: 8px 0;
  }
  .icon {
    font-size: 40px;
    margin-bottom: 10px;
    color: #0070f3;
  }

  h3 {
    margin: 0 0 10px;
    font-size: 18px;
    color: #003366;
    transition: color 0.3s ease;
  }

  p {
    font-size: 16px;
    line-height: 1.8;
    text-align: justify;
    text-align-last: start;
    hyphens: auto;
    word-spacing: 0.5px;
    flex-grow: 1;
    color: #333;
    transition: color 0.3s ease;
  }
  &:hover h3,
  &:hover p {
    color: #fff;
  }
  &:hover .icon {
    color: #ffd700;
  }
`;

const WhyChooseUs = () => (
  <>
  <HeadingWrapper>
    <Heading
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
       id="why-choose-us"
    >
      Why Choose Us
    </Heading>
  </HeadingWrapper>
  <SectionWrapper>
    <Card whileHover={{ scale: 1.05 }}>
        <FaLightbulb className="icon" />
        <h3>Innovation</h3>
        <div className="divider" />
        <p>
          We deliver cutting-edge solutions tailored to your business needs, leveraging the latest technologies to keep you ahead of the competition.
        </p>
      </Card>
      <Card whileHover={{ scale: 1.05 }}>
        <FaUserTie className="icon" />
        <h3>Expertise</h3>
        <div className="divider" />
        <p>
          Our team brings decades of industry experience, ensuring reliable, high-quality results and expert guidance at every project stage.
        </p>
      </Card>
      <Card whileHover={{ scale: 1.05 }}>
        <FaHeadset className="icon" />
        <h3>Support</h3>
        <div className="divider" />
        <p>
          Enjoy 24/7 attentive support from our dedicated team, always ready to assist you and resolve any issues quickly and efficiently.
        </p>
      </Card>
    </SectionWrapper>
  </>
);

export default WhyChooseUs;
