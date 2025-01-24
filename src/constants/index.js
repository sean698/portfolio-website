import collectly from "../assets/projects/collectly.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const ROLES = [
  "Full Stack Developer",
  "Cybersecurity Enthusiast",
  "Quick Learner",
];

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a committed and adaptable full-stack developer with a keen passion for crafting high-performance, user-centered web applications, seamlessly integrated with automated CI/CD workflows. With two years of hands-on experience, I have cultivated a versatile skill set across modern technologies, including React, JavaScript, TypeScript, Node.js, PostgreSQL, Docker, and Firebase. Beyond my work, I'm driven by a love for coding, an active lifestyle, and the occasional challenge of a good video game.`;

export const EDUCATION = [
  {
    year: "2020.5 - 2024.1",
    school: "Simon Fraser University - BS in Computer Science",
  },
  {
    year: "2024.9 - 2025.12",
    school: "New York Institute of Technology - MS in Cybersecurity",
  },
];

export const EXPERIENCES = [
  {
    year: "May 2024 - Present",
    role: "Software Engineer",
    company: "DraftKings Inc.",
    description:
      "Developed an integrated issue reporting system with Slack for streamlined problem reporting and resolution. Currently working on integrating React applications into a micro-frontend architecture, focusing on codebase refactoring and build process optimization.",
    technologies: [
      "React",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Kubernetes",
      "PostgreSQL",
    ],
  },
  {
    year: "Sep 2022 - May 2024",
    role: "Full-Stack Developer",
    company: "Sports IQ Analytics",
    description:
      "Participated in development of a real-time sports betting odds platform using React. Implemented Express proxy service on GCP with Okta authentication. Established CI/CD pipeline using CircleCI and deployed Grafana monitoring system for performance optimization.",
    technologies: [
      "React",
      "JavaScript",
      "Google Cloud",
      "Okta",
      "CircleCI",
      "Grafana",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Collectly - Housing Aggregator",
    image: collectly,
    link: "https://collectly.me",
    description:
      "Created a centralized housing information platform for Greater Vancouver area. The website aggregates and processes rental listings from multiple sources, providing users with a comprehensive view of the local housing market. Growing user base demonstrates the platform's value in simplifying house hunting.",
    technologies: ["React", "Node.js", "JavaScript", "Express", "GCP"],
  },
  {
    title: "Trading Console Platform",
    image: project2,
    link: "#",
    description:
      "Developed a real-time internal trading platform that enables traders to manage and adjust odds efficiently. Features include live odds monitoring, quick adjustment tools, and comprehensive trading analytics. Built with real-time WebSocket communication and responsive design for optimal trading experience.",
    technologies: ["React", "TypeScript", "WebSocket", "Firebase"],
  },
  {
    title: "Multi-source Web Scraper",
    image: project3,
    link: "#",
    description:
      "Engineered an automated web scraping system that extracts housing listings from multiple websites including Vanpeople, Craigslist, and Kijiji. Implemented robust data processing pipelines to clean, normalize, and store listing information. Powers the Collectly platform with reliable, real-time housing data.",
    technologies: ["Python", "Scrapy", "PostgreSQL"],
  },
];

export const CONTACT = {
  email: "shiyuanm000@gmail.com",
};
