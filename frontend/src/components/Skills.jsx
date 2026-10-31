
import './Skills.css';

function Skills() {
  return (
    <section className="skills" id="skills">

      <div className="skills-heading">
        <p>MY TECHNICAL EXPERTISE</p>
        <h2>Technical <span>Skills</span></h2>
      </div>

      <div className="skills-container">

        <div className="skill-card">
          <h3>Operating Systems</h3>
          <ul>
            <li>Linux</li>
            <li>Ubuntu</li>
            <li>Windows</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Version Control</h3>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>CI/CD & Containers</h3>
          <ul>
            <li>Jenkins</li>
            <li>Docker</li>
            <li>Kubernetes</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Cloud & Infrastructure</h3>
          <ul>
            <li>AWS</li>
            <li>Terraform</li>
            <li>Ansible</li>
          </ul>
        </div>

      </div>

    </section>
  );
}

export default Skills;
