import React from "react";
import "../CSS/Education.css";
import { education, certifications } from "../data/profile";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { ArrowUpRightIcon, AwardIcon, GraduationIcon } from "./Icons";

const Education = () => {
  const hasCerts = certifications.length > 0;

  return (
    <section id="education" className="section section--alt bg-grain" aria-labelledby="education-title">
      <div className="container">
        <SectionHeader
          id="education-title"
          eyebrow="Learning"
          title={hasCerts ? "Education &" : "Academic"}
          highlight={hasCerts ? "Certifications" : "Background"}
          description="The academic foundation behind my work in software engineering."
        />

        <div className={`edu-layout ${hasCerts ? "" : "edu-layout--solo"}`}>
          <div className="edu-column">
            {hasCerts && (
              <h3 className="subheading subheading--icon">
                <GraduationIcon size={18} /> Education
              </h3>
            )}
            <div className="edu-list">
              {education.map((edu, index) => (
                <Reveal as="article" key={edu.degree} className="edu-card card" delay={index * 80}>
                  <div className="edu-card__top">
                    <span className="edu-card__icon" aria-hidden="true">
                      <GraduationIcon size={20} />
                    </span>
                    <span className="badge">{edu.period}</span>
                  </div>
                  <h4 className="edu-card__title">{edu.degree}</h4>
                  <p className="edu-card__place">{edu.institution}</p>
                  <p className="edu-card__desc">{edu.description}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {hasCerts && (
            <div className="edu-column">
              <h3 className="subheading subheading--icon">
                <AwardIcon size={18} /> Certifications
              </h3>
              <div className="cert-grid">
                {certifications.map((cert, index) => (
                  <Reveal as="article" key={cert.title} className="cert-card card" delay={index * 80}>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-card__link"
                      aria-label={`View ${cert.title} credential (opens in a new tab)`}
                    >
                      {cert.image && (
                        <div className="cert-card__thumb">
                          <img src={cert.image} alt="" loading="lazy" decoding="async" />
                        </div>
                      )}
                      <div className="cert-card__body">
                        <p className="cert-card__issuer">
                          {cert.issuer} <span aria-hidden="true">·</span> {cert.date}
                        </p>
                        <h4 className="cert-card__title">{cert.title}</h4>
                        <span className="cert-card__cta">
                          View credential <ArrowUpRightIcon size={14} />
                        </span>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;
