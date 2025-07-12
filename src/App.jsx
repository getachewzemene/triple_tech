import React, { useContext } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import {ThemeContext } from "./ThemeContext";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import Training from "./components/Training";
import './App.css';
const AppWrapper = styled.div`
  background: ${({ darkMode }) => (darkMode ? "#222" : "#F4F6F8")};
  color: ${({ darkMode }) => (darkMode ? "#FFF" : "#222")};
  min-height: 100vh;
  transition: background 0.4s ease-in-out;
`;

const App = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
      <Router>
        <AppWrapper darkMode={darkMode}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/training" element={<Training />} />
          </Routes>
          <Footer />
        </AppWrapper>
      </Router>
  );
};

export default App;
