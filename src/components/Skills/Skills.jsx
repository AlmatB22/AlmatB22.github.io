import { useScrollReveal } from '../../hooks/useScrollReveal';
import { skillsData } from '../../data/skills';
import './Skills.css';

function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="section">
      <div className="reveal" ref={ref}>
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillsData.map((skill) => (
            <span key={skill} className="skill-chip">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
