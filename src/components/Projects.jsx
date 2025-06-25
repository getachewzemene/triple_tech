import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaWarehouse, FaDumbbell, FaHospital, FaIndustry } from "react-icons/fa"; // Import icons

const ProjectsWrapper = styled.section`
  text-align: center;
  padding: 50px;
  background: #f9f9f9;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Add spacing between cards */
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

const ProjectCard = styled(motion.div)`
  background: #fff;
  color: white;
  padding: 10px;
  margin: 10px;
  border: 1px solid rgb(212, 194, 194); /* Add a border for better visibility */
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Align content to the top */
  align-items: center; /* Center content horizontally */
  width: 250px;
  height: 280px; /* Adjust height to fit icons */
  cursor: pointer;
  text-align: center; /* Center text inside the card */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.1); /* Smooth grow effect */
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
    background:rgb(23, 84, 204); /* Change background color on hover */
    color: white;
    transition: background 0.3s ease, color 0.3s ease; /* Smooth transition for background and text color */
  }

  .icon {
    font-size: 40px; /* Set icon size */
    margin-bottom: 10px; /* Add spacing below the icon */
    color: #0070f3; /* Icon color */
  }

  h3 {
    margin: 0 0 10px;
    font-size: 18px;
    color: #003366; /* Heading color */
    transition: color 0.3s ease;
  }

  p {
    font-size: 16px;
    line-height: 1.8;
    text-align: justify; /* Justify text for better readability */
    text-align-last: start; /* Align text to the left */
    hyphens: auto; /* Enable hyphenation for better word wrapping */
    word-spacing: 0.5px; /* Adjust word spacing for better readability */
    flex-grow: 1; /* Ensures the description takes up available space */
    color: #333; /* Text color */
    transition: color 0.3s ease;
  }

  &:hover h3,
  &:hover p {
    color: #fff; /* Change header and body text color to white on hover */
  }
  &:hover .icon {
    color: #ffd700; /* Change icon color to white on hover */
  }
`;

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50, damping: 20 } }
};

const Projects = () => (
  <>
  <HeadingWrapper>
  <Heading
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      Our Recent Projects
    </Heading>
  </HeadingWrapper>
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