import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaWarehouse, FaDumbbell, FaHotel, FaHospital, FaIndustry } from "react-icons/fa"; // Import icons

const ProjectsWrapper = styled.section`
  text-align: center;
  padding: 50px;
  background: #f9f9f9;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Add spacing between cards */
`;

const Heading = styled(motion.h2)`
  font-size: 32px;
  color: #003366;
  margin-bottom: -10px;
  text-align: center; /* Center the heading text */
`;

const ProjectCard = styled(motion.div)`
  background: #003366;
  color: white;
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 250px;
  height: 250px; /* Set a fixed height for all cards */
  cursor: pointer;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.1); /* Smooth grow effect */
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
    background: #003399;
    color: white;
  }

  .icon {
    font-size: 40px; /* Set icon size */
    margin-bottom: 10px; /* Add spacing below the icon */
    color: #ffd700; /* Icon color */
  }

  h3 {
    margin: 0 0 10px;
    font-size: 18px;
  }

  p {
   font-size: 16px;
    line-height: 1.8;
    text-align: justify; /* Justify text for better readability */
    text-align-last: start; /* Align text to the left */
    hyphens: auto; /* Enable hyphenation for better word wrapping */
    word-spacing: 0.5px; /* Adjust word spacing for better readability */
    flex-grow: 1; /* Ensures the description takes up available space */
  }
`;

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50, damping: 20 } }
};

const Projects = () => (
  <>
  <Heading
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      Our Recent Projects
    </Heading>
  <ProjectsWrapper id="projects">
    <ProjectCard
      variants={slideInRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <FaWarehouse className="icon" />
      <h3>Stock Management</h3>
      <p>
        A comprehensive stock management system designed to streamline inventory tracking, reduce waste, and improve operational efficiency.
      </p>
    </ProjectCard>
    <ProjectCard
      variants={slideInRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <FaDumbbell className="icon" />
      <h3>Gym Website</h3>
      <p>
        A modern and responsive website for gyms, featuring membership management, class schedules, and online booking capabilities.
      </p>
    </ProjectCard>
    <ProjectCard
      variants={slideInRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <FaHotel className="icon" />
      <h3>Hotel Management</h3>
      <p>
        A robust hotel management system with features like room booking, customer management, and billing integration.
      </p>
    </ProjectCard>
    <ProjectCard
      variants={slideInRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <FaHospital className="icon" />
      <h3>Hospital Management</h3>
      <p>
        A hospital management solution to handle patient records, appointments, billing, and staff management efficiently.
      </p>
    </ProjectCard>
    <ProjectCard
      variants={slideInRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <FaIndustry className="icon" />
      <h3>Other Sectors</h3>
      <p>
        Custom software solutions tailored for various industries, including manufacturing, retail, and logistics.
      </p>
    </ProjectCard>
  </ProjectsWrapper>
  </>
);

export default Projects;