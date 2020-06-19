import React from "react";
import "./skills-animation.css";

const SkillsAnimation = ({ icons }) => (
  <div className="icons">
    {icons.map(icon => {
      return <div key={icon} className={`skill-icon ${icon}`}></div>;
    })}
  </div>
);

export default SkillsAnimation;
