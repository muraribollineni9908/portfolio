
import './Projects.css';

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="projects-heading">
        <p>MY RECENT WORK</p>
        <h2>My <span>Projects</span></h2>
      </div>

      <div className="projects-container">

        {/* Project 1 */}
        <div className="project-card">

          <div className="project-number">01</div>

          <h3>Docker Application Deployment</h3>

          <p>
            Containerized a web application using Docker.
            Created a Dockerfile, built Docker images
            and deployed the application inside containers.
          </p>

          <div className="project-tech">
            <span>Docker</span>
            <span>Linux</span>
            <span>Git</span>
          </div>

          <a href="#" className="project-link">
            GitHub Repository →
          </a>

        </div>

        {/* Project 2 */}
        <div className="project-card">

          <div className="project-number">02</div>

          <h3>Jenkins CI/CD Pipeline</h3>

          <p>
            Created a Jenkins pipeline to automate
            application build and deployment processes.
            Used GitHub to manage source code.
          </p>

          <div className="project-tech">
            <span>Jenkins</span>
            <span>GitHub</span>
            <span>AWS</span>
          </div>

          <a href="#" className="project-link">
            GitHub Repository →
          </a>

        </div>

        {/* Project 3 */}
        <div className="project-card">

          <div className="project-number">03</div>

          <h3>Infrastructure Automation</h3>

          <p>
            Used Terraform to provision cloud
            infrastructure and Ansible to automate
            server configuration and software installation.
          </p>

          <div className="project-tech">
            <span>Terraform</span>
            <span>Ansible</span>
            <span>AWS</span>
          </div>

          <a href="#" className="project-link">
            GitHub Repository →
          </a>

        </div>

      </div>

    </section>
  );
}

export default Projects;
