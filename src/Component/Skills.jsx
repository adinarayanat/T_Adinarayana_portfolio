import React from "react";
import "../CSS/Skills.css";
import { skillCategories, competencies } from "../data/profile";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { CheckIcon } from "./Icons";

const Skills = () => (
  <section id="skills" className="section" aria-labelledby="skills-title">
    <div className="container">
      <SectionHeader
        id="skills-title"
        eyebrow="Toolkit"
        title="Technical"
        highlight="Expertise"
        description="The languages, frameworks and platforms I use to build, secure, observe and ship full-stack systems."
      />

      <div className="skills-grid">
        {skillCategories.map((group, index) => (
          <Reveal
            as="article"
            key={group.category}
            className="skill-group card"
            delay={(index % 3) * 60}
          >
            <header className="skill-group__head">
              <h3 className="skill-group__title">{group.category}</h3>
              <span className="skill-group__count">{group.skills.length}</span>
            </header>
            <ul className="skill-list">
              {group.skills.map((skill) => (
                <li key={skill.name} className="skill">
                  <span className={`skill__icon ${skill.light ? "skill__icon--light" : ""}`}>
                    {skill.icon ? (
                      <img
                        src={skill.icon}
                        alt=""
                        width="20"
                        height="20"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <span className="skill__mark" aria-hidden="true"></span>
                    )}
                  </span>
                  <span className="skill__name">{skill.name}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="competencies">
        <h3 className="subheading">Professional competencies</h3>
        <ul className="competencies__list">
          {competencies.map((item) => (
            <li key={item}>
              <CheckIcon size={16} />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </section>
);

export default Skills;
