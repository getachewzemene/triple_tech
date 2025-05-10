import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import { ThemeContext } from "../ThemeContext";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: ${({ darkMode }) => (darkMode ? "#222" : "#003366")};
  color: white;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: #ffd700;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: 1px solid white;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
`;

const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <HeaderWrapper darkMode={darkMode}>
        <h1>Triple Technologies</h1>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <ToggleButton onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </ToggleButton>
        </Nav>
      </HeaderWrapper>
    </motion.div>
  );
};

export default Header;
