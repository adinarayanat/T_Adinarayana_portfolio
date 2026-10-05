import React from "react";
import "../CSS/Contact.css";
import { links, profile, navItems } from "../data/profile";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import {
  ArrowUpIcon,
  FileIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "./Icons";

const Contact = () => {
  const year = new Date().getFullYear();

  const channels = [
    { label: "Email", value: links.email, href: `mailto:${links.email}`, Icon: MailIcon },
    { label: "Phone", value: links.phone, href: links.phoneHref, Icon: PhoneIcon },
    { label: "Location", value: profile.location, Icon: MapPinIcon },
  ];

  const socials = [
    { label: "LinkedIn", href: links.linkedin, Icon: LinkedInIcon },
    { label: "GitHub", href: links.github, Icon: GitHubIcon },
    { label: "Resume", href: links.resume, Icon: FileIcon },
  ];

  return (
    <>
      <section id="contact" className="section contact" aria-labelledby="contact-title">
        <div className="contact__glow" aria-hidden="true"></div>
        <div className="container">
          <SectionHeader
            id="contact-title"
            align="center"
            eyebrow="Let's connect"
            title="Get In"
            highlight="Touch"
            description="I'm always open to discussing new projects, ideas or opportunities. Reach out through any of the channels below."
          />

          <div className="contact__channels">
            {channels.map(({ label, value, href, Icon }, index) => {
              const content = (
                <>
                  <span className="contact__icon">
                    <Icon size={20} />
                  </span>
                  <span className="contact__label">{label}</span>
                  <span className="contact__value">{value}</span>
                </>
              );
              return (
                <Reveal key={label} delay={index * 70}>
                  {href ? (
                    <a href={href} className="contact__card card">
                      {content}
                    </a>
                  ) : (
                    <div className="contact__card card">{content}</div>
                  )}
                </Reveal>
              );
            })}
          </div>

          <Reveal className="contact__cta card" delay={120}>
            <div>
              <h3 className="contact__cta-title">Ready to start a conversation?</h3>
              <p className="contact__cta-text">
                Whether it's a full-time opportunity, a project or just a chat about
                technology, I'd love to hear from you.
              </p>
            </div>
            <div className="contact__cta-actions">
              <a href={`mailto:${links.email}`} className="btn btn-primary">
                <MailIcon size={18} /> Send Email
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <LinkedInIcon size={18} /> Connect on LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <a href="#hero" className="navbar__logo">
              <span className="decorative-dot" aria-hidden="true"></span>
              <span className="navbar__logo-text">{profile.name}</span>
            </a>
            <p className="footer__tagline">
              {profile.role} · {profile.location}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="footer__nav">
              {navItems.slice(1).map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="footer__socials">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                  aria-label={label}
                  title={label}
                >
                  <Icon size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="container footer__bottom">
          <p>
            © {year} {profile.name}. Built with <span className="gradient-text">React.js</span>.
          </p>
          <a href="#hero" className="footer__top">
            Back to top <ArrowUpIcon size={14} />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Contact;
