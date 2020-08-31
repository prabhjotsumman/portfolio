import React from "react";

import "../css/experiences/experiences.css";

function Experience({ name, title, period, link }) {
  return (
    <div className="Experience-Container">
      <div>
        <p className="Company-Name">
          <a href={link} target="_blank">
            {name}
          </a>
        </p>
        <p className="Company-Position">{title}</p>
      </div>
      <p className="Company-Period">{period}</p>
    </div>
  );
}

export default Experience;
