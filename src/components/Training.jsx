import React, { useState } from "react";
import styled from "styled-components";
import { FaVideo, FaChartLine, FaCode, FaMobileAlt, FaPaintBrush, FaRobot } from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";

// Elegant Theme Colors
const colors = {
  background: "#F4F6F8",
  card: "#ffffff",
  accent: "#2C3E50",
  highlight: "#3498DB",
  text: "#333",
  lightText: "#777",
  oceanBlue: "#1CA9C9",
  lightYellow: "#FFEB88",
  lightGold: "#F9D97A",
};

// Styled Components
const PageWrapper = styled.div`
  padding: 60px 40px;
  background: ${colors.background};
  font-family: "Segoe UI", sans-serif;
`;

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

const Card = styled(motion.div)`
  width: 300px;
  padding: 25px;
  background: ${colors.card};
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;

  .card-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    color: ${colors.accent};
    transition: color 0.3s ease;
  }

  .card-icon {
    transition: color 0.3s ease;
    color: ${colors.oceanBlue};
  }

  p {
    color: ${colors.lightText};
    transition: color 0.3s ease;
  }

  &:hover {
    background: ${colors.oceanBlue};

    .card-header {
      color: white;
    }

    .card-icon {
      color: ${colors.lightYellow} !important;
    }

    p {
      color: #f0f0f0;
    }
  }
`;


const LayoutContainer = styled.div`
  display: flex;
  height: 75vh;
  margin-top: 40px;
  gap: 24px;
`;

const LeftPanel = styled.div`
  width: 35%;
  background: ${colors.card};
  padding: 24px;
  overflow-y: auto;
  border-radius: 16px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
`;

const RightPanel = styled.div`
  flex: 1;
  background: ${colors.card};
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Topic = styled.div`
  margin: 12px 0;
  font-weight: 500;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 8px;
  transition: background 0.2s, color 0.2s, border-bottom 0.2s;
  color: ${({ selected }) => (selected ? colors.oceanBlue : colors.text)};
  border-bottom: ${({ selected }) =>
    selected ? `2px solid ${colors.lightYellow}` : "none"};

  &:hover {
    background: ${colors.highlight}20;
    color: ${colors.highlight};
  }
`;

const ContentDisplay = styled.div`
  height: 100%;
  width: 100%;
  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 12px;
  }
`;

const CloseButton = styled.button`
  margin-top: 20px;
  background: ${colors.accent};
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: ${colors.highlight};
  }
`;

// Sample Data
const courses = [
  {
    id: 1,
    title: "Video Editing",
    description: "Master video editing techniques.",
    icon: <FaVideo size={24} />,
  },
  {
    id: 2,
    title: "Digital Marketing",
    description: "Learn SEO and social media marketing.",
    icon: <FaChartLine size={24} />,
  },
  {
    id: 3,
    title: "Web Development",
    description: "Build modern websites with React.",
    icon: <FaCode size={24} />,
  },
  {
    id: 6,
    title: "Mobile App Development",
    description: "Create apps for iOS and Android.",
    icon: <FaMobileAlt size={24} />,
  },
  {
    id: 5,
    title: "Graphic Design",
    description: "Create stunning visuals with design tools.",
    icon: <FaPaintBrush size={24} />,
  },
  {
    id: 8,
    title: "AI Automation",
    description: "Get started with artificial intelligence.",
    icon: <FaRobot size={24} />,
  },
];

const courseContents = {
  "Video Editing": [
    { title: "Basics of Video Cutting", type: "video", src: "https://youtu.be/F1sKwFHM8q4" },
    { title: "Exporting Projects", type: "pdf", src: "/pdfs/exporting.pdf" },
  ],
  "Digital Marketing": [
    { title: "Introduction to SEO", type: "pdf", src: "/pdfs/seo-guide.pdf" },
    { title: "Social Media Strategies", type: "video", src: "https://www.youtube.com/embed/ysz5S6PUM-U" },
  ],
  "Web Development": [
    { title: "React Basics", type: "video", src: "https://www.youtube.com/embed/bMknfKXIFA8" },
    { title: "Responsive Layouts", type: "pdf", src: "/pdfs/responsive.pdf" },
  ],
};

const Training = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <>
      <Header />
      <PageWrapper>
        <h1 style={{ textAlign: "center", color: colors.accent }}>
          {selectedCourse ? `${selectedCourse.title} Module` : "Training Modules"}
        </h1>

        {!selectedCourse ? (
          <GridContainer>
            {courses.map((course) => (
        <Card
  key={course.id}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
  onClick={() => setSelectedCourse(course)}
>
  <div className="card-header">
    <div className="card-icon">{course.icon}</div>
    <h2 style={{ margin: 0 }}>{course.title}</h2>
  </div>
  <p>{course.description}</p>
</Card>

            ))}
          </GridContainer>
        ) : (
          <AnimatePresence>
            <LayoutContainer>
              <LeftPanel>
                <h2 style={{ color: colors.accent }}>Contents</h2>
                {courseContents[selectedCourse.title]?.map((item, index) => (
                  <Topic
                    key={index}
                    selected={selectedTopic?.title === item.title}
                    onClick={() => setSelectedTopic(item)}
                  >
                    {item.title}
                  </Topic>
                ))}
                <CloseButton onClick={() => {
                  setSelectedCourse(null);
                  setSelectedTopic(null);
                }}>
                  Back to Courses
                </CloseButton>
              </LeftPanel>

              <RightPanel>
                <ContentDisplay>
                  {selectedTopic ? (
                    selectedTopic.type === "video" ? (
                      <iframe
                        src={selectedTopic.src}
                        title={selectedTopic.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <iframe src={selectedTopic.src} title={selectedTopic.title} />
                    )
                  ) : (
                    <p style={{ color: colors.lightText }}>Select a topic to view its content</p>
                  )}
                </ContentDisplay>
              </RightPanel>
            </LayoutContainer>
          </AnimatePresence>
        )}
      </PageWrapper>
    </>
  );
};

export default Training;
