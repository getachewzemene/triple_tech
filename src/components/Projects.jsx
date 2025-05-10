import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const ProjectsWrapper = styled.section`
  text-align: center;
  padding: 50px;
  background: #f9f9f9;
`;

const ProjectCard = styled(motion.div)`
  padding: 20px;
  margin: 10px;
  background: #003366;
  color: white;
  border-radius: 8px;
  display: inline-block;
  width: 250px;
  cursor: pointer;
  &:hover {
    background: #ffd700;
    color: black;
  }
`;

const Projects = () => (
  <ProjectsWrapper>
    <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      Our Recent Projects
    </motion.h2>
    <ProjectCard whileHover={{ scale: 1.05 }}>AI Automation</ProjectCard>
    <ProjectCard whileHover={{ scale: 1.05 }}>E-Commerce Platform</ProjectCard>
    <ProjectCard whileHover={{ scale: 1.05 }}>Cloud Solutions</ProjectCard>
  </ProjectsWrapper>
);

export default Projects;
