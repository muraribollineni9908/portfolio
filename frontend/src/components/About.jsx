
import './About.css';

function About() {
  return (
    <section className="about" id="about">

      <div className="about-heading">
        <p>GET TO KNOW ME</p>
        <h2>About <span>Me</span></h2>
      </div>

      <div className="about-container">

        <div className="about-content">

          <h3>I'm a DevOps Enthusiast</h3>

          <p>
            I am a Computer Science graduate with a strong
            interest in DevOps, Cloud Computing and
            Automation.
          </p>

          <p>
            I enjoy learning how applications are developed,
            deployed and maintained. I am exploring tools
            such as Linux, Git, Docker, Jenkins, Kubernetes
            and AWS.
          </p>

          <p>
            My goal is to build reliable deployment
            workflows, automate processes and grow as
            a DevOps Engineer.
          </p>

        </div>

        <div className="about-details">

          <div className="detail-card">
            <h3>Education</h3>
            <p>B.Tech - Computer Science</p>
          </div>

          <div className="detail-card">
            <h3>Career Interest</h3>
            <p>DevOps Engineering</p>
          </div>

          <div className="detail-card">
            <h3>Focus Areas</h3>
            <p>Cloud, Automation & CI/CD</p>
          </div>

          <div className="detail-card">
            <h3>Currently Learning</h3>
            <p>Docker, Jenkins & Kubernetes</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
