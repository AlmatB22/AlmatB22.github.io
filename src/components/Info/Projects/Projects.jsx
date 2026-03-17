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
          {projectsData.map((project, i) => (
            <div key={i} className="project-card">
              <div className="project-img-wrap">
                <img src={project.img} alt={project.title} className="project-img" />
              </div>
              <div className="project-body">
                <p className="project-title">{project.title}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                  GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
