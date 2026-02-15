import React from "react";
import "../CSS/Portfoliosections.css";

const Projects = ({ isVisible }) => {
  const projectGroups = [
    {
      company: "Cloud 4 Things",
      projects: [
        {
          name: "RASP - Rapid Application Development Platform",
          description:
            "Enterprise-grade low-code platform enabling rapid application development with visual workflow design and microservices architecture",
          highlights: [
            "Architected Spring Boot microservices with Hibernate and JPA, integrating MySQL and MongoDB for flexible data persistence",
            "Implemented full-stack observability using Prometheus (metrics), Loki (logs), and Tempo (distributed tracing) for production monitoring",
            "Built React.js UI components with Axios and React Query for efficient API integration and state management",
            "Orchestrated Apache Kafka for event-driven communication between Java and Python microservices with high-throughput processing",
            "Automated business workflows using Camunda BPMN engine and secured platform with Keycloak IAM for role-based access control",
            "Deployed containerized services on AWS EC2 with S3 integration for document storage and management",
          ],
          tags: [
            "Spring Boot",
            "React.js",
            "Apache Kafka",
            "Microservices",
            "Docker",
            "AWS",
            "Prometheus/Grafana",
            "Keycloak",
            "Camunda BPMN",
            "MySQL",
            "MongoDB",
          ],
        },
      ],
    },
    {
      company: "HCS/EZATLAS",
      projects: [
        {
          name: "Asset Management System - Pioneer Toyota",
          description:
            "Comprehensive enterprise asset tracking and lifecycle management solution for IT hardware, vehicles, and equipment",
          highlights: [
            "Designed and developed RESTful APIs using Spring Boot with MS SQL Server for asset CRUD operations and lifecycle management",
            "Optimized complex SQL queries reducing database response time and improving system performance",
            "Built responsive React.js frontend with advanced filtering, sorting, pagination, and real-time asset status updates",
            "Implemented asset maintenance scheduling, depreciation tracking, and automated alert notifications",
            "Containerized microservices with Docker using multi-stage builds for optimized AWS EC2 deployments",
            "Created comprehensive reporting modules for asset utilization, maintenance history, and cost analysis",
          ],
          tags: [
            "Spring Boot",
            "React.js",
            "MS SQL Server",
            "REST APIs",
            "Docker",
            "AWS",
            "Asset Tracking",
            "Microservices",
          ],
        },
        {
          name: "Distributor Management System - Melt and Mellow",
          description:
            "End-to-end distribution and inventory management platform for ice cream product supply chain operations",
          highlights: [
            "Developed Spring Boot backend services for inventory control, order processing, and distributor network management",
            "Built React.js dashboards for real-time inventory tracking, sales analytics, and distribution route optimization",
            "Integrated automated alert notifications for low stock levels and order fulfillment milestones",
            "Implemented performance reporting modules with data visualization for business intelligence",
            "Designed scalable database schema in MS SQL Server for handling complex distributor hierarchies and product catalogs",
          ],
          tags: [
            "Spring Boot",
            "React.js",
            "MS SQL Server",
            "Inventory Management",
            "Real-time Updates",
            "Analytics",
          ],
        },
      ],
    },
  ];

  return (
    <div className={`section-content ${isVisible ? "animate-fadeInUp" : ""}`}>
      <div className="section-intro">
        <h3 className="section-title">Featured Projects</h3>
        <p className="section-subtitle">
          Enterprise solutions delivering measurable business impact
        </p>
      </div>

      <div className="projects-container">
        {projectGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="project-group">
            <h4 className="project-group-title">
              <svg
                className="company-icon"
                width="20"
                height="20"
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
              {group.company}
            </h4>

            <div className="projects-grid">
              {group.projects.map((project, projIndex) => (
                <div key={projIndex} className="project-card card">
                  <h5 className="project-name">{project.name}</h5>
                  <p className="project-description">{project.description}</p>

                  <div className="project-highlights">
                    <h6 className="highlights-title">Key Achievements:</h6>
                    <ul className="highlights-list">
                      {project.highlights.map((highlight, hlIndex) => (
                        <li key={hlIndex}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;