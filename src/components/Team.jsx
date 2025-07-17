import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaUserTie } from "react-icons/fa";

const TeamWrapper = styled.section`
  padding: 20px 10px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;

  @media (min-width: 600px) {
    padding: 30px;
    gap: 20px;
  }
`;

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Heading = styled(motion.h2)`
  font-size: 2rem;
  color: #003366;
  margin-bottom: 24px;
  text-align: center;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 2%;
    width: 50%;
    height: 3px;
    background: rgb(255, 174, 0);
    border-radius: 2px;
  }

  @media (min-width: 600px) {
    font-size: 2.2rem;
    margin-bottom: 30px;
    &::after {
      height: 4px;
      bottom: -10px;
    }
  }
`;

const TeamCard = styled(motion.div)`
  background: #fff;
  color: white;
  padding: 10px;
  margin: 0;
  border: 1px solid #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 320px;
  min-width: 0;
  height: 170px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.08);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
    background: #003399;
    color: white;
  }

  .icon {
    font-size: 32px;
    margin-bottom: 8px;
    color: #0070f3;
  }

  h3 {
    margin: 0 0 8px;
    font-size: 1.1rem;
    color: #003366;
    transition: color 0.3s ease;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    text-align: justify;
    text-align-last: start;
    hyphens: auto;
    word-spacing: 0.5px;
    flex-grow: 1;
    color: #333;
    transition: color 0.3s ease;
    margin-top: 8px;
  }
  .sub-title {
    font-size: 0.9rem;
    color: #666;
    margin-top: -4px;
    font-style: italic;
  }
  &:hover h3,
  &:hover p {
    color: #fff;
  }
  &:hover .icon {
    color: #ffd700;
  }

  @media (min-width: 600px) {
    width: 250px;
    height: 180px;
    .icon {
      font-size: 40px;
      margin-bottom: 10px;
    }
    h3 {
      font-size: 20px;
      margin-bottom: 10px;
    }
    p {
      font-size: 18px;
      margin-top: 10px;
    }
    .sub-title {
      font-size: 14px;
      margin-top: -5px;
    }
  }
`;

const Team = () => (
  <>
    <HeadingWrapper id="team">
      <Heading
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Meet Our Team
      </Heading>
    </HeadingWrapper>
    <TeamWrapper>
      <TeamCard whileHover={{ scale: 1.05 }}>
        <FaUserTie className="icon" />
        <h3>Tsegaselassie Kindye</h3>
        <p>CEO & Co-Founder</p>
        <p className="sub-title">Software Engineer</p>
      </TeamCard>
      <TeamCard whileHover={{ scale: 1.05 }}>
        <FaUserTie className="icon" />
        <h3>Getachew Zemene</h3>
        <p>CTO & Co-Founder</p>
        <p className="sub-title">Software Engineer|Full-Stack Developer</p>
      </TeamCard>
      <TeamCard whileHover={{ scale: 1.05 }}>
        <FaUserTie className="icon" />
        <h3>Dagim Wondale</h3>
        <p>CMO & Co-Founder</p>
        <p className="sub-title">Software Engineer|Graphics Designer</p>
      </TeamCard>
    </TeamWrapper>
  </>
);

export default Team;