import React from "react";
import { useSpring, animated } from "react-spring";
import TrackVisibility from "react-on-screen";

import CQ from "../Constants/Constants";
import "../css/footer/footer.css";

function Footer() {
  const ComponentToTrack = ({ isVisible }) => {
    const topProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 400,
      config: { duration: 1000 },
    });

    const bottomProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 1000,
      config: { duration: 1000 },
    });

    return (
      <div className="Footer">
        <animated.div style={topProps}>
          <h1>{CQ.FOOTER.TAG} {CQ.LABEL.NAME}<span role="img" aria-label="thumbs up">👍</span> {CQ.FOOTER.YEAR}</h1>
        </animated.div>
        <animated.div style={bottomProps} className="FooterLinks">
          <a
            href={"mailto:" + CQ.SOCIAL.EMAIL}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="FooterLink">EMAIL</span>
            <i className="far fa-envelope FooterLinkLogo"></i>
          </a>
          <a href={CQ.SOCIAL.GITHUB} rel="noopener noreferrer" target="_blank">
            <span className="FooterLink">GITHUB</span>
            <i className="fab fa-github FooterLinkLogo"></i>
          </a>
          <a href={CQ.SOCIAL.LINKEDIN} rel="noopener noreferrer" target="_blank">
            <span className="FooterLink">LINKEDIN</span>
            <i className="fab fa-linkedin FooterLinkLogo"></i>
          </a>
          <a href={"tel:" + CQ.SOCIAL.CONTACT} rel="noopener noreferrer" target="_blank">
            <span className="FooterLink">CONTACT</span>
            <i className="fas fa-phone-square FooterLinkLogo"></i>
          </a>
          <a
            href={CQ.SOCIAL.RESUME}
            rel="noopener noreferrer" target="_blank"
          >
            <span className="FooterLink">RESUME</span>
            <i className="far fa-file FooterLinkLogo"></i>
          </a>
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

export default Footer;
