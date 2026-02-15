import React, { useEffect, useRef, useState } from "react";
import portfolioImage from "../assets/portfolio.png";
import "../CSS/About.css";

const About = ({ setActiveNav }) => {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setActiveNav("About");
        }
      },
      { threshold: 0.3 },
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, [setActiveNav]);

  const skills = [
    "Java",
    "Spring Boot",
    "Microservices",
    "Apache Kafka",
    "React.js",
    "Docker",
    "AWS Cloud",
    "MySQL/MongoDB",
    "REST APIs",
    "Hibernate/JPA",
    "Prometheus/Grafana",
    "Keycloak IAM",
  ];

  return (
    <section id="about" ref={aboutRef} className="about-section bg-grain">
      <div className="container-wide">
        <div className="about-content">
          <div
            className={`about-image-wrapper ${isVisible ? "animate-fadeInLeft" : ""}`}
          >
            <div className="image-decorative-frame">
              <img
                src={portfolioImage}
                alt="T Adinarayana - Java Full Stack Developer"
                className="about-image"
              />
              <div className="image-glow"></div>
            </div>
          </div>

          <div
            className={`about-text ${isVisible ? "animate-fadeInRight" : ""}`}
          >
            <div className="section-label">
              <span className="decorative-dot"></span>
              <span>Get to know me</span>
              <span className="decorative-dot"></span>
            </div>

            <h2 className="about-title">
              Architecting robust systems that
              <span className="gradient-text">
                {" "}
                drive business transformation
              </span>
            </h2>

            <div className="about-description">
              <p>
                I'm <strong>T Adinarayana</strong>, a results-driven Java Full Stack
                Developer with 3 years of expertise in architecting and deploying
                enterprise-grade applications. My journey has been defined by a
                relentless pursuit of technical excellence and a commitment to
                building systems that scale seamlessly while solving complex business
                challenges.
              </p>

              <p>
                Specializing in <strong>Spring Boot microservices</strong>,{" "}
                <strong>Apache Kafka</strong>, and <strong>React.js</strong>, I
                architect event-driven, cloud-native solutions that deliver exceptional
                performance and reliability. From designing RESTful APIs to implementing
                distributed tracing with Prometheus and Grafana, I ensure every system
                is observable, secure, and production-ready.
              </p>

              <p>
                At <strong>Cloud 4 Things</strong>, I engineered RASP—a low-code 
                platform revolutionizing rapid application development. I led the 
                development of Spring Boot microservices with Hibernate and JPA, 
                orchestrated event-driven architectures using Apache Kafka, and built 
                intuitive React interfaces powered by modern hooks and state management. 
                My work spanned full-stack observability implementation, AWS cloud 
                deployments, workflow automation with Camunda BPMN, and enterprise 
                security with Keycloak IAM.
              </p>

              <p>
                Previously at <strong>HCS/EZATLAS</strong>, I architected an Asset
                Management System serving enterprise clients, optimizing complex SQL
                workflows, designing scalable REST APIs, and containerizing microservices
                with Docker for streamlined AWS deployments. I pride myself on writing
                clean, maintainable code that stands the test of time.
              </p>

              <p>
                <strong>Currently seeking new opportunities</strong> where I can leverage 
                my expertise in microservices architecture, event-driven systems, and 
                full-stack development to drive innovation and deliver impactful solutions. 
                I thrive on solving challenging problems, collaborating with talented teams, 
                and staying at the forefront of technology. Let's connect and build 
                something extraordinary together!
              </p>
            </div>

            <div className="skills-section">
              <h3 className="skills-title">Core Technologies</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className={`skill-tag ${isVisible ? `animate-fadeInUp stagger-${index + 1}` : ""}`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="about-action">
              <a href="#portfolio" className="btn btn-primary">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;