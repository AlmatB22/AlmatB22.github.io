import React from "react";
import InfoHeader from "../InfoHeader/InfoHeader";
import '../style.css';

function Projects({changePage}) {
    return ( 
        <div className='info-container'>
            <InfoHeader header='Projects' changePage={changePage}/>
            <div className='info-player-container'>
                <div id='left'>
                    <img src='src/assets/next.png'></img>
                </div>
                <div id='player'></div>
                <div id='right'>
                    <img src='src/assets/next.png'></img>
                </div>
            </div>
            <div className='page'>1/3</div>
        </div>
    )
}

export default Projects;