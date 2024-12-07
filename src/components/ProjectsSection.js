import ListComponent from "./ListComponent";

const projects = [
  {
    "title": "Portfolio Website · Dhvani Sheth",
    "subTitle": "Crafting a modern, visually appealing, and user-friendly personal portfolio to showcase professional experience, skills, and projects.",
    "startDate": "Nov 2024",
    "endDate": "Dec 2024",
    "link": "https://github.com/dhvani2510/portfolio",
    "technologies": ["React", "AWS S3", "Figma"],
    "preview": ""
},
{
    "title": "TiffinBox · Food Ordering System",
    "subTitle": "Created a robust Django-based system enabling individuals to connect with home cooks for fresh, homemade meals.",
    "startDate": "Jan 2024",
    "endDate": "Apr 2024",
    "link": "https://github.com/Tiffin-Box-Django/TiffinBox.git",
    "technologies": ["Python", "Django", "Bootstrap", "HTML", "CSS", "JavaScript"],
    "preview": "/assets/tiffinbox.mp4"
},
{
    "title": "Climate Neutral · EcoCoders",
    "subTitle": "Developed a web application to manage and track vehicle emissions, promoting eco-friendly practices among users.",
    "startDate": "Jam 2024",
    "endDate": "Apr 2024",
    "link": "https://github.com/dhvani2510/climate-neutral-by-ecocoders",
    "technologies": ["HTML", "CSS", "JavaScript"],
    "preview":"/assets/ecocoders.mp4"
},
{
    "title": "Nuestro · Decentralized Database Platform",
    "subTitle": "Built a client-side database solution promoting data decentralization and transparency using modern technologies.",
    "startDate": "Sep 2023",
    "endDate": "Dec 2023",
    "link": "https://github.com/orgs/Nuestro-Advanced-Database/repositories",
    "technologies": ["Java Spring Boot", "Angular", "MySQL", "REST APIs", "MSSQL", "MongoDB", "NoSQL", "PostgreSQL", "TypeScript"]
}
];


const ProjectsSection = () => {
  return (
    <section className="experience" id="projects">
      <div className="section-title">projects</div>
      {projects.map((item) => (
        <ListComponent item={item} />
      ))}
      <a
        href="https://github.com/dhvani2510?tab=repositories"
        target="_blank"
        className="experience-resume"
        rel="noopener noreferrer"
      >
        <span>View Full Project Archive</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </section>
  );
};

export default ProjectsSection;
