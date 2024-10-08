import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/nathanoncodes" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/nathanoncodes/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p> Nathan Ferreira © 2024</p>
      <p>A portfolio template inspired by <a href="https://github.com/yujisatojr/react-portfolio-template">Yuji Sato</a></p>
      <h3>João 1:1-18</h3>
    </footer>
  );
}

export default Footer;