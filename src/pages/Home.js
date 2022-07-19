import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hey there! My name is MEET </h2>
        <div className="prompt">
          <p>
            I've been coding since last 2 years now. As a Front-End Developer
            developer I've worked both with startups and large corporations to
            help build & enhance my knowledge in this field. Learning multiple
            systems and efficient development technique.
          </p>
          <a
            href="https://www.linkedin.com/in/panchal-meet-179899239/"
            target="/blank"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=meetpanchal194@gmail.com&su=Your+Subject+here&body='+msgbody+'&ui=2&tf=1&pli=1"
            target="/blank"
          >
            <EmailIcon />
          </a>
          <a href="https://github.com/panchalmeet7" target="/blank">
            <GithubIcon />
          </a>
          <a href="https://twitter.com/panchalmeeet" target="/blank">
            <TwitterIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, BootStrap, MaterialUI, React router
              dom, StyledComponents, GIT, Framer Motion, React Slick, React
              Reveal.
            </span>
          </li>
          <li className="item">
            <h2> Languages</h2>
            <span>JavaScript, Python, C </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
