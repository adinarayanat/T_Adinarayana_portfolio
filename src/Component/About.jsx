import React from "react";
import "../CSS/About.css";
import { about, profile } from "../data/profile";
import Reveal from "./Reveal";

const About = () => (
  <section id="about" className="section section--alt bg-grain" aria-labelledby="about-title">
    <div className="container about">
      <Reveal className="about__media">
        <div className="about__frame">
          <img
            src={profile.photo}
            alt={`${profile.name} — ${profile.role}`}
            width="231"
            height="259"
            loading="lazy"
            className="about__photo"
          />
        </div>
      </Reveal>

      <div className="about__body">
        <Reveal>
          <span className="section-eyebrow">Get to know me</span>
          <h2 id="about-title" className="section-heading">
            {about.heading[0]} <span className="gradient-text">{about.heading[1]}</span>
          </h2>
        </Reveal>

        <Reveal className="about__text" delay={80}>
          {about.paragraphs.map((text) => (
            <p key={text.slice(0, 24)}>{text}</p>
          ))}
        </Reveal>

        <Reveal as="dl" className="about__facts" delay={140}>
          {about.facts.map((fact) => (
            <div key={fact.label} className="about__fact">
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </Reveal>

        <Reveal className="about__tech" delay={200}>
          <h3 className="subheading">Core technologies</h3>
          <ul className="chip-list">
            {about.coreTech.map((tech) => (
              <li key={tech} className="chip chip--accent">
                {tech}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;
