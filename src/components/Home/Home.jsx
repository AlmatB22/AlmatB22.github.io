import React from 'react';
import './Home.css'

import almatImage from './../../assets/almat.jpg';
import {data} from './../Info/Experience/Experience';

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

            <div id='home-xp-mobile'>
                <h1 className='home-tag'>Work Experience</h1>
                {data.map((item, i) => (
                    <div className='home-xp-card' key={i}>
                        <p id='xp-title'>{item.title}</p>
                        <p id='xp-company'>{item.company}</p>
                        <p id='xp-date'>{item.date}</p>
                        <hr id='xp-divider'></hr>
                        <ul id='xp-description'>
                            {item.description.map((desc, j) => (
                                <li key={j}>{desc}</li>
                            ))}
                        </ul>   
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;