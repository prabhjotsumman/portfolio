import React from "react";

import "../css/experiences/experiences.css";

function Experience({ name, title, period, link }) {
  return (
    <div className="Experience-Container">
      <div>
        <p className="Company-Name" style={{ color: '#05a19c' }} rel="noopener noreferrer" target="_blank">{name}</p>
        <p className="Company-Position">{title}</p>
      </div>
      <div>
        <p className="Company-Period">{period}</p>
      </div>
    </div>
  );
}

export default Experience;
