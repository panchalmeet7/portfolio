import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/panchalmeet7/" target="/blank">
          <InstagramIcon />
        </a>

        <a href="https://twitter.com/panchalmeeet" target="/blank">
          <TwitterIcon />
        </a>

        <a
          href="https://www.linkedin.com/in/panchal-meet-179899239/"
          target="/blank"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2022 Inc. All rights reserved.</p>
    </div>
  );
}

export default Footer;
