import { useScrollReveal } from '../../../hooks/useScrollReveal';
import './About.css';
import profilePhoto from '../../../assets/almat.jpg';

function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="section">
      <div className="about-inner reveal" ref={ref}>
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-bio">
            <p>I'm an Analytics Engineer with hands-on experience in SQL, dbt, Snowflake, and production analytics systems in utility-scale environments.</p>
            <p>My background spans software engineering, cloud infrastructure, and machine learning — with a growing focus on data modelling and ELT pipelines. I'm comfortable working across analytics, backend, and cloud layers to support data-driven decisions.</p>
            <p>I graduated from Thompson Rivers University with a Bachelor of Software Engineering (GPA 4.06/4.33, Dean's list every semester) and hold awards from EGBC, TELUS, and TRU's undergraduate research program.</p>
            <p>Outside of work I play soccer, watch movies, and explore the outdoors.</p>
          </div>
          <div className="about-photo-wrap">
            <img src={profilePhoto} alt="Almat Bolatbekov" className="about-photo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
