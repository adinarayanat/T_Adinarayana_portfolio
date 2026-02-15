import React from "react";
import "../CSS/Portfoliosections.css";

const WorkExperience = ({ isVisible }) => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Cloud 4 Things",
      location: "Bangalore, India",
      period: "April 2024 - December 2024",
      responsibilities: [
        "Architected and developed RASP (Rapid Application Development Platform), an enterprise-grade low-code platform using Spring Boot microservices with Hibernate and JPA",
        "Implemented full-stack observability using Prometheus for metrics collection, Loki for log aggregation, and Tempo for distributed tracing across microservices",
        "Built React.js UI components integrated with REST APIs using Axios and React Query for efficient data management",
        "Orchestrated event-driven architectures using Apache Kafka for high-throughput data synchronization between Java and Python microservices",
        "Managing AWS deployments on EC2 instances and leveraging Amazon S3 for document storage solutions",
        "Automated business workflows using Camunda BPMN and implemented secure role-based authentication with Keycloak IAM",
        "Developed backend microservices handling complex business logic with MySQL and MongoDB databases",
      ],
      current: false,
    },
    {
      title: "Software Engineer",
      company: "HCS/EZATLAS",
      location: "Bangalore, India",
      period: "June 2023 - April 2024",
      responsibilities: [
        "Designed and developed an Asset Management System for tracking IT hardware, furniture, and equipment using Spring Boot and MS SQL Server",
        "Built RESTful APIs and microservices following industry best practices and design patterns",
        "Optimized complex SQL queries and designed asset lifecycle workflows for improved system performance",
        "Developed responsive React.js frontend featuring advanced filters, pagination, and reusable component architecture",
        "Containerized microservices using Docker with multi-stage Dockerfiles to optimize image sizes and streamline AWS deployments",
        "Collaborated with cross-functional teams in Agile environment to deliver high-quality software solutions",
      ],
      current: false,
    },
    {
      title: "Software Engineer Intern",
      company: "ditya software solutions",
      location: "Bangalore, India",
      period: "November 2022 - June 2023",
      responsibilities: [
        "Engineered high-performance REST APIs using Spring Boot framework with MS SQL Server integration",
        "Developed reusable React.js components and custom hooks to improve development efficiency and code maintainability",
        "Participated in code reviews and implemented best practices for clean code architecture",
        "Gained hands-on experience in full-stack development and agile methodologies",
      ],
      current: false,
    },
  ];

  return (
    <div className={`section-content ${isVisible ? "animate-fadeInUp" : ""}`}>
      <div className="section-intro">
        <h3 className="section-title">Professional Experience</h3>
        <p className="section-subtitle">
          3 years of building scalable enterprise solutions | Currently seeking new opportunities
        </p>
      </div>

      <div className="timeline"><div className="availability-notice">
        <div className="availability-card card">
          <div className="availability-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="availability-content">
            <h4 className="availability-title">Open to New Opportunities</h4>
            <p className="availability-description">
              Currently seeking exciting opportunities to contribute my expertise in Java Full Stack Development, 
              Spring Boot microservices, Apache Kafka, and React.js to innovative projects and forward-thinking teams.
            </p>
          </div>
        </div>
      </div>
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker">
              {exp.current && <div className="timeline-pulse"></div>}
            </div>

            <div className="timeline-content card">
              <div className="card-header">
                {exp.current && (
                  <span className="card-badge badge-current">Current</span>
                )}
                <span className="card-period">{exp.period}</span>
              </div>

              <h4 className="card-title">{exp.title}</h4>
              <p className="card-company">
                <svg
                  className="company-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {exp.company}, {exp.location}
              </p>

              <ul className="responsibilities-list">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default WorkExperience;