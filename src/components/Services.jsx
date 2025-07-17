import { motion } from "framer-motion";
import styled from "styled-components";
import { FaLaptopCode, FaMobileAlt, FaBullhorn, FaChalkboardTeacher } from "react-icons/fa";

const ServicesWrapper = styled.section`
  background: #F4F6F8;
  padding: 30px 10px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: center;
    padding: 50px;
  }
`;

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Heading = styled(motion.h2)`
  font-size: 24px;
  color: #003366;
  margin-bottom: 24px;
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
    background: rgb(255, 174, 0);
    border-radius: 2px;
  }

  @media (min-width: 600px) {
    font-size: 32px;
    margin-bottom: 30px;
  }
`;

const ServiceCard = styled(motion.div)`
  background: #fff;
  color: #222;
  padding: 10px 10px;
  border: 1px solid #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 340px;
  min-height: 320px;
  cursor: pointer;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
    background: rgb(23, 84, 204);
    color: white;
    transition: background 0.3s ease, color 0.3s ease;
  }
  .divider {
    width: 60px;
    height: 3px;
    background: #f4af1b;
    border-radius: 2px;
    margin: 8px 0;
  }
  .icon {
    font-size: 32px;
    margin-bottom: 10px;
    color: #0070f3;
  }

  h3 {
    margin: 0 0 10px;
    font-size: 16px;
    color: #003366;
    transition: color 0.3s ease;
  }
  p {
    font-size: 15px;
    padding: 0 5px;
    line-height: 1.7;
    text-align: justify;
    text-align-last: start;
    hyphens: auto;
    word-spacing: 0.5px;
    flex-grow: 1;
    color: #333;
    transition: color 0.3s ease;
  }

  &:hover h3,
  &:hover p {
    color: #fff;
  }
  &:hover .icon {
    color: #ffd700;
  }

  @media (min-width: 600px) {
    width: 260px;
    min-height: 350px;
    .icon {
      font-size: 40px;
    }
    h3 {
      font-size: 18px;
    }
    .divider {
      width: 80px;
    }
    p {
      font-size: 16px;
      padding: 0 10px;
      line-height: 1.8;
    }
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

    <ServicesWrapper>
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