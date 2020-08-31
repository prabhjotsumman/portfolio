import React from "react";
import { useSpring, animated } from "react-spring";
import TrackVisibility from "react-on-screen";

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
          <h1>Created & Developed by Danny Rhee 👍 2020</h1>
        </animated.div>
        <animated.div style={bottomProps} className="FooterLinks">
          <a href="malto:dongyunrhee@gmail.com" target="_blank">
            <span className="FooterLink">EMAIL</span>
            <i className="far fa-envelope FooterLinkLogo"></i>
          </a>
          <a href="https://github.com/Gimorhee" target="_blank">
            <span className="FooterLink">GITHUB</span>
            <i className="fab fa-github FooterLinkLogo"></i>
          </a>
          <a href="https://www.linkedin.com/in/drhee-dev/" target="_blank">
            <span className="FooterLink">LINKEDIN</span>
            <i className="fab fa-linkedin FooterLinkLogo"></i>
          </a>
          <a href="tel:604-788-7787" target="_blank">
            <span className="FooterLink">CONTACT</span>
            <i className="fas fa-phone-square FooterLinkLogo"></i>
          </a>
          <a
            href="https://resume.creddle.io/resume/2x8ao7cjdbn"
            target="_blank"
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
