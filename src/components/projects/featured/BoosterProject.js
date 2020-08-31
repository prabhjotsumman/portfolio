import React from "react";

export const BoosterProject = () => {
  return (
    <div className="FeaturedProject-Container">
      <h1 className="Project-Header">Booster</h1>
      <div className="Project-Image-Container">
        <a
          className="Project-Image Booster"
          href="https://boost3r.netlify.app/"
          target="_blank"
        >
          <div className="Project-Inner-Background"></div>
          <span className="Project-Name">
            <i class="fas fa-external-link-alt"></i>
          </span>
        </a>
      </div>
      <p className="Project-Info">
        Booster is a ping boosting service provider that I designed and
        developed for my fictional client. Booster provides users with a better
        internet connection, reduced latency, lower ping, and far fewer lost
        packets to experience a superior gaming experience.
      </p>
      {/* <div className="Project-Note">
        <p>
          By working on Booster, I learned a lot on implementing UI animations
          on different components using third party libraries as well as making
          the application fully responsive and user-friendly on all other device
          resolutions.
        </p>
      </div> */}
      <div className="Project-Stacks">
        <span className="Project-Stack">React</span>
        <span className="Project-Stack">React-Spring</span>
        <span className="Project-Stack">Animation</span>
        <span className="Project-Stack">SCSS</span>
        <span className="Project-Stack">Netlify</span>
      </div>
    </div>
  );
};
