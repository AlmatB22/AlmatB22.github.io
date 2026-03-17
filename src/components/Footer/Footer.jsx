import './Footer.css';
import Resume from '../../assets/Almat Resume SD.pdf';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-links">
          <a href="mailto:almat.bolatbekov2@gmail.com">Email</a>
          <a href="https://github.com/AlmatB22" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/almat-bolatbekov" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={Resume} target="_blank" rel="noreferrer">Resume</a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Almat Bolatbekov</p>
      </div>
    </footer>
  );
}

export default Footer;
