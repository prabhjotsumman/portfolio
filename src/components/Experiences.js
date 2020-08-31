import React from "react";
import Experience from "./Experience";
import { useSpring, animated } from "react-spring";
import TrackVisibility from "react-on-screen";

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
          <Experience
            name="ONIKON Creative Inc."
            title="Jr. Frontend Developer"
            period="Jan 2020 - Current"
            link="https://onikon.com/"
          />
          <Experience
            name="Kater"
            title="Web Developer Intern"
            period="Jul 2019 - Nov 2019"
            link="https://www.kater.com/"
          />
          <Experience
            name="Euroline Windows Inc."
            title="Product Engineer"
            period="Aug 2018 - Mar 2019"
            link="https://euroline-windows.com/"
          />
          <Experience
            name="INI Solutions"
            title="Software Technician"
            period="Sept 2016 - Aug 2018"
            link="http://www.inipos.com/"
          />
          <a
            className="Resume-Link"
            href="https://resume.creddle.io/resume/2x8ao7cjdbn"
            target="_blank"
          >
            View My Resume{" "}
            <span className="Resume" role="img">
              📄
            </span>
          </a>
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
