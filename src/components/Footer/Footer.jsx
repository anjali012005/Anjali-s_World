import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2 className="footer-name">Anjali Daharwal</h2>

        <div className="footer-socials">
          <a href="https://github.com/anjali012005/" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/anjali-daharwal-235844265" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:anjalidaharwal5@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="footer-links">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>

      <p className="footer-bottom">
        © {new Date().getFullYear()} Anjali Daharwal • All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
