import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";

const HeaderWrapper = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ scrolled }) => (scrolled ? "10px 20px" : "20px 40px")};
  background: ${({ darkMode, scrolled }) =>
    darkMode ? (scrolled ? "#111" : "#222") : scrolled ? "#003366" : "#003366"};
  color: #ffd700;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: ${({ scrolled }) => (scrolled ? "0px 2px 8px rgba(0,0,0,0.3)" : "none")};
  transition: padding 0.3s, box-shadow 0.3s, background 0.3s;
  height: 60px;

  @media (max-width: 768px) {
    padding: ${({ scrolled }) => (scrolled ? "8px 12px" : "14px 16px")};
    height: 54px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(ScrollLink)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: #ffd700;
    text-decoration: underline;
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 200;
  @media (max-width: 768px) {
    display: block;
  }
  span {
    display: block;
    width: 26px;
    height: 3px;
    margin: 5px 0;
    background: #ffd700;
    border-radius: 2px;
    transition: 0.3s;
  }
`;

const MobileMenuOverlay = styled(motion.div)`
  position: fixed;
  top: 60px;
  right: 0;
  background: ${({ darkMode }) => (darkMode ? "rgba(20,20,20,0.98)" : "rgba(0,34,68,0.98)")};
  z-index: 150;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 10px;
  align-items: flex-start;
`;

const MobileNavLink = styled(ScrollLink)`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #ffd700;
    text-decoration: underline;
  }
`;

const MobileExternalLink = styled.a`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #ffd700;
    text-decoration: underline;
  }
`;


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu on nav click
  const handleNavClick = () => setMobileOpen(false);
  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setMobileOpen(false);
    }
  };
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  return (
    <>
      <HeaderWrapper
        scrolled={scrolled}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <a
          href="/"
          style={{
            textDecoration: "none",
            color: "#ffd700",
            display: "flex",
            alignItems: "center"
          }}
          target="_self"
          rel="noopener noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/triple-logo.png`} 
            alt="Triple Tech."
            style={{ width: "50px", height: "50px", marginRight: "4px" }}
          />
          <h1 style={{ fontSize: "24px", marginLeft: "-7px", color: "#fff",
            fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px"

          }}>Triple Technologies</h1>
        </a>
        <Nav>
          <NavLink to="home" smooth={true} duration={500}>
            Home
          </NavLink>
          <NavLink to="services" smooth={true} duration={500}>
            Services
          </NavLink>
          <NavLink to="projects" smooth={true} duration={500}>
            Projects
          </NavLink>
          <NavLink to="why-choose-us" smooth={true} duration={500}>
            Why Choose Us
          </NavLink>
          <NavLink to="team" smooth={true} duration={500}>
            Team
          </NavLink>
       
          <a
            href="/training"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
              cursor: "pointer",
              marginLeft: "0.5rem",
              marginRight: "0.5rem",
              display: "inline",
            '&:hover': { color: "#ffd700",
              textDecoration: "underline"
            }
            }}
          >
            Training
          </a>
          <NavLink to="footer" smooth={true} duration={500}>
            Contact
          </NavLink>
        </Nav>
        <Hamburger
          aria-label="Open navigation menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span style={{ transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span style={{ opacity: mobileOpen ? 0 : 1 }} />
          <span style={{ transform: mobileOpen ? "rotate(-45deg) translate(7px, -7px)" : "none" }} />
        </Hamburger>
      </HeaderWrapper>
      <AnimatePresence>
        {mobileOpen && (
          <MobileMenuOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <MobileNav>
              <MobileNavLink to="home" smooth={true} duration={500} onClick={handleNavClick} style={{ display: "inline" }}>
                Home
              </MobileNavLink>
              <MobileNavLink to="services" smooth={true} duration={500} onClick={handleNavClick} style={{ display: "inline" }}>
                Services
              </MobileNavLink>
              <MobileNavLink to="projects" smooth={true} duration={500} onClick={handleNavClick} style={{ display: "inline" }}>
                Projects
              </MobileNavLink>
                <MobileNavLink to="why-choose-us" smooth={true} duration={500} onClick={handleNavClick} style={{ display: "inline" }}>
                Why Choose Us
              </MobileNavLink>
              <MobileNavLink to="team" smooth={true} duration={500} onClick={handleNavClick} style={{ display: "inline" }}>
                Team
              </MobileNavLink>
            
              <MobileExternalLink
                href="/training"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                style={{ display: "inline" }}
              >
                Training
              </MobileExternalLink>
              <MobileNavLink to="footer" smooth={true} duration={500} onClick={handleNavClick} style={{ display: "inline" }}>
                Contact
              </MobileNavLink>

            </MobileNav>
          </MobileMenuOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
