export const siteConfig = {
  name: "Ellen Martin",
  title: "MS Data Science Student",
  description: "Portfolio website of Ellen Martin",
  accentColor: "#1d4ed8",
  social: {
    email: "martin.ellenjane@gmail.com",
    linkedin: "https://linkedin.com/in/martinellenjane",
    github: "https://github.com/ellenmartin11",
  },
  aboutMe:
    "I am a current MS Data Science student at the University of New Haven. I previously worked as a Resesarch Technician at the Yale University Rutledge Lab, a cognitive computational psychiatry lab. With a background in neuroscience and psychology, I am passionate about using rich datasets to improve mental health research and inform clinical practice, particularly as we consider integrating AI into mental health care. In addition to technical data science skills, such as R, Python and Matlab, I have experience working with clinical and vulnerable populations.",
  skills: ["R", "Python", "Matlab", "REDCap", "SQL", "AWS","Git","Publication"],
  projects: [
    {
      name: "IRIS Move Ahead Project 5-Year Report",
      description:
        "Analysis of five-years worth of data to examine the effectiveness of IRIS' Move Ahead Project for immigrants and refugees, delivered to program donors and sponsors at the end of the grant.",
      skills: ["R", "Excel"],
    },
    {
      name: "Anxiety alters mood sensitivity to outcomes during risky decision-making",
      description:
        "Research project presented at the Computational Psychiatry Conference (2024) in collaboration with the Yale University Rutledge Lab",
      link: "https://ellen-martin.notion.site/Ellen-Martin-s-Portfolio-Website-18128be36b4080c2a1c6ec9fcef621e4?p=1f29b040cd8b4831aa7e39613b4a3faa&pm=c",
      skills: ["Matlab", "R", "Computational Modeling"],
    }, 
    {
      name: "Language Conceptualizations of Depression",
      description:
        "Exploratory research at the Yale Rutledge Lab examining how open-ended text responses to depression questions compare to standardized numerical surveys.",
      link: "https://ellen-martin.notion.site/Ellen-Martin-s-Portfolio-Website-18128be36b4080c2a1c6ec9fcef621e4?p=3ee00163462a4fac96ac5602efcd02a3&pm=c",
      skills: ["Matlab", "R", "Python", "NLP"],
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
    },
    {
      title: "Understanding the relationship between loneliness, substance use traits and psychiatric disorders: A genetically informed approach",
      authors: "Martin, E., Scholer, T., Pingault, J.B., & Barkhuizen, W.",
      journal: "Psychiatry Research",
      year: "2023",
      description:
        "Undergraduate final year dissertation and publication from UCL. Implemented Genomic Structural Equation Modelling to examine the complexity of relationships between loneliness and mental health traits.",
      link: "https://www.sciencedirect.com/science/article/pii/S0165178123001695",
      skills: ["R", "GWAS", "GenomicSEM", "Publication"],
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
        "Tracked participation and payments across multiple study arms",
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
      ],
    },
    {
      school: "University College London",
      degree: "Bachelor of Science in Psychology",
      dateRange: "2018 - 2021",
      achievements: [
        "Dean's List Graduate",
        "Nominated for the Undergraduate Project Prize (for outstanding research)",
      ],
    },
  ],
  cv: {
    link: "/portfolio/cv.pdf",
    description: "View and download my complete resume in PDF format.",
  },
};
