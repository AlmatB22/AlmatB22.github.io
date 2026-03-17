import prj1 from '../assets/projects/prj1.png';
import prj2 from '../assets/projects/prj2.png';

export const projectsData = [
  {
    title: "Airbnb Analytics",
    img: prj1,
    description:
      "Built a layered Snowflake warehouse (staging, intermediate, marts) using dbt on raw Airbnb data. Implemented SCD Type 2 snapshots, automated data quality tests, and modular SQL models with Jinja for currency normalization and derived metrics.",
    tags: ["dbt", "Snowflake", "SQL", "Jinja", "SCD Type 2", "Data Modeling"],
    link: "https://github.com/AlmatB22",
  },
  {
    title: "Rock Classification System",
    img: prj2,
    description:
      "Built a full-stack web app with React and Flask for rock image classification. Trained a YOLOv8 model and used AWS/MongoDB for storing and managing data.",
    tags: ["React", "Flask", "YOLOv8", "AWS", "MongoDB"],
    link: "https://github.com/AlmatB22/CapstoneProject",
  },
];
