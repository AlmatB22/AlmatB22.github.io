import React from 'react';
import "./Navigation.css";

import Resume from './../../assets/Almat Resume SD.pdf';

function Navigation () {
    return (
        <div className='nav'>
          <p id='nav-name'>Almat Bolatbekov</p>
          <div id='nav-links-container'>
            <a href={Resume} target='_blank'>Resume</a>
            <a href="mailto:almat.bolatbekov2@gmail.com" target="_blank">Contact</a>
          </div>
        </div>
    )
};

export default Navigation;