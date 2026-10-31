
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>Murari<span>.</span></h2>

        <p>
          Aspiring DevOps Engineer | Cloud Computing |
          Automation
        </p>

        <div className="footer-links">

          <a href="https://github.com/muraribollineni9908"
             target="_blank"
             rel="noreferrer">
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/muraribollineni"
             target="_blank"
             rel="noreferrer">
            LinkedIn
          </a>

          <a href="mailto:muraribollineni004@gmail.com">
            Email
          </a>

        </div>

        <p className="copyright">
          © 2026 Murari Bollineni. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;
