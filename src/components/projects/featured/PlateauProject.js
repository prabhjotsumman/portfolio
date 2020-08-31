import React from "react";

import "../../../css/projects/projects.css";

function PlateauProject() {
  return (
    <div className="FeaturedProject-Container">
      <h1 className="Project-Header">Plateau</h1>
      <div className="Project-Image-Container">
        <a
          className="Project-Image Plateau"
          href="https://plateau.herokuapp.com/"
          target="_blank"
        >
          <div className="Project-Inner-Background"></div>
          <span className="Project-Name">
            <i class="fas fa-external-link-alt"></i>
          </span>
        </a>
      </div>
      <p className="Project-Info">
        Plateau is a Fullstack eCommerce application built with MERN stacks.
        User login is required to complete orders and a confirmation email will
        be sent to user's provided email upon the order completion.
      </p>
      {/* <div className="Project-Note">
        <p>
          The main purpose of the project was to learn how to manage React
          states efficiently using Redux and write/use my own Backend APIs and
          retrieve/access these data for the UI.
        </p>
      </div> */}
      <div className="Project-Stacks">
        <span className="Project-Stack">React</span>
        <span className="Project-Stack">Redux</span>
        <span className="Project-Stack">MongoDB</span>
        <span className="Project-Stack">Mongoose</span>
        <span className="Project-Stack">Express</span>
        <span className="Project-Stack">Node</span>
        <span className="Project-Stack">SendGrid</span>
      </div>
    </div>
  );
}

export default PlateauProject;
