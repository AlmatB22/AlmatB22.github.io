import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { projectsData } from '../../../data/projects';
import './Projects.css';

function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="section">
      <div className="reveal" ref={ref}>
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.title} className="project-card">
              {project.img && (
                <div className="project-img-wrap">
                  <img src={project.img} alt={project.title} className="project-img" />
                </div>
              )}
              <div className="project-body">
                <p className="project-category">{project.category}</p>
                <p className="project-title">{project.title}</p>
                <p className="project-meta">{project.role} · {project.date}</p>
                <ul className="project-description">
                  {project.bullets.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="project-link">
                      {link.label} →
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
