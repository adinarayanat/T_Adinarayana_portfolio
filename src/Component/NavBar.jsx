import React, { useEffect, useState } from "react";
import "../CSS/NavBar.css";
import { navItems, profile, links } from "../data/profile";
import useActiveSection from "../hooks/useActiveSection";
import { FileIcon } from "./Icons";

const sectionIds = navItems.map((item) => item.id);

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    const onResize = () => window.innerWidth > 960 && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [isOpen]);

  return (
    <header className={`navbar ${isScrolled || isOpen ? "navbar--scrolled" : ""}`}>
      <nav className="navbar__inner container" aria-label="Primary">
        <a href="#hero" className="navbar__logo" onClick={() => setIsOpen(false)}>
          <span className="decorative-dot" aria-hidden="true"></span>
          <span className="navbar__logo-text">{profile.name}</span>
        </a>

        <ul
          id="primary-menu"
          className={`navbar__menu ${isOpen ? "navbar__menu--open" : ""}`}
        >
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`navbar__link ${active === item.id ? "is-active" : ""}`}
                aria-current={active === item.id ? "true" : undefined}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="navbar__menu-cta">
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <FileIcon size={16} /> Resume
            </a>
          </li>
        </ul>

        <a
          href={links.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-sm navbar__cta"
        >
          <FileIcon size={16} /> Resume
        </a>

        <button
          type="button"
          className={`navbar__toggle ${isOpen ? "is-open" : ""}`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="primary-menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
