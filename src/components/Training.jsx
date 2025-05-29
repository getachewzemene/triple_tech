import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

// Styled Components for card layout
const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 40px;
`;

const Card = styled(motion.div)`
  width: 300px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const DetailsContainer = styled(motion.div)`
  margin-top: 20px;
  padding: 20px;
  background: #f8f8f8;
  border-radius: 8px;
`;

// Sample Course Data
const courses = [
  { id: 1, title: "Video Editing", description: "Master video editing techniques." },
  { id: 2, title: "Digital Marketing", description: "Learn SEO and social media marketing." },
  { id: 3, title: "Web Development", description: "Build modern websites with React." },
];

const Training = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Training Modules</h1>
      <GridContainer>
        {courses.map((course) => (
          <Card
            key={course.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCourse(course)}
          >
            <h2>{course.title}</h2>
            <p>{course.description}</p>
          </Card>
        ))}
      </GridContainer>

      <AnimatePresence>
        {selectedCourse && (
          <DetailsContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2>{selectedCourse.title}</h2>
            <p>Detailed content about {selectedCourse.title} will be shown here.</p>
            <button onClick={() => setSelectedCourse(null)}>Close</button>
          </DetailsContainer>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Training;
