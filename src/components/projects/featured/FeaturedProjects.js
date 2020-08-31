import React from "react";
import { BoosterProject } from "./BoosterProject";
import { WatchMeProject } from "./WatchMeProject";
import OnikonProjects from "./onikon/OnikonProjects";
import PlateauProject from "./PlateauProject";
import { NomiProject } from "./NomiProject";
import { useSpring, animated } from "react-spring";
import TrackVisibility from "react-on-screen";

import "../../../css/projects/projects.css";

function FeaturedProjects() {
  const ComponentToTrack = ({ isVisible }) => {
    const topProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 500,
      config: { duration: 1000 },
    });

    const bottomProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 1200,
      config: { duration: 1000 },
    });

    return (
      <div className="FeaturedProjects">
        <animated.div style={topProps}>
          <h1 className="Project-Header">FEATURED PROJECTS</h1>
        </animated.div>
        <animated.div
          style={bottomProps}
          className="FeaturedProjects-Container"
        >
          <BoosterProject />
          <NomiProject />
          <WatchMeProject />
          <OnikonProjects />
          <PlateauProject />
        </animated.div>
      </div>
    );
  };

  return (
    <TrackVisibility partialVisibility once>
      <ComponentToTrack />
    </TrackVisibility>
  );
}

export default FeaturedProjects;
