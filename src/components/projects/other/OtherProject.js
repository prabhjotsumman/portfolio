import React from "react";

function OtherProject({ name, link, info, stacks }) {
  return (
    <div className="OtherProject-Container">
      {name && (
        <div className="ProjectName-Container">
          <p className="Project-Name">
            <a href={link} target="_blank">
              {name}
            </a>
          </p>
          <i className="fas fa-arrow-right Project-Icon"></i>
        </div>
      )}
      <p className="Project-Info">{info}</p>
      <div className="Project-Stacks">
        {stacks.map(stack => (
          <span className="Project-Stack">{stack}</span>
        ))}
      </div>
    </div>
  );
}

export default OtherProject;
