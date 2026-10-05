// Single source of truth for all portfolio content.
// Components read from here, so updating the portfolio means editing this file only.
import portfolioImage from "../assets/portfolio.png";
import postman from "../assets/postman.png";
import swagger from "../assets/swagger.png";

const devicon = (path) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;

export const profile = {
  name: "T Adinarayana",
  fullName: "Tirumalakonda Adinarayana",
  role: "Java Full Stack Developer",
  title: "Software Engineer",
  location: "Bangalore, Karnataka",
  photo: portfolioImage,
  intro:
    "I build scalable, event-driven enterprise systems with Spring Boot microservices, Apache Kafka and React.js — with full-stack observability, Keycloak-secured access and production deployments on AWS.",
  current: {
    role: "Software Engineer",
    company: "IIIT Bangalore",
    since: "Jan 2026",
  },
  focus: [
    "Spring Boot",
    "Microservices",
    "Apache Kafka",
    "React.js",
    "LangChain",
    "LangGraph",
    "AWS",
    "Docker",
  ],
  stats: [
    { value: "3+", label: "Years of experience" },
    { value: "3", label: "Companies" },
    { value: "3", label: "Enterprise projects" },
  ],
};

export const links = {
  email: "adiadi6514@gmail.com",
  phone: "+91 8296171873",
  phoneHref: "tel:+918296171873",
  linkedin: "https://www.linkedin.com/in/t-adinarayana-113879254/",
  github: "https://github.com/adinarayanat",
  resume:
    "https://drive.google.com/file/d/1pY2XlA5-z9_6mculf0Q12s51UMhmPGwE/view?ts=69940154",
};

export const about = {
  heading: ["Engineering reliable systems that", "scale with the business"],
  paragraphs: [
    "I'm a Java Full Stack Developer with 3+ years of experience designing and shipping enterprise-grade applications — from backend microservices and event streams to the React interfaces people use every day.",
    "My core stack is Spring Boot, Hibernate/JPA and Apache Kafka on the backend with React.js on the frontend. I care about systems being observable, secure and production-ready, so my work regularly spans Prometheus, Grafana, Loki and Tempo for observability, Keycloak for identity and access, and Docker and AWS for deployment.",
    "More recently I've been building AI-driven services — FastAPI and LangChain microservices with RAG pipelines, and LangGraph-orchestrated, human-in-the-loop agents for automated code generation.",
  ],
  facts: [
    { label: "Based in", value: "Bangalore, India" },
    { label: "Currently", value: "Software Engineer, IIIT Bangalore" },
    { label: "Education", value: "BCA, East Point College" },
    { label: "Focus", value: "Microservices · Event-driven · GenAI" },
  ],
  coreTech: [
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
    "LangChain/LangGraph",
  ],
};

export const experience = [
  {
    role: "Software Engineer",
    company: "International Institute of Information Technology Bangalore",
    companyShort: "IIIT Bangalore",
    type: "Full-time",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    period: "Jan 2026 – Present",
    current: true,
    points: [
      "Develop backend microservices and AI-driven code generation pipelines, working across Spring Boot, FastAPI, LangChain and LangGraph.",
      "Built and maintained scalable Spring Boot REST APIs.",
    ],
    tech: ["Spring Boot", "FastAPI", "LangChain", "LangGraph", "REST APIs"],
  },
  {
    role: "Software Engineer",
    company: "Cloud4Things",
    type: "Full-time",
    location: "Bengaluru, Karnataka",
    period: "Apr 2024 – Jan 2026",
    project: {
      name: "RASP — Rapid Application Development Platform",
      description:
        "An enterprise-grade low-code platform that lets users create software applications faster and with less manual programming than traditional development.",
    },
    points: [
      "Developed backend microservices using Spring Boot, Hibernate and JPA with MySQL and MongoDB.",
      "Implemented full-stack observability with Prometheus for metrics, Loki for log aggregation and Tempo for distributed tracing across microservices.",
      "Architected an AI microservice using FastAPI and LangChain implementing RAG pipelines for document analysis, with LangGraph orchestrating stateful, human-in-the-loop agents for automated code generation.",
      "Leveraged Apache Kafka to sync data between Java microservices and Python AI services, ensuring high-throughput communication.",
      "Built and integrated React UI components with APIs using Axios and React Query.",
      "Managed deployment on AWS EC2 and used Amazon S3 for application document storage.",
      "Automated workflows using Camunda BPMN and integrated Keycloak for secure, role-based authentication.",
    ],
    tech: [
      "Spring Boot",
      "Hibernate",
      "Kafka",
      "FastAPI",
      "LangChain",
      "LangGraph",
      "React.js",
      "AWS",
      "Keycloak",
      "Camunda",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "ezAtlas",
    type: "Full-time",
    location: "Bangalore, Karnataka",
    mode: "Hybrid",
    period: "Jun 2023 – Apr 2024",
    project: {
      name: "Asset Management System",
      description:
        "A system for a client to track and manage assets such as IT hardware, furniture and equipment, with reports and alerts for maintenance and disposal.",
    },
    points: [
      "Designed and built REST APIs and microservices using Spring Boot and MS SQL Server.",
      "Optimized SQL queries and designed complex asset lifecycle workflows.",
      "Developed frontend screens in React.js featuring advanced filters, pagination and reusable components.",
      "Containerized microservices using Docker with multi-stage Dockerfiles to optimize image size and streamline deployment across AWS environments.",
    ],
    tech: ["Spring Boot", "MS SQL Server", "React.js", "Docker", "AWS"],
  },
];

export const projects = [
  {
    name: "RASP — Rapid Application Development Platform",
    company: "Cloud4Things",
    role: "Software Engineer · Backend, AI & Frontend",
    featured: true,
    description:
      "Enterprise-grade low-code platform enabling rapid application development with visual workflow design and a microservices architecture.",
    highlights: [
      "Architected Spring Boot microservices with Hibernate and JPA, integrating MySQL and MongoDB for flexible data persistence.",
      "Built an AI microservice with FastAPI and LangChain — RAG pipelines for document analysis and LangGraph human-in-the-loop agents for automated code generation.",
      "Implemented full-stack observability using Prometheus (metrics), Loki (logs) and Tempo (distributed tracing) for production monitoring.",
      "Orchestrated Apache Kafka for event-driven communication between Java and Python microservices with high-throughput processing.",
      "Built React.js UI components with Axios and React Query for efficient API integration and state management.",
      "Automated business workflows with the Camunda BPMN engine and secured the platform with Keycloak IAM for role-based access control.",
      "Deployed services on AWS EC2 with S3 integration for document storage and management.",
    ],
    tags: [
      "Spring Boot",
      "React.js",
      "Apache Kafka",
      "Microservices",
      "FastAPI",
      "LangChain",
      "LangGraph",
      "RAG",
      "Docker",
      "AWS",
      "Prometheus/Grafana",
      "Keycloak",
      "Camunda BPMN",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    name: "Asset Management System — Pioneer Toyota",
    company: "ezAtlas",
    role: "Junior Software Engineer · Full Stack",
    description:
      "Comprehensive enterprise asset tracking and lifecycle management solution for IT hardware, vehicles and equipment.",
    highlights: [
      "Designed and developed RESTful APIs using Spring Boot with MS SQL Server for asset CRUD operations and lifecycle management.",
      "Optimized complex SQL queries, reducing database response time and improving system performance.",
      "Built a responsive React.js frontend with advanced filtering, sorting, pagination and real-time asset status updates.",
      "Implemented asset maintenance scheduling, depreciation tracking and automated alert notifications.",
      "Containerized microservices with Docker using multi-stage builds for optimized AWS EC2 deployments.",
      "Created reporting modules for asset utilization, maintenance history and cost analysis.",
    ],
    tags: [
      "Spring Boot",
      "React.js",
      "MS SQL Server",
      "REST APIs",
      "Docker",
      "AWS",
      "Microservices",
    ],
  },
  {
    name: "Distributor Management System — Melt and Mellow",
    company: "ezAtlas",
    role: "Junior Software Engineer · Full Stack",
    description:
      "End-to-end distribution and inventory management platform for ice cream product supply chain operations.",
    highlights: [
      "Developed Spring Boot backend services for inventory control, order processing and distributor network management.",
      "Built React.js dashboards for real-time inventory tracking, sales analytics and distribution route optimization.",
      "Integrated automated alert notifications for low stock levels and order fulfillment milestones.",
      "Implemented performance reporting modules with data visualization for business intelligence.",
      "Designed a scalable MS SQL Server schema for complex distributor hierarchies and product catalogs.",
    ],
    tags: [
      "Spring Boot",
      "React.js",
      "MS SQL Server",
      "Inventory Management",
      "Analytics",
    ],
  },
];

export const skillCategories = [
  {
    category: "Backend",
    skills: [
      { name: "Java", icon: devicon("java/java-original.svg"), light: true },
      { name: "Spring Boot", icon: devicon("spring/spring-original.svg") },
      { name: "Spring Security" },
      { name: "Spring Cloud" },
      { name: "Hibernate", icon: devicon("hibernate/hibernate-original.svg") },
      { name: "JPA" },
      { name: "Microservices" },
      { name: "REST APIs" },
      {
        name: "Apache Kafka",
        icon: devicon("apachekafka/apachekafka-original.svg"),
        light: true,
      },
      { name: "FastAPI", icon: devicon("fastapi/fastapi-original.svg") },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: devicon("react/react-original.svg") },
      {
        name: "JavaScript (ES6+)",
        icon: devicon("javascript/javascript-original.svg"),
      },
      {
        name: "TypeScript",
        icon: devicon("typescript/typescript-original.svg"),
      },
      { name: "HTML5", icon: devicon("html5/html5-original.svg") },
      { name: "CSS3", icon: devicon("css3/css3-original.svg") },
      {
        name: "Tailwind CSS",
        icon: devicon("tailwindcss/tailwindcss-original.svg"),
      },
      { name: "Bootstrap", icon: devicon("bootstrap/bootstrap-original.svg") },
      { name: "Axios", icon: devicon("axios/axios-plain.svg"), light: true },
      { name: "React Query" },
    ],
  },
  {
    category: "Generative AI",
    skills: [
      { name: "LangChain" },
      { name: "LangGraph" },
      { name: "RAG Pipelines" },
      { name: "Agentic Workflows" },
      { name: "LangSmith" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: devicon("mysql/mysql-original.svg"), light: true },
      { name: "MongoDB", icon: devicon("mongodb/mongodb-original.svg") },
      {
        name: "MS SQL Server",
        icon: devicon("microsoftsqlserver/microsoftsqlserver-plain.svg"),
        light: true,
      },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "Docker", icon: devicon("docker/docker-original.svg") },
      {
        name: "AWS (EC2, S3)",
        icon: devicon("amazonwebservices/amazonwebservices-original-wordmark.svg"),
        light: true,
      },
      { name: "Git", icon: devicon("git/git-original.svg") },
      { name: "Maven", icon: devicon("maven/maven-original.svg") },
      { name: "CI/CD Basics" },
    ],
  },
  {
    category: "Observability",
    skills: [
      { name: "Prometheus", icon: devicon("prometheus/prometheus-original.svg") },
      { name: "Grafana", icon: devicon("grafana/grafana-original.svg") },
      { name: "Loki" },
      { name: "Tempo" },
    ],
  },
  {
    category: "Security & Workflow",
    skills: [{ name: "Keycloak (IAM)" }, { name: "Camunda 8 (BPMN)" }],
  },
  {
    category: "Tools",
    skills: [
      { name: "Postman", icon: postman },
      { name: "Swagger", icon: swagger },
      { name: "VS Code", icon: devicon("vscode/vscode-original.svg") },
      { name: "IntelliJ IDEA", icon: devicon("intellij/intellij-original.svg") },
    ],
  },
];

export const competencies = [
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

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "East Point College, Bangalore",
    period: "2019 – 2022",
    description:
      "Computer science education focused on software development, programming languages, database management and web technologies, with a strong foundation in Java, data structures and software engineering principles.",
  },
  {
    degree: "Pre-University Course (CEBA)",
    institution: "Government PU College, Hoskote",
    period: "2017 – 2019",
    description:
      "Foundation in Commerce, Economics, Business Studies and Accountancy, developing analytical and business skills.",
  },
];

// Add entries as { title, issuer, date, image, link } — the section appears automatically.
export const certifications = [];

export const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
