import React from 'react';
import './Home.css'

import almatImage from './../../assets/almat.jpg';

function Home ({changePage}) {
    const handleClick = (page) => {
        changePage(page);
    }
    return (
        <div id='home'>
            <div id='home-img'><img src={almatImage}/></div>
            <div id='home-greeting'>
                <h1>Hi, I'm Almat!</h1>
                <p>I'm a Software Engineering graduate passionate about building impactful solutions in software development, machine learning, and data analytics.</p>
            </div>

            <div className='home-card' onClick={() => handleClick('about')}>About Me</div>
            <div className='home-card' onClick={() => handleClick('experience')}>Work Experience</div>
            <div className='home-card' onClick={() => handleClick('project')}>Projects</div>
        </div>
    )
}

export default Home;