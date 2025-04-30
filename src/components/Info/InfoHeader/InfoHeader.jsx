import React from 'react';
import './InfoHeader.css';

function InfoHeader({header, changePage}) {


    return (
        <div id='info-header-container'>
            <p>{header}</p>
            <div id='app-cancel' onClick={() => changePage('home')}>
                <img src='src/assets/cancel.png' />
            </div>
        </div>
    )
}

export default InfoHeader;