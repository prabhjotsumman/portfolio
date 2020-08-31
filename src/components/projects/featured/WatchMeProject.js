import React from "react";

export const WatchMeProject = () => {
  return (
    <div className="FeaturedProject-Container">
      <h1 className="Project-Header Margin-Top">Watch Me</h1>
      <div className="Project-Image-Container">
        <a
          className="Project-Image WatchMe"
          href="https://watchm3.netlify.app/"
          target="_blank"
        >
          <div className="Project-Inner-Background"></div>
          <span className="Project-Name">
            <i class="fas fa-external-link-alt"></i>
          </span>
        </a>
      </div>
      <p className="Project-Info">
        Watch Me is an application that specializes in watch trading, repairing
        and customizing. Watch Me offers a wide assortment of Classic and Luxury
        watch models and services to suffice all customers needs.
      </p>
      {/* <div className="Project-Note">
        <p>
          By working on Watch Me, I learned a lot on structuring the UI
          components in more clear and efficient ways as well as desining more
          appealing and user-friendly UI to provide Superb UX.
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
