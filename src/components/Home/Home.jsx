import React from 'react';
import './Home.css'

function Home ({changePage}) {
    const handleClick = (page) => {
        changePage(page);
    }
    return (
        <div id='home'>
            <div id='home-img'><img src='https://media.discordapp.net/attachments/1327069432500981771/1329860896700366948/picture.jpg?ex=68110879&is=680fb6f9&hm=26a8ee53a4add713cefa5017af30a14e30ecd36202f3df7bb4cdb4ccd343e05c&=&format=webp&width=1310&height=1310' /></div>
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