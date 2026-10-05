import React from "react";
import "../CSS/Hero.css";
import { profile, links } from "../data/profile";
import {
  ArrowRightIcon,
  FileIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
} from "./Icons";

const Hero = () => {
  const socials = [
    { label: "LinkedIn", href: links.linkedin, Icon: LinkedInIcon, external: true },
    { label: "GitHub", href: links.github, Icon: GitHubIcon, external: true },
    { label: "Email", href: `mailto:${links.email}`, Icon: MailIcon },
  ];

  return (
    <section id="hero" className="hero bg-grain" aria-labelledby="hero-title">
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__orb hero__orb--1"></div>
        <div className="hero__orb hero__orb--2"></div>
        <div className="hero__grid"></div>
      </div>

      <div className="container hero__layout">
        <div className="hero__text">
          <p className="hero__status hero-in" style={{ "--i": 0 }}>
            <span className="status-dot" aria-hidden="true"></span>
            {profile.current.role} at {profile.current.company}
          </p>

          <p className="hero__greeting hero-in" style={{ "--i": 1 }}>
            Hello, I'm
          </p>
          <h1 id="hero-title" className="hero__name hero-in" style={{ "--i": 1 }}>
            <span className="gradient-text">{profile.name}</span>
          </h1>

          <div className="hero__role hero-in" style={{ "--i": 2 }}>
            <span className="decorative-line" aria-hidden="true"></span>
            <span>{profile.role}</span>
          </div>

          <p className="hero__intro hero-in" style={{ "--i": 3 }}>
            {profile.intro}
          </p>

          <div className="hero__actions hero-in" style={{ "--i": 4 }}>
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRightIcon size={18} />
            </a>
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <FileIcon size={18} /> View Resume
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get In Touch
            </a>
          </div>

          <ul className="hero__socials hero-in" style={{ "--i": 5 }}>
            {socials.map(({ label, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  className="icon-btn"
                  aria-label={label}
                  title={label}
                  {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  <Icon size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <aside className="hero__card hero-in" style={{ "--i": 3 }} aria-label="Profile summary">
          <div className="hero__card-head">
            <img
              src={profile.photo}
              alt=""
              width="56"
              height="56"
              className="hero__avatar"
            />
            <div>
              <p className="hero__card-name">{profile.fullName}</p>
              <p className="hero__card-role">{profile.title}</p>
            </div>
          </div>

          <dl className="hero__card-meta">
            <div>
              <dt>Currently</dt>
              <dd>
                {profile.current.company}
                <span> · since {profile.current.since}</span>
              </dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>
                <MapPinIcon size={14} /> {profile.location}
              </dd>
            </div>
          </dl>

          <div className="hero__card-stack">
            <p className="hero__card-label">Primary stack</p>
            <ul className="chip-list">
              {profile.focus.map((tech) => (
                <li key={tech} className="chip">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <ul className="hero__stats">
            {profile.stats.map((stat) => (
              <li key={stat.label}>
                <span className="hero__stat-value gradient-text">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to About section">
        <span className="hero__scroll-line" aria-hidden="true"></span>
      </a>
    </section>
  );
};

export default Hero;
