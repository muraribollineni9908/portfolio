
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="greeting">HELLO, I'M</p>

        <h1>
          Murari <span>Bollineni</span>
        </h1>

        <h2>DevOps Engineer</h2>

        <p className="hero-description">
          I am passionate about DevOps, cloud computing
          and automation. I enjoy working with Linux,
          Git, Docker, Jenkins, Kubernetes and AWS
          to build, deploy and manage applications.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>

        </div>

      </div>

      <div className="hero-image">
        <div className="image-placeholder">
          Your Photo
        </div>
      </div>

    </section>
  );
}

export default Hero;
