import React from "react";
import OtherProject from "./OtherProject";
import { useSpring, animated } from "react-spring";
import TrackVisibility from "react-on-screen";

function SchoolProjects() {
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
      <div className="SchoolProjects">
        <div className="OtherProjects">
          <animated.div style={topProps} className="Project-Header-Cotainer">
            <h1 className="Project-Header">SCHOOL PROJECTS</h1>
            <p className="Project-Note">
              Note: These projects were horribly coded 🤣 but hey! everyone has
              a learning process, right? 🤓
            </p>
          </animated.div>
          <animated.div style={bottomProps} className="OtherProjects-Container">
            <OtherProject
              name="Cards Against the Internet"
              link="https://github.com/Gimorhee/Cards-Against-the-Internet"
              info="A clone web application of a card game, Cards against Humanity built as a Final project with 2 other teammates. In this project, I heavily worked on the Frontend side and a little bit of Backend."
              stacks={[
                "React",
                "Bootstrap",
                "Ruby on Rails",
                "Actioncable",
                "Postgres",
              ]}
            />
            <OtherProject
              name="Jungle in Rails"
              link="https://github.com/Gimorhee/jungle-rails"
              info="Mini eCommerce application built with Ruby on Rails. Jungle was built with users in mind from the main catalog to each products detail pages."
              stacks={["Ruby", "Ruby on Rails", "Stripe"]}
            />
            {/* <OtherProject
              name="Chatty App"
              link="https://github.com/Gimorhee/Chatty-App"
              info="A single page, real-time chat application which allows users to communicate each other without having to register accounts."
              stacks={["React", "Websocket", "Node", "Express"]}
            /> */}
            {/* <OtherProject
              name="Pizza Guys"
              link="https://github.com/Gimorhee/Pizza-Guys"
              info="My first group project built for midterm. Pizza guys is a food pick-up ordering web app which allows the customers to place an order and pick up in store."
              stacks={[
                "HTML",
                "CSS",
                "JavaScript",
                "EJS",
                "Node",
                "Knex",
                "Twilio",
              ]}
            /> */}
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

export default SchoolProjects;
