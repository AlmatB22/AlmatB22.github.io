import prj1 from '../assets/projects/prj1.png';

export const projectsData = [
  {
    title: "Job Search Agent",
    role: "Personal project",
    date: "Oct 2026",
    category: "Requirements & Validation",
    bullets: [
      "Defined requirements and a written scoring rubric for a tool that checks job postings against my resumes and drafts resume bullets that cite their sources",
      "Validated it against a 14-posting answer key, each run three times, with a check that drops any uncited claim and a human approval step before results are saved",
      "Logs the cost and latency of every model call: about $0.034 and 14 seconds per posting",
    ],
    tags: ["Requirements", "Testing", "Python", "SQLite", "Claude API"],
    links: [{ label: "GitHub", href: "https://github.com/AlmatB22/job-search-agent" }],
  },
  {
    title: "ULES Food-Rescue Marketplace",
    role: "Co-founder",
    date: "Feb 2026 – Present",
    category: "Product & Process",
    bullets: [
      "Define product requirements for consumer and merchant mobile apps for the Kazakhstan market",
      "Wrote the order process and order cancellation specifications (reviewed and revised to v1.3) and a partner approval SOP",
      "Evaluated and compared geocoding and payment providers, and integrated a one-time-password login API",
      "Ran a pre-release audit of both apps, tracking 26 findings as fixed, deferred or open",
    ],
    tags: ["Product Requirements", "Specifications", "Vendor Evaluation", "Supabase", "React Native"],
    links: [{ label: "Website", href: "https://ules.business" }],
  },
  {
    title: "Airbnb Analytics Warehouse",
    role: "Data project",
    date: "Feb 2026",
    category: "Data Modeling",
    bullets: [
      "Built an ELT pipeline loading raw Airbnb listings, hosts and reviews into a layered Snowflake warehouse (staging, intermediate, marts) with dbt",
      "Tracked history with SCD Type 2 snapshots and validated every transformation with built-in, custom generic, singular and unit tests plus source freshness checks",
      "Marts feed an executive dashboard in Preset (Apache Superset)",
    ],
    tags: ["dbt", "Snowflake", "SQL", "SCD Type 2", "Data Quality"],
    links: [{ label: "GitHub", href: "https://github.com/AlmatB22/Airbnb_Analytics" }],
  },
  {
    title: "Chinook Analytics",
    role: "Data project",
    date: "Jan 2026",
    category: "Dimensional Modeling",
    bullets: [
      "Modeled the Chinook music-store database with dbt on PostgreSQL",
      "Cleaned raw tables in staging, joined them in an intermediate layer, and built fact and dimension tables in the marts",
    ],
    tags: ["dbt", "PostgreSQL", "SQL", "Star Schema"],
    links: [{ label: "GitHub", href: "https://github.com/AlmatB22/Chinook_Analytics" }],
  },
  {
    title: "Volunteer Management System Requirements",
    role: "Thompson Rivers University, team of 3",
    date: "Fall 2022",
    category: "Business Analysis",
    bullets: [
      "Wrote the full requirements set for a volunteer management system: a Vision and Scope document (v1.3), a User Requirements document (v1.0) and a Software Requirements Specification (v3.0)",
      "Covered business objectives and success criteria, risks, user classes, data requirements and system features, using Karl Wiegers' templates",
    ],
    tags: ["Vision & Scope", "User Requirements", "SRS", "User Classes"],
    links: [
      { label: "Vision & Scope", href: "https://github.com/AlmatB22/Vision-and-Scope-Document" },
      { label: "URD", href: "https://github.com/AlmatB22/User-Requirements-Document" },
      { label: "SRS", href: "https://github.com/AlmatB22/SRS-Document" },
    ],
  },
  {
    title: "Automated Rock Size Classification",
    role: "Capstone project",
    date: "Sep 2024 – Mar 2025",
    category: "Computer Vision",
    img: prj1,
    bullets: [
      "Co-developed a web app for mining that sorts rock fragments into four size classes from uploaded or webcam images",
      "Trained a YOLOv11 model that reached 0.978 mAP@0.5 with under 1.5 seconds average processing time, served through a Flask API with results in MongoDB and images in AWS S3",
    ],
    tags: ["YOLOv11", "Flask", "MongoDB", "AWS S3"],
    links: [{ label: "GitHub", href: "https://github.com/AlmatB22/CapstoneProject" }],
  },
];
