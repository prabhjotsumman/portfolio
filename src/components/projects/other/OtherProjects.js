import React from "react";
import OtherProject from "./OtherProject";
import { useSpring, animated } from "react-spring";
import TrackVisibility from "react-on-screen";

import "../../../css/projects/projects.css";

function OtherProjects() {
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
      <div className="OtherProjects">
        <animated.div style={topProps}>
          <h1 className="Project-Header">OTHER PROJECTS</h1>
        </animated.div>
        <animated.div style={bottomProps} className="OtherProjects-Container">
          <OtherProject
            name="Dollar Tracker"
            link="https://your-dollar-tracker.herokuapp.com/"
            info="An expense calculating application built with React for the front and MongoDB for the backend. React Context was used to manage the application states."
            stacks={[
              "React",
              "Context",
              "Node",
              "Express",
              "MongoDB",
              "Mongoose",
            ]}
          />
          <OtherProject
            name="Plenty of Dogs"
            link="https://gimorhee.github.io/PlentyofDogs/"
            info="Plenty of Dogs is a online dating service application for dogs, mimicking Plenty of Fish, a real-life online dating application."
            stacks={["HTML", "CSS", "JavaScript", "Bootstrap"]}
          />
          <OtherProject
            name="LetsChat"
            link="https://react-lets-chat.netlify.com/"
            info="A real-time chat application built with React, Node, Socket.io where users may create rooms and chat with others online"
            stacks={["React", "Node", "Socket.io", "Netlify", "Heroku"]}
          />
          <OtherProject
            name="Personal Website v1"
            link="https://gimorhee.github.io/portfolio-v1/"
            info="My first real portfolio website built in 2019. By working on this portfolio, I learned about HTML, CSS and JavaScript. Since then, my developing skills have improved continuously."
            stacks={["HTML", "SCSS", "JavaScript", "jQuery"]}
          />
          <OtherProject
            name="Tweeter"
            link="https://whispering-ravine-57540.herokuapp.com/"
            info="Tweeter is a single-page Full-stack Twitter clone application where users can compose their tweets under randomized name."
            stacks={[
              "JavaScript",
              "jQuery",
              "AJAX",
              "Node",
              "MongoDB",
              "Heroku",
            ]}
          />
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
          {/* <OtherProject
            name="Simon Game"
            link="https://gimorhee.github.io/SimonGame/"
            info="Built a Web version of Simon, an electronic game of memory skill. It creates a random series of tones and color-lights and requrie a user to repeat the sequence."
            stacks={["HTML", "CSS", "JavaScript", "jQuery"]}
          />
          <OtherProject
            name="Drum It"
            link="https://gimorhee.github.io/DrumIt/"
            info="Mini playable Drum set built when I started learning about Vanilla JavaScript. From this project, I learned quite a lot on Vanilla JS and led me to learn jQuery."
            stacks={["HTML", "CSS", "JavaScript", "Vanilla JS"]}
          />
          <OtherProject
            name="Rock Paper Scissors"
            link="https://gimorhee.github.io/RockPaperScissors/"
            info="Simple mini Rock Paper Scissors being played against a Computer who randomly forms one of three shapes."
            stacks={["HTML", "CSS", "JavaScript", "jQuery"]}
          /> */}
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

export default OtherProjects;
