import React from 'react';
import InfoHeader from '../InfoHeader/InfoHeader';
import "./About.css";
import '../style.css';

function About ({changePage}) {
    return (
        <div id='about-container' className='info-container'>
            <InfoHeader header='About Me' changePage={changePage}/>
            <div id='about'>
            <p>I'm a Software Engineering graduate from Thompson Rivers University who loves building useful and user-friendly software.</p>
            <p>My interest in technology started with a love for solving problems and creating things. Over time, I gained experience in full-stack development, computer vision, and working with data through internships, research, and school projects.</p>
            <p>I'm passionate about using technology to make a positive impact and I'm always eager to learn and grow in the field. I enjoy collaborating with others and sharing knowledge, and I'm excited to see where my journey in tech takes me next.</p>
            <p>In my free time, I love to play soccer, watch movies, and explore the outdoors. I'm also a big fan of anime and enjoy reading manga.</p>
            <p>Feel free to reach out if you want to connect or learn more about my work!</p>
            </div>
        </div>
    )
};

export default About;   