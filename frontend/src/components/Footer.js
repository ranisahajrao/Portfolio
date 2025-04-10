import './Footer.css';
import reactIcon from '../assets/react-icon.svg';
import linkedin from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';
import whatsapp from '../assets/whatsapp.svg';
import instagramIcon from '../assets/instagram.svg';

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/pradnya-sahajrao-725989184/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/ranisahajrao"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=+918262939843&text=Hello+Pradnya,+I+found+your+contact+through+your+portfolio+site.%0A%0A"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://www.instagram.com/_pradnya_rao/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </footer>
  );
}
