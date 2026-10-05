import React from "react";
import Reveal from "./Reveal";

const SectionHeader = ({ eyebrow, title, highlight, description, align = "left", id }) => (
  <Reveal className={`section-header section-header--${align}`}>
    <span className="section-eyebrow">{eyebrow}</span>
    <h2 className="section-heading" id={id}>
      {title} {highlight && <span className="gradient-text">{highlight}</span>}
    </h2>
    {description && <p className="section-lead">{description}</p>}
  </Reveal>
);

export default SectionHeader;
