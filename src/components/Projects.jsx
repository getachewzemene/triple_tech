import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaWarehouse, FaDumbbell, FaHospital, FaIndustry } from "react-icons/fa";

const ProjectsWrapper = styled.section`
  text-align: center;
  padding: 30px 10px;
  background: #F4F6F8;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;

  @media (min-width: 600px) {
    padding: 40px 20px;
    gap: 20px;
  }
  @media (min-width: 900px, max-width: 1200px) {
    padding: 50px;
    gap: 24px;
  }
`;

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Heading = styled(motion.h2)`
  font-size: 24px;
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
    font-size: 28px;
    margin-bottom: 28px;
    &::after {
      height: 4px;
      bottom: -10px;
    }
  }
  @media (min-width: 900px) {
    font-size: 32px;
    margin-bottom: 30px;
  }
`;

const ProjectCard = styled(motion.div)`
  color: white;
  padding: 10px;
  margin: 0;
  border: 1px solid #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 320px;
  min-width: 0;
  height: 260px;
  cursor: pointer;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
  background: #fff;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.18);
    background: rgb(23, 84, 204);
    color: white;
    transition: background 0.3s ease, color 0.3s ease;
  }

  .icon {
    font-size: 32px;
    margin-bottom: 8px;
    color: #0070f3;
    transition: color 0.3s ease;
  }

  h3 {
    margin: 0 0 8px;
    font-size: 16px;
    color: #003366;
    transition: color 0.3s ease;
  }
  .divider {
    width: 60px;
    height: 2px;
    background: #f4af1b;
    border-radius: 2px;
    margin: 6px 0;
  }
  p {
    font-size: 14px;
    line-height: 1.6;
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

  @media (min-width: 600px) {
    width: 220px;
    height: 270px;
    .icon {
      font-size: 36px;
      margin-bottom: 10px;
    }
    h3 {
      font-size: 17px;
    }
    .divider {
      width: 70px;
      height: 2.5px;
      margin: 7px 0;
    }
    p {
      font-size: 15px;
    }
  }
  @media (min-width: 900px) {
    width: 250px;
    height: 280px;
    .icon {
      font-size: 40px;
      margin-bottom: 12px;
    }
    h3 {
      font-size: 18px;
    }
    .divider {
      width: 80px;
      height: 3px;
      margin: 8px 0;
    }
    p {
      font-size: 16px;
    }
  }
`;

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50, damping: 20 } }
};

const Projects = () => (
  <>
    <HeadingWrapper id="projects">
      <Heading
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Our Recent Projects
      </Heading>
    </HeadingWrapper>
    <ProjectsWrapper>
      <ProjectCard
        variants={slideInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="Card-wrapper"
      >
        <FaWarehouse className="icon" />
        <h3>Stock Management</h3>
        <div className="divider" />
        <p>
          A comprehensive stock management system designed to streamline inventory tracking, reduce waste, and improve operational efficiency.
        </p>
      </ProjectCard>
      <ProjectCard
        variants={slideInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="Card-wrapper"
      >
        <FaDumbbell className="icon" />
        <h3>Gym Website</h3>
        <div className="divider" />
        <p>
          A modern and responsive website for gyms, featuring membership management, class schedules, and online booking capabilities.
        </p>
      </ProjectCard>
      <ProjectCard
        variants={slideInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="Card-wrapper"
      >
        <FaHospital className="icon" />
        <h3>Hospital Management</h3>
        <div className="divider" />
        <p>
          A hospital management solution to handle patient records, appointments, billing, and staff management efficiently.
        </p>
      </ProjectCard>
      <ProjectCard
        variants={slideInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="Card-wrapper"
      >
        <FaIndustry className="icon" />
        <h3>Other Sectors</h3>
        <div className="divider" />
        <p>
          Custom software solutions tailored for various industries, including manufacturing, retail, and logistics.
        </p>
      </ProjectCard>
    </ProjectsWrapper>
  </>
);

export default Projects;