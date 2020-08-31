import React from "react";
import { useSpring, animated } from "react-spring";
import TrackVisibility from "react-on-screen";

import SkillList from "./SkillList/SkillList";
import CQ from "../Constants/Constants";
import "../css/skills/skills.css";

function Skills() {
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
      <div className="Skills">
        <animated.div style={topProps}>
          <h1 className="Skills-Header">SKILLS</h1>
        </animated.div>
        <animated.div style={bottomProps} className="Skills-Container">
          <SkillList title="LANGUAGES" list={CQ.SKILLS.LANGUAGES} />
          <SkillList title="FRAMEWORKS" list={CQ.SKILLS.FRAMEWORKS} />
          <SkillList title="LIBRARIES" list={CQ.SKILLS.LIBRARIES} />
          <SkillList title="TOOLS" list={CQ.SKILLS.TOOLS} />
          <SkillList title="DESIGNS" list={CQ.SKILLS.DESIGNS} />
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

export default Skills;
