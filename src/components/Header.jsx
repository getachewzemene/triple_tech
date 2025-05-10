// /src/components/Header.js
import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { ThemeContext } from "../ThemeContext";
import { Link as ScrollLink } from "react-scroll"; // Import Link from react-scroll

const HeaderWrapper = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ scrolled }) => (scrolled ? "10px 20px" : "20px 40px")};
  background: ${({ darkMode, scrolled }) =>
    darkMode ? (scrolled ? "#111" : "#222") : scrolled ? "#002244" : "#003366"};
  color: #ffd700;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: ${({ scrolled }) => (scrolled ? "0px 2px 8px rgba(0,0,0,0.3)" : "none")};
  transition: padding 0.3s, box-shadow 0.3s, background 0.3s;
  height: 60px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const NavLink = styled(ScrollLink)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeaderWrapper
      darkMode={darkMode}
      scrolled={scrolled}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
     <a href="/" style={{ textDecoration: "none", color: "#ffd700" }}>
        <h1 style={{ fontSize: "24px", margin: 0 }}>Triple Technologies</h1>
        </a>
      <Nav>
        {/* Each link uses the "to" prop corresponding to a section ID */}
        <NavLink to="home" smooth={true} duration={500}>
          Home
        </NavLink>
        <NavLink to="services" smooth={true} duration={500}>
          Services
        </NavLink>
        <NavLink to="projects" smooth={true} duration={500}>
          Projects
        </NavLink>
        <NavLink to="team" smooth={true} duration={500}>
          Team
        </NavLink>
        <NavLink to="about" smooth={true} duration={500}>
          About
        </NavLink>
        <NavLink to="contact" smooth={true} duration={500}>
          Contact
        </NavLink>
        <ToggleButton onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </ToggleButton>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
