import React from "react";
import { useSpring, animated } from "react-spring";
import TrackVisibility from "react-on-screen";
import CQ from "../Constants/Constants";

import "../css/background/background.css";

function Background() {
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
      <div className="Background">
        <div className="outterContainer">
          <animated.div style={topProps}>
            <h1 className="Bg-Header">BACKGROUND!</h1>
          </animated.div>
          <animated.div style={bottomProps} className="Bg-Container">
            <p>
              {CQ.BACKGROUND.CURRENTLY_WORKING_AS}
              <a href={CQ.BACKGROUND.CURRENT_COMPANY_URL}>
                {CQ.BACKGROUND.CURRENT_COMPANY}
              </a>{" "}
              {CQ.BACKGROUND.BACKGROUND_DESC_1}
            </p>
            <br />
            <p>
              {CQ.BACKGROUND.GRADUATED} {CQ.BACKGROUND.COLLEGE} {CQ.FILLERS.IN}
              {CQ.BACKGROUND.GRADUATED_YEAR} {CQ.FILLERS.IN}{" "}
              {CQ.BACKGROUND.GRADUATED_BRANCH} {CQ.BACKGROUND.COLLEGE_DESC}
            </p>
            <br />
            <p>{CQ.BACKGROUND.BACKGROUND_DESC_2}</p>
            <br />
            <p>
              <span>{CQ.LABEL.WHEN_I_AM_NOT_WORKING}</span>{" "}
              {CQ.LABEL.WHEN_I_AM_NOT_WORKING_DESC}
            </p>
          </animated.div>
        </div>
      </div>
    );
  };

  return (
    <TrackVisibility partialVisibility once>
      <ComponentToTrack />
    </TrackVisibility>
  );
}

export default Background;
