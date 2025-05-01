import React, {useState} from "react";
import InfoHeader from "../InfoHeader/InfoHeader";
import "./Projects.css";
import '../style.css';

import nextImage from './../../../assets/next.png';
import prj1 from '../../../assets/projects/prj1.png';
import prj2 from '../../../assets/projects/prj2.png';


const data = [
    {
        "title": 'Rock Classification System',
        'img': prj1,
        'description': 'Built a full-stack web app with React and Flask for rock image classification. Trained a YOLOv8 model and used AWS/MongoDB for storing and managing data.',
        "link": 'https://github.com/AlmatB22/CapstoneProject',
    },
    {
        "title": 'E-commerce Web Application',
        'img': prj2,
        'description': 'Created an e-commerce site using the MERN stack for buying electronics. Added APIs, user login, and payment system for full functionality.',
        'link': 'https://github.com/Cooper-hub/seng4640_project'
    },
];

const data_length = data.length;

function Projects({changePage}) {
    const [index, setIndex] = useState(0);
    const hanldeLeftClick = () => {
        if (index === 0) {
            setIndex(data_length - 1);
        }
        else {
            setIndex(index - 1);
        }
    };
    const hanldeRightClick = () => {
        if (index === data_length - 1) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
    };
    return ( 
        <div className='info-container'>
            <InfoHeader header='Projects' changePage={changePage}/>
            <div className='info-player-container'>
                <div id='left' onClick={hanldeLeftClick}>
                    <img src={nextImage}></img>
                </div>
                <div id='player'>
                    <p id='prj-title'>{data[index].title}</p>
                    <div id='prj-content'>
                        <div id='prj-img-container'>
                            <img id='prj-img' src={data[index].img}></img>
                        </div>
                        <p id='prj-description'>{data[index].description}</p>
                    </div>
                    <a id='prj-readmore' href={data[index].link} target='_blank'>Read More</a>
                </div>
                <div id='right' onClick={hanldeRightClick}>
                    <img src={nextImage}></img>
                </div>
            </div>
            <div className='page'>{index + 1}/{data_length}</div>
        </div>
    )
}

export default Projects;