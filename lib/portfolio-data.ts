export type SectionId =
  | "home"
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "education"
  | "certifications"
  | "contact";

export const SECTIONS: { id: SectionId; label: string; planet: string }[] = [
  { id: "home", label: "Home", planet: "Earth" },
  { id: "about", label: "About", planet: "Moon" },
  { id: "skills", label: "Skills", planet: "Mars" },
  { id: "experience", label: "Experience", planet: "Jupiter" },
  { id: "projects", label: "Projects", planet: "Saturn" },
  { id: "education", label: "Education", planet: "Neptune" },
  { id: "certifications", label: "Certifications", planet: "Venus" },
  { id: "contact", label: "Contact", planet: "Sun" },
];

export const PROFILE = {
  name: "Raj Kamal Gautam",
  title: "Software Engineer • AI/ML Developer • Aspiring Project Manager",
  location: "Jabalpur, India",
  email: "rajworkspace8113@gmail.com",
  phone: "+91 93990 64653",
  linkedin: "https://linkedin.com/in/raj-gautam-dev",
  github: "https://github.com/RajGautam8113",
  summary:
    "B.Tech Computer Science student with hands-on experience building scalable web and AI/ML applications. Proficient in Python, Flask, and modern ML frameworks with a strong foundation in data structures, system design, and agile development. Demonstrated ability to deliver end-to-end solutions with measurable impact — and to coordinate cross functional teams, manage SDLC timelines, and communicate technical outcomes to diverse stakeholders.",
  target:
    "Targeting a Project Manager role at engineering-led organizations such as Google, Microsoft, Siemens, and BMW.",
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Native" },
    { name: "German", level: "Basic (A2)" },
  ],
};

export const SKILLS = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "Java", "C++", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "Flask",
      "FastAPI",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "OpenCV",
      "spaCy",
    ],
  },
  {
    category: "Databases",
    items: ["MySQL", "SQLite3"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Git", "GitHub", "GitLab", "Ngrok"],
  },
  {
    category: "Analytics & BI",
    items: ["Power BI", "Excel (Advanced)"],
  },
];

export const EXPERIENCE = [
  {
    role: "Data Analytics Intern",
    company: "Pratinik Infotech",
    location: "Remote",
    period: "May 2026 – July 2026",
    bullets: [
      "Selected for a 2-month intensive internship focused on Data Analytics and business intelligence solutions.",
      "Leveraging analytical tools to process complex datasets and contribute to data-driven decision-making processes.",
      "Collaborating with the technical team to improve data visualization and reporting efficiency.",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Acrostic IT Solutions Pvt. Ltd.",
    location: "Jabalpur, India",
    period: "Jan 2024 – Nov 2024",
    bullets: [
      "Contributed to end-to-end SDLC across 3+ modules, including requirement analysis, development, testing, and deployment.",
      "Built and maintained Python-based web applications, improving code efficiency and reducing response time by ~15%.",
      "Collaborated in Agile sprints (planning, stand-ups, code reviews), accelerating feature delivery cycles.",
      "Debugged and resolved production issues, reducing bug recurrence and improving overall application stability.",
    ],
  },
  {
    role: "Cybersecurity Virtual Intern",
    company: "Cisco",
    location: "Remote",
    period: "Apr 2024 – Jun 2024",
    bullets: [
      "Conducted threat analysis and vulnerability assessments using structured security frameworks.",
      "Strengthened understanding of network security, risk identification, and mitigation strategies.",
    ],
  },
];

export const PROJECTS = [
  {
    name: "AI Forensic Report Analyzer",
    role: "Project Lead",
    location: "Jabalpur",
    period: "2024",
    tagline:
      "NLP + Computer Vision system that cross-verifies forensic text reports against physical evidence.",
    bullets: [
      "Developed an AI-based system using NLP and Computer Vision to analyze forensic reports and physical evidence, achieving high accuracy cross-verification between textual reports and visual data through iterative testing.",
      "Integrated spaCy, PyTorch, and EasyOCR with a Flask backend and interactive Three.js frontend.",
      "Containerized using Docker and deployed via Ngrok for scalable, portable architecture.",
    ],
    stack: [
      "Python",
      "spaCy",
      "PyTorch",
      "EasyOCR",
      "Flask",
      "Three.js",
      "Docker",
      "Ngrok",
    ],
  },
  {
    name: "Crop Intelligence Platform",
    role: "Project Lead",
    location: "Jabalpur",
    period: "2023 – 2024",
    tagline:
      "Full-stack ML platform for crop yield prediction, disease detection, and price forecasting.",
    bullets: [
      "Built a full-stack ML platform for crop yield prediction, disease detection, and price forecasting; improved model accuracy by 12% using feature engineering and optimized preprocessing techniques.",
      "Developed a real-time analytics dashboard using Flask, MySQL, and Power BI for stakeholder decision support.",
      "Coordinated cross functional team across data, ML, and front-end workstreams with zero scope creep.",
    ],
    stack: ["Python", "Flask", "MySQL", "Power BI", "Scikit-learn", "Pandas"],
  },
];

export const LEADERSHIP = [
  {
    role: "Community Lead",
    org: "Code Luster",
    detail:
      "Organized coding workshops and events for 50+ participants; managed logistics, speakers, and end-to-end communications.",
  },
  {
    role: "Placement Coordinator",
    org: "College Placement Cell",
    detail:
      "Coordinated between recruiters, faculty, and students, improving communication efficiency across multistakeholder placement drives.",
  },
  {
    role: "Hackathon Organizer",
    org: "Inter-college Hackathons",
    detail:
      "Managed logistics, judging panels, and full event execution for inter-college hackathons.",
  },
];

export const EDUCATION = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    school: "Shri Ram Institute of Science & Technology, Jabalpur",
    period: "2022 – Present",
    score: "CGPA: 7.04 / 10",
    highlights: [
      "Core CS coursework: DSA, OS, DBMS, Computer Networks, System Design",
      "Active in tech community, hackathons, and coding workshops",
      "Project-based learning across AI/ML, full-stack, and analytics",
    ],
  },
  {
    degree: "Secondary Education (XII)",
    school: "Holy Cross Higher Secondary School, V.F.J, Jabalpur",
    period: "2022",
    score: "Percentage: 68%",
    highlights: ["Science stream with Mathematics and Computer Science"],
  },
  {
    degree: "Higher Education (X)",
    school: "Holy Cross Higher Secondary School, V.F.J, Jabalpur",
    period: "2020",
    score: "Percentage: 72.6%",
    highlights: ["Strong foundation in mathematics and science"],
  },
];

export const CERTIFICATIONS = [
  {
    name: "Salesforce AI Associate Certification",
    issuer: "Salesforce",
    detail:
      "Foundational AI concepts, ethical AI use, and applied AI in the Salesforce ecosystem.",
  },
  {
    name: "Oracle AI Vector Search Certification",
    issuer: "Oracle",
    detail:
      "Vector embeddings, similarity search, and AI-powered retrieval on Oracle Database.",
  },
  {
    name: "Python Programming Certification",
    issuer: "Ideal Management Group",
    detail: "Core Python, OOP, scripting, and applied problem solving.",
  },
  {
    name: "CCNA Certification",
    issuer: "Cisco",
    detail:
      "Networking fundamentals, routing, switching, and network security essentials.",
  },
];
