// /src/components/Projects.js
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
  overflow: hidden;
`;

const fadeInImage = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
};

const Projects = () => (
  <ProjectsWrapper id="projects">
    <motion.h2
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      Our Recent Projects
    </motion.h2>
    <ProjectCard whileHover={{ scale: 1.05 }}>
      {/* Example card text */}
      AI Automation
      {/* Image fades in from the background */}
      <motion.img
        src="/images/project1.jpg"
        alt="AI Automation"
        variants={fadeInImage}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ width: "100%", marginTop: "10px", borderRadius: "4px" }}
      />
    </ProjectCard>
    <ProjectCard whileHover={{ scale: 1.05 }}>
      E-Commerce Platform
      <motion.img
        src="/images/project2.jpg"
        alt="E-Commerce Platform"
        variants={fadeInImage}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ width: "100%", marginTop: "10px", borderRadius: "4px" }}
      />
    </ProjectCard>
  </ProjectsWrapper>
);

export default Projects;
