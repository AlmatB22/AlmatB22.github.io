import React from 'react';
import InfoHeader from '../InfoHeader/InfoHeader';
import '../style.css';

function About ({changePage}) {
    return (
        <div id='about' className='info-container'>
            <InfoHeader header='About Me' changePage={changePage}/>
        </div>
    )
};

export default About;   