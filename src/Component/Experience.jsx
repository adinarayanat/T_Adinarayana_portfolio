import React from "react";
import "../CSS/Experience.css";
import { experience } from "../data/profile";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { BriefcaseIcon, MapPinIcon } from "./Icons";

const Experience = () => (
  <section id="experience" className="section" aria-labelledby="experience-title">
    <div className="container">
      <SectionHeader
        id="experience-title"
        eyebrow="Career"
        title="Professional"
        highlight="Experience"
        description="Where I've worked and what I've built — from enterprise asset systems to low-code platforms and AI-driven code generation."
      />

      <ol className="timeline">
        {experience.map((job, index) => (
          <Reveal
            as="li"
            key={`${job.company}-${job.period}`}
            className={`timeline__item ${job.current ? "is-current" : ""}`}
            delay={index * 60}
          >
            <span className="timeline__marker" aria-hidden="true">
              <BriefcaseIcon size={16} />
            </span>

            <article className="timeline__card card">
              <header className="timeline__head">
                <div>
                  <h3 className="timeline__role">{job.role}</h3>
                  <p className="timeline__company">{job.company}</p>
                </div>
                <div className="timeline__when">
                  {job.current && <span className="badge badge--live">Current</span>}
                  <span className="badge">{job.period}</span>
                </div>
              </header>

              <p className="timeline__meta">
                <span>
                  <MapPinIcon size={14} /> {job.location}
                </span>
                <span>{[job.type, job.mode].filter(Boolean).join(" · ")}</span>
              </p>

              {job.project && (
                <div className="timeline__project">
                  <p className="timeline__project-name">
                    <span>Project</span> {job.project.name}
                  </p>
                  <p className="timeline__project-desc">{job.project.description}</p>
                </div>
              )}

              <ul className="bullet-list">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <ul className="chip-list chip-list--sm" aria-label="Technologies used">
                {job.tech.map((tech) => (
                  <li key={tech} className="chip">
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
