import React from 'react';
import "./Navigation.css"

function Navigation () {
    return (
        <div className='nav'>
          <p id='nav-name'>Almat Bolatbekov</p>
          <div id='nav-links-container'>
            <p>Resume</p>
            <p>Contact</p>
          </div>
        </div>
    )
};

export default Navigation;