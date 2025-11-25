export const siteConfig = {
  name: "Ellen Martin",
  title: "MS Data Science Student, MRes Developmental Neuroscience and Psychopathology, BSc Psychology",
  description: "Portfolio website of Ellen Martin",
  accentColor: "#B3DEC1",
  social: {
    email: "martin.ellenjane@gmail.com",
    linkedin: "https://linkedin.com/in/martinellenjane",
    github: "https://github.com/ellenmartin11",
  },
  aboutMe:
    "I am a current MS Data Science student at the University of New Haven. I previously worked as a Resesarch Technician at the Yale University Rutledge Lab, a cognitive computational psychiatry lab. I am interested in combining my background in neuroscience and psychology with current approaches in data science to improve mental health research and inform clinical practice, particularly as we consider the role AI may play in future mental health care. In addition to technical data science skills, such as R, Python, MATLAB and SQL, I have experience working with clinical and vulnerable populations, and a wide variety of client populations.",
  skills: ["R", "Python", "MATLAB", "REDCap", "SQL", "AWS", "Git", "SPSS", "Publication"],
  projects: [
    {
      name: "Urban Crash Risk Radar",
      description:
        "A web application that allows users to view the predicted risk of car crashes in a given city. The risk score is calculated using an XGBoost machine learning model trained on 8 years of national crash data.",
      link: "https://crash-risk-radar-2025.s3.us-east-1.amazonaws.com/index.html",
      skills: ["Python", "Machine Learning", "Web Development", "Data Visualization", "AWS", "Git"],
      codeLink: "https://github.com/vibhutirohan/Urban-Crash-Risk-Radar/tree/Ellen-branch",
    },
    {
      name: "Anxiety alters mood sensitivity to outcomes during risky decision-making",
      description:
        "Research project presented at the Computational Psychiatry Conference (2024) in collaboration with the Yale University Rutledge Lab",
      link: "/portfolio/Poster Presentation Lab Meeting.pdf",
      skills: ["Matlab", "R", "Computational Modeling"],
      codeLink: "https://ellenmartin11.github.io/anxiety_decision_making/",
    },
    {
      name: "Simulating Rodent Learning Using Reinforcement Learning Models",
      description:
        "Project submitted for the course DCSI 6612: Introduction to Artificial Intelligence, modelling rodent learning using reinforcement learning models.",
      link: "https://github.com/ellenmartin11/simulating_mouse_learning_RL",
      skills: ["Python", "RL", "Computational Modeling", "Artificial Intelligence", "Q-Learning"],
      codeLink: "https://github.com/ellenmartin11/simulating_mouse_learning_RL",
    },
    {
      name: "Language Conceptualizations of Depression",
      description:
        "Exploratory research at the Yale Rutledge Lab examining how open-ended text responses to depression questions compare to standardized numerical surveys.",
      link: "https://ellen-martin.notion.site/Ellen-Martin-s-Portfolio-Website-18128be36b4080c2a1c6ec9fcef621e4?p=3ee00163462a4fac96ac5602efcd02a3&pm=c",
      skills: ["Matlab", "R", "Python", "NLP", "Dimension Reduction"],
      codeLink: "",
    },
  ],
  publications: [
    {
      title: "Substance Misuse, Executive Function, and Young Adult Intimate Partner Violence: Direct and Indirect Pathways",
      authors: "Martin, E. J., Ramos, K. N. L., Modanesi, E., Mayes, L.C., & Stover, C.S. ",
      journal: "Journal of Interpersonal Violence",
      year: "2025",
      description:
        "Yale and UCL Masters thesis and published research examining the pathways that contribute to interpersonal violence between young adult dating couples.",
      link: "https://journals.sagepub.com/doi/abs/10.1177/08862605251326641",
      skills: ["R", "Jamovi", "Publication"],
      codeLink: "https://github.com/ellenmartin11/prenatal-cocaine-exposure-and-dating-violence",
    },
    {
      title: "Understanding the relationship between loneliness, substance use traits and psychiatric disorders: A genetically informed approach",
      authors: "Martin, E., Schoeler, T., Pingault, J.B., & Barkhuizen, W.",
      journal: "Psychiatry Research",
      year: "2023",
      description:
        "Undergraduate final year dissertation and publication from UCL. Implemented Genomic Structural Equation Modelling to examine the complexity of relationships between loneliness and mental health traits.",
      link: "https://www.sciencedirect.com/science/article/pii/S0165178123001695",
      skills: ["R", "GWAS", "GenomicSEM", "Publication", "Causal Inference"],
      codeLink: "https://github.com/ellenmartin11/lone-GenSEM-MR",
    },
    {
      title: "Assessing rates and predictors of cannabis-associated psychotic symptoms across observational, experimental and medical research.",
      authors: "Schoeler, T., Baldwin, J., Martin, E., Barkhuizen, W., & Pingault, J.B.",
      journal: "Nature Mental Health",
      year: "2025",
      description:
        "Assisted with verifying inclusion of studies for meta-analysis.",
      link: "https://www.nature.com/articles/s44220-024-00261-x",
      skills: ["Excel", "Meta-analysis"],
      codeLink: "",
    },
    {
      title: "Comparing in person to telehealth delivery of a family violence intervention.",
      authors: "Stover, C.S., Holland, M. L., Martin, E., Modanesi, E., Fish, M. C., & Beebe, R.",
      journal: "Clinical Psychology and Psychotherapy",
      year: "2024",
      description:
        "Conducted literature review and contributed to the introduction and discussion sections of the paper.",
      link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/cpp.3034",
      skills: ["Publication", "Literature Review"],
      codeLink: "",
    },
  ],
  experience: [
    {
      company: "IRIS New Haven",
      title: "Resettlement and Employment Volunteer ",
      dateRange: "July 2025 - Present",
      bullets: [
        "Assisting with database management and analyzing client demographics and outcomes",
        "Assisting clients with seeking and obtaining employment",
      ],
    },
    {
      company: "Yale University",
      title: "Postgraduate Research Technician",
      dateRange: "Jun 2023 - December 2024",
      bullets: [
        "Assisted with the collection of behavioral, neuroimaging and smartphone data, in addition to processing and analyzing data",
        "Designed surveys and tasks for a 12-month longitudinal follow-up",
        "Developed pipelines for cleaning and preprocessing data from the online Gorilla experiment platform",
        "Improved database systems for tracking participation and payments across multiple study arms",
        "Collaborated with a team of engineers and developers to improve app experience and data collection",
      ],
    },
    {
      company: "Yale University",
      title: "Research Assistant",
      dateRange: "Aug 2022 - Jun 2023",
      bullets: [
        "Conducted interviews with participants in the Fathers For Change intervention",
        "Collaborated on data analysis and publications",
        "Analyzed data spanning 30 years to examine pathways contributing to intimate partner violence",
        "Developed an AWS s3 Bucket and Python pipeline for accessing biobehavioral data collected on smart-watches",
      ],
    },
    {
      company: "Crescendo",
      title: "Psychology Assistant",
      dateRange: "Dec 2019 - Aug 2022",
      bullets: [
        "Worked 1:1 with children facing neurodevelopmental challenges",
        "Implemented a literacy program to improve children's reading abilities",
        "Participated in clinical note-taking and clinical supervision",
      ],
    },
  ],
  education: [
    {
      school: "University of New Haven",
      degree: "Master of Science in Data Science",
      dateRange: "2025 - Present",
      achievements: [
        "Dean's Scholar",
      ],
    },
    {
      school: "University College London",
      degree: "Master of Research in Developmental Neuroscience and Psychopathology",
      dateRange: "2021 - 2023",
      achievements: [
        "Graduated with Honors",
        "Final thesis published in the Journal of Interpersonal Violence",
      ],
    },
    {
      school: "University College London",
      degree: "Bachelor of Science in Psychology",
      dateRange: "2018 - 2021",
      achievements: [
        "Dean's List, First Class Graduate",
        "Nominated for the Undergraduate Project Prize (for outstanding research)",
        "Final thesis published in the Journal of Psychiatry Research",
      ],
    },
  ],
  cv: {
    link: "/portfolio/cv.pdf",
    description: "View and download my complete resume in PDF format.",
  },
  logos: [
    {
      name: "UCL & Anna Freud",
      src: "/portfolio/logos/ucl-anna-freud.png",
    },
    {
      name: "University of New Haven",
      src: "/portfolio/logos/unh.png",
    },
    {
      name: "Yale Child Study Center",
      src: "/portfolio/logos/yale-child-study.png",
    },
    {
      name: "Yale University",
      src: "/portfolio/logos/yale.png",
    },
  ],
};
