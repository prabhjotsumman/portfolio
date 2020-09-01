import React from "react";
import { useSpring, animated } from "react-spring";

import "../css/header/header.css";
import CQ from "../Constants/Constants";

function Header() {
  const topProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 700,
    config: { duration: 1000 },
  });

  const centerProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1200,
    config: { duration: 1000 },
  });

  const bottomProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1800,
    config: { duration: 1000 },
  });

  return (
    <div className="Header">
      <animated.div style={topProps}>
        <h1>
          {CQ.LABEL.GREETINGS_EN}
          <span className="wave" role="img" aria-label="hello">
            👋
          </span>
        </h1>
      </animated.div>
      <animated.div style={centerProps}>
        <h2>
          {CQ.LABEL.I_AM} <strong>{CQ.LABEL.NAME}</strong>,
          <br />
          <div className="content">
            <div className="content__container">
              <ul className="content__container__list">
                {CQ.LABEL.CONTENT_ITEMS.map((item, i) => (
                  <li key={i} className="content__container__list__item">{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <br />
          <div>

            <h3>{CQ.LABEL.TITLE}</h3>
          </div>
        </h2>
      </animated.div>
      <animated.div style={bottomProps}>
        <p>
          {CQ.LABEL.GET_IN_TOUCH}
          <span role="img" aria-label="mail to">
            👉
          </span>{" "}
          <a
            href={`mailto:${CQ.LABEL.EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {CQ.LABEL.EMAIL}
          </a>
        </p>
      </animated.div>
    </div>
  );
}

export default Header;
