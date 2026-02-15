import React from "react";
import postman from "../assets/postman.png";
import swagger from "../assets/swagger.png";
import "../CSS/Portfoliosections.css";

const Skills = ({ isVisible }) => {
  const skillCategories = [
    {
      category: "Backend Development",
      skills: [
        {
          name: "Java",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
        },
        {
          name: "Spring Boot",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg",
        },
        {
          name: "Hibernate",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/hibernate/hibernate-original.svg",
        },
        {
          name: "Apache Kafka",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/apachekafka/apachekafka-original.svg",
        },
        
      ],
    },
    {
      category: "Frontend Development",
      skills: [
        {
          name: "React.js",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        },
        {
          name: "HTML5",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
        },
      ],
    },
    {
      category: "Databases",
      skills: [
        {
          name: "MySQL",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
        },
        {
          name: "MongoDB",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "MS SQL Server",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
        },
      ],
    },
    {
      category: "DevOps & Cloud",
      skills: [
        {
          name: "Docker",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
        },
        {
          name: "AWS",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        },
        {
          name: "Prometheus",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/prometheus/prometheus-original.svg",
        },
        {
          name: "Grafana",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/grafana/grafana-original.svg",
        },
      ],
    },
    {
      category: "API & Testing Tools",
      skills: [
        { name: "Postman", icon: postman, isLocal: true },
        { name: "Swagger", icon: swagger, isLocal: true },
      ],
    },
    {
      category: "Development Tools",
      skills: [
        {
          name: "Git",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
        },
        {
          name: "Maven",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/maven/maven-original.svg",
        },
        {
          name: "VS Code",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
        },
        {
          name: "IntelliJ IDEA",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/intellij/intellij-original.svg",
        },
      ],
    },
  ];

  const softSkills = [
    "Microservices Architecture",
    "REST API Design",
    "Event-Driven Architecture",
    "Agile/Scrum Methodology",
    "Code Review & Quality",
    "Problem Solving",
    "Team Collaboration",
    "Technical Documentation",
    "Performance Optimization",
    "System Design",
    "CI/CD Pipeline",
    "Cloud Deployment",
  ];

  return (
    <div className={`section-content ${isVisible ? "animate-fadeInUp" : ""}`}>
      <div className="section-intro">
        <h3 className="section-title">Technical Expertise</h3>
        <p className="section-subtitle">
          Comprehensive full-stack technology arsenal for enterprise solutions
        </p>
      </div>

      <div className="skills-categories">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="skill-category">
            <h4 className="category-title">
              <span className="decorative-dot"></span>
              {category.category}
              <span className="decorative-dot"></span>
            </h4>

            <div className="skills-showcase">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item" title={skill.name}>
                  <div className="skill-icon-wrapper">
                    <img
                      src={skill.icon}
                      alt={`${skill.name} logo`}
                      className="skill-icon"
                    />
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="skill-category">
          <h4 className="category-title">
            <span className="decorative-dot"></span>
            Professional Competencies
            <span className="decorative-dot"></span>
          </h4>

          <div className="soft-skills-grid">
            {softSkills.map((skill, index) => (
              <div key={index} className="soft-skill-item">
                <svg
                  className="check-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;