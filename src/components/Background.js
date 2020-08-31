import React from "react";
import { useSpring, animated } from "react-spring";
import TrackVisibility from "react-on-screen";

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
            <h1 className="Bg-Header">BACKGROUND</h1>
          </animated.div>
          <animated.div style={bottomProps} className="Bg-Container">
            <p>
              {" "}
              I'm currently working as a Frontend Developer at{" "}
              <a href="https://onikon.com/" target="_blank">
                ONIKON Creative Inc.
              </a>{" "}
              creating products and services for the web with some awesome
              people. I am a formal Product Engineer graduated from{" "}
              <a href="https://www.ubc.ca/" target="_blank">
                UBC
              </a>{" "}
              and recently attained a Web Development Diploma from{" "}
              <a href="https://www.lighthouselabs.ca/" target="_blank">
                Lighthouse Labs.
              </a>{" "}
              I have also worked as a Web Developer Intern at{" "}
              <a href="https://www.kater.com/" target="_blank">
                Kater Technologies Inc.
              </a>
            </p>

            <br />

            <p>
              As a Developer, I truly enjoy bridging the gap between design and
              engineering — combining my technical knowledge with my keen eye
              for design to build a beautiful product. I derive great
              satisfaction from building better, more efficient code as well as
              working in details and designs of the product to achieve superb
              UX/UI.
            </p>

            <br />

            <p>
              <span>When I'm not coding,</span> I will most likely be playing
              video games, basketball, snowboarding, working-out or watching
              Netflix.
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
