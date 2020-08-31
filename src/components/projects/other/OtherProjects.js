import React from "react";
import OtherProject from "./OtherProject";
import { useSpring, animated } from "react-spring";
import TrackVisibility from "react-on-screen";

import CQ from "../../../Constants/Constants";
import "../../../css/projects/projects.css";

function OtherProjects() {
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
      <div className="OtherProjects">
        <animated.div style={topProps}>
          <h1 className="Project-Header">OTHER PROJECTS</h1>
        </animated.div>
        <animated.div style={bottomProps} className="OtherProjects-Container">
          {
            CQ.OTHER_PROJECTS.map(project => (
              <OtherProject
                name={project.name}
                link={project.link}
                info={project.info}
                stacks={project.stacks}
              />
            ))
          }
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

export default OtherProjects;
