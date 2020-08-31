import React from "react";
import { useSpring, animated } from "react-spring";

import "../css/header/header.css";

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
    <div class="Header">
      <animated.div style={topProps}>
        <h1>
          Hello! <span className="wave">👋</span>
        </h1>
      </animated.div>
      <animated.div style={centerProps}>
        <h2>
          I'm <strong>Danny Rhee</strong>,
          <br />
          <div className="content">
            <div className="content__container">
              <ul className="content__container__list">
                <li className="content__container__list__item">
                  Web Developer,
                </li>
                <li className="content__container__list__item">
                  Frontend Developer,
                </li>
                <li className="content__container__list__item">
                  UI Developer,
                </li>
                <li className="content__container__list__item">
                  Fullstack Developer,
                </li>
              </ul>
            </div>
          </div>
          <br />
          <h3>
            {" "}
            who is design-minded and focused on building user-friendly,
            responsive and beautiful interfaces & experiences
          </h3>
        </h2>
      </animated.div>
      <animated.div style={bottomProps}>
        <p>
          Get in touch 👉{" "}
          <a href="malto:dongyunrhee@gmail.com" target="_blank">
            dongyunrhee@gmail.com
          </a>
        </p>
      </animated.div>
    </div>
  );
}

export default Header;
