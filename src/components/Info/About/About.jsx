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
            <p>I'm a software engineering graduate working in IT at BC Hydro, where I sit between business users and technical teams. I redesigned a manual quarterly access review into an automated workflow that cut processing time by 80%, and wrote SOPs that the support team adopted.</p>
            <p>I define requirements and test solutions against them, from changes to AMS field tools to an AI job-fit tool validated against a 14-case answer key. As co-founder of a food-rescue marketplace, I write product requirements and specifications and evaluate vendors.</p>
            <p>I use SQL, Python and Power BI to analyze problems, and I explain the solutions clearly to non-technical stakeholders.</p>
            <p className="about-open">Open to Business Analyst, Business Systems Analyst and Data Analyst roles in Metro Vancouver or remote in Canada.</p>
            <p>Outside of work I play soccer, watch movies, and explore the outdoors.</p>
            <div className="about-education">
              <p className="about-education-title">Bachelor of Software Engineering, Thompson Rivers University</p>
              <p>Kamloops, BC · Sep 2020 – May 2025</p>
              <p>GPA 4.06/4.33, Dean's List every semester; Teaching Assistant for Engineering Design II</p>
              <p>Awards: TELUS Excellence in Science (2025), Engineers &amp; Geoscientists BC (2022), Undergraduate Research Apprenticeship ×2 (2022, 2023)</p>
            </div>
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
