import React, { useState } from "react";
import "../CSS/Projects.css";
import { projects } from "../data/profile";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { ChevronDownIcon, LayersIcon } from "./Icons";

const PREVIEW_COUNT = 4;

const ProjectCard = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);
  const hasMore = project.highlights.length > PREVIEW_COUNT;
  const shown = expanded ? project.highlights : project.highlights.slice(0, PREVIEW_COUNT);
  const listId = `project-highlights-${index}`;

  return (
    <Reveal
      as="article"
      className={`project card ${project.featured ? "project--featured" : ""}`}
      delay={index * 80}
    >
      <div className="project__main">
        <div className="project__top">
          <span className="project__icon" aria-hidden="true">
            <LayersIcon size={20} />
          </span>
          {project.featured && <span className="badge badge--accent">Featured</span>}
        </div>

        <h3 className="project__title">{project.name}</h3>
        <p className="project__meta">
          {project.company} <span aria-hidden="true">·</span> {project.role}
        </p>
        <p className="project__desc">{project.description}</p>
      </div>

      <div className="project__details">
        <h4 className="subheading">Key contributions</h4>
        <ul id={listId} className="bullet-list">
          {shown.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {hasMore && (
          <button
            type="button"
            className={`text-btn ${expanded ? "is-expanded" : ""}`}
            aria-expanded={expanded}
            aria-controls={listId}
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded
              ? "Show less"
              : `Show ${project.highlights.length - PREVIEW_COUNT} more`}
            <ChevronDownIcon size={16} />
          </button>
        )}

        <ul className="chip-list chip-list--sm project__tags" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <li key={tag} className="chip">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
};

const Projects = () => (
  <section id="projects" className="section section--alt bg-grain" aria-labelledby="projects-title">
    <div className="container">
      <SectionHeader
        id="projects-title"
        eyebrow="Selected work"
        title="Featured"
        highlight="Projects"
        description="Enterprise products I've helped design, build and ship end to end."
      />

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
