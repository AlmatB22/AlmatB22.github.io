import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { experienceData } from '../../../data/experience';
import './Experience.css';

function TimelineItem({ entry }) {
  const ref = useScrollReveal();

  return (
    <div className="timeline-item reveal" ref={ref}>
      <div className="timeline-dot" />
      <div className="timeline-card">
        <div className="timeline-header">
          <p className="timeline-title">{entry.title}</p>
          <p className="timeline-date">{entry.date}</p>
        </div>
        <p className="timeline-company">{entry.company}</p>
        <ul className="timeline-description">
          {entry.description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experienceData.map((entry, i) => (
          <TimelineItem key={i} entry={entry} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
