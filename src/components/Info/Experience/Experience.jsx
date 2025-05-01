import React, {useState} from "react";
import InfoHeader from "../InfoHeader/InfoHeader";
import './Experience.css';
import '../style.css';

import nextImage from './../../../assets/next.png';

export const data = [
    {
      "title": "Teaching Assistant",
      "company": "Thompson Rivers University",
      "date": "Jan 2025 - Apr 2025",
      "description": [
        "Helped students in Arduino labs with programming",
        "Gave feedback on assignments and improved student results.",
        "Worked closely with the instructor to support learning."
      ]
    },
    {
      "title": "Computer Vision Intern",
      "company": "Business and Technology Services",
      "date": "Jun 2024 - Aug 2024",
      "description": [
        "Trained computer vision models (YOLOv8)",
        "Labeled images and used segmentation tools",
        "Used OpenCV for data prep and improvement"
      ]
    },
    {
      "title": "Smart Meter Analyst Co-op",
      "company": "BC Hydro",
      "date": "Sep 2023 - Apr 2024",
      "description": [
        "Monitored 2M+ smart meters and fixed issues",
        "Used SQL and Power BI for data insights",
        "Built dashboards and automated tasks",
        "Worked with field teams to install devices"
      ]
    },
    {
      "title": "Research Assistant",
      "company": "Thompson Rivers University",
      "date": "Nov 2022 - Mar 2023",
      "description": [
        "Built web apps and APIs using Django",
        "Worked on biomedical data and ML models",
        "Created dashboards and presented research"
      ]
    }
];
  
const data_length = data.length;
function Experience({changePage}) {
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
            <InfoHeader header='Experience' changePage={changePage}/>
            <div className='info-player-container'>
                <div id='left' onClick={hanldeLeftClick}>
                    <img src={nextImage}></img>
                </div>
                <div id='player'>
                    <p id='xp-title'>{data[index].title}</p>
                    <div id='xp-line'>
                        <p id='xp-company'>{data[index].company}</p>
                        <p id='xp-date'>{data[index].date}</p>
                    </div>
                    <hr id='xp-divider'></hr>
                    <ul id='xp-description'>
                        {data[index].description.map((item, i) => (
                        <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div id='right' onClick={hanldeRightClick}>
                    <img src={nextImage}></img>
                </div>
            </div>
            <div className='page'>{index+1}/{data_length}</div>
        </div>  
    )
}

export default Experience;