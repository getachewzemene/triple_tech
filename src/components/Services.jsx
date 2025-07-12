import { motion } from "framer-motion";
import styled from "styled-components";
import { FaLaptopCode, FaMobileAlt, FaBullhorn, FaChalkboardTeacher } from "react-icons/fa"; // Import icons

const ServicesWrapper = styled.section`
background: #F4F6F8;
  padding: 50px;
  text-align: center;
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


const ServiceCard = styled(motion.div)`
background:#fff;
  color: #222;
  padding: 5px 5px;
  border: 1px solid #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Align content to the top */
  align-items: center; /* Center content horizontally */
  width: 280px;
  height: 350px; /* Adjust height to fit icons */
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
  .divider {
    width: 80px;
    height: 3px;
    background: #f4af1b;
    border-radius: 2px;
    margin: 8px 0;
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
    padding: 0 10px; /* Add padding for better text spacing */
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

const Services = () => (
  <>
  <HeadingWrapper id="services">
  <Heading
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    Our Services
  </Heading>
</HeadingWrapper>

    <ServicesWrapper >
      <ServiceCard
        variants={slideInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="Card-wrapper"
      >
        <FaLaptopCode className="icon" />
        <h3>Web Development</h3>
        <div className="divider" />
        <p>
          We specialize in creating responsive, modern, and visually appealing websites tailored to your business needs. 
          Our team ensures seamless user experiences with optimized performance, accessibility, and scalability.
        </p>
      </ServiceCard>
      <ServiceCard
        variants={slideInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="Card-wrapper"
      >
        <FaMobileAlt className="icon" />
        <h3>Mobile App Development</h3>
        <div className="divider" />
        <p>
          Our experts build high-performance mobile applications for Android and iOS platforms. 
          We use cutting-edge technologies to deliver apps that are fast, secure, and user-friendly, 
          ensuring your business stays ahead in the mobile-first world.
        </p>
      </ServiceCard>
      <ServiceCard
        variants={slideInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="Card-wrapper"
      >
        <FaBullhorn className="icon" />
        <h3>Digital Marketing</h3>
        <div className="divider" />
        <p>
          Boost your online presence with our comprehensive digital marketing services. 
          From SEO and PPC to social media marketing and content creation, we help you reach your target audience 
          and achieve measurable results.
        </p>
      </ServiceCard>
      <ServiceCard
        variants={slideInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="Card-wrapper"
      >
        <FaChalkboardTeacher className="icon" />
        <h3>IT Training and Consultancy</h3>
        <div className="divider" />
        <p>
          Empower your team with our professional IT training and consultancy services. 
          We provide tailored training programs and expert advice to help your organization adopt the latest technologies 
          and improve operational efficiency.
        </p>
      </ServiceCard>
    </ServicesWrapper>
  </>
);

export default Services;