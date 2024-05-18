import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <h1 className="footer-title">CoffinS</h1>

        <ul className="footer-list">
          <li>
            <a href="#about" className="footer-link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer-link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer-social">
          <a
            href="https://www.instagram.com/jovananggata/"
            className="footer-social-link"
            target="_blank"
          >
            <i className="uil uil-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/jovan-kirsten-anggata-739358260/"
            className="footer-social-link"
            target="_blank"
          >
            <i className="uil uil-linkedin"></i>
          </a>

          <a
            href="https://github.com/Esotis"
            className="footer-social-link"
            target="_blank"
          >
            <i className="uil uil-github"></i>
          </a>
        </div>

        <span className="footer-copy">&#169; CoffinS. All rights reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
