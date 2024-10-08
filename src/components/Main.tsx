import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import AvatarProfile from '../assets/images/avatar_circle.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={AvatarProfile} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/nathanoncodes" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/nathanoncodes/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Nathan Ferreira</h1>
          <p>Desenvolvedor Full-stack com foco em back-end</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/nathanoncodes" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/nathanoncodes/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;