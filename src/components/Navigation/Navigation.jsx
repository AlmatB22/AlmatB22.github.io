import React from 'react';
import "./Navigation.css"

function Navigation () {
    return (
        <div className='nav'>
          <p id='nav-name'>Almat Bolatbekov</p>
          <div id='nav-links-container'>
            <a href='src/assets/Almat Resume SD.pdf' target='_blank'>Resume</a>
            <a href="mailto:almat.bolatbekov2@gmail.com" target="_blank">Contact</a>
          </div>
        </div>
    )
};

export default Navigation;