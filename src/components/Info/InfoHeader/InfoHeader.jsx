import React from 'react';
import './InfoHeader.css';

import cancelImage from './../../../assets/cancel.png';

function InfoHeader({header, changePage}) {


    return (
        <div id='info-header-container'>
            <p>{header}</p>
            <div id='app-cancel' onClick={() => changePage('home')}>
                <img src={cancelImage} />
            </div>
        </div>
    )
}

export default InfoHeader;