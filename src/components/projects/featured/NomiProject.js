import React from "react";

export const NomiProject = () => {
  return (
    <div className="FeaturedProject-Container">
      <h1 className="Project-Header  Margin-Top">Nomi Malik Landing Page</h1>
      <div className="Project-Image-Container">
        <a
          className="Project-Image Nomi"
          href="http://evaluations.asknomi.ca/"
          target="_blank"
        >
          <div className="Project-Inner-Background"></div>
          <span className="Project-Name">
            <i class="fas fa-external-link-alt"></i>
          </span>
        </a>
      </div>
      <p className="Project-Info">
        Custom designed landing page and evaluating website built for one of our
        clients, Nomi Malik, a Realtor, who specializes in marketing single
        family houses and condos in Vancouver.
      </p>
      <div className="Project-Stacks">
        <span className="Project-Stack">HTML</span>
        <span className="Project-Stack">SCSS</span>
        <span className="Project-Stack">Vue</span>
        <span className="Project-Stack">Google Maps API</span>
        <span className="Project-Stack">PHPMailer</span>
      </div>
    </div>
  );
};
