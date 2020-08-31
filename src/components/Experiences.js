import React from "react";
import Experience from "./Experience";
import { useSpring, animated } from "react-spring";
import TrackVisibility from "react-on-screen";

import CQ from "../Constants/Constants";
import Resume from "./Resume";
import "../css/experiences/experiences.css";

function Experiences() {
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
      <div className="Experiences">
        <animated.div style={topProps}>
          <h1>EXPERIENCE</h1>
        </animated.div>

        <animated.div style={bottomProps} className="Experiences-Container">
          {CQ.EXPERIENCES.COMPANIES.map((company) => (
            <Experience
              name={company.name}
              title={company.title}
              period={company.period}
              link={company.link}
            />
          ))}
          <Resume />
        </animated.div>
      </div>
    );
  };

  return (
    <TrackVisibility partialVisibility tag="a" once>
      <ComponentToTrack />
    </TrackVisibility>
  );
}

export default Experiences;
