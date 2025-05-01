import React, {useState} from "react";
import InfoHeader from "../InfoHeader/InfoHeader";
import "./Projects.css";
import '../style.css';

const data = [
    {
        "title": 'Rock Classification System',
        'img': './src/assets/projects/prj1.png',
        'description': 'Built a full-stack web app with React and Flask for rock image classification. Trained a YOLOv8 model and used AWS/MongoDB for storing and managing data.',
        "link": 'https://github.com/AlmatB22/CapstoneProject',
    },
    {
        "title": 'E-commerce Web Application',
        'img': './src/assets/projects/prj2.png',
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
                    <img src='src/assets/next.png'></img>
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
                    <img src='src/assets/next.png'></img>
                </div>
            </div>
            <div className='page'>{index + 1}/{data_length}</div>
        </div>
    )
}

export default Projects;