import ListComponent from "./ListComponent";

const projects = [
  {
    "title": "Portfolio Website · Dhvani Sheth",
    "subTitle": "Crafting a modern, visually appealing, and user-friendly personal portfolio to showcase professional experience, skills, and projects.",
    "startDate": "Nov 2024",
    "endDate": "Ongoing",
    "link": "https://github.com/dhvani2510/portfolio",
    "technologies": ["React", "AWS S3", "Figma"]
},
{
    "title": "Food Waste Management App · Full-Stack Project",
    "subTitle": "Developing an intuitive platform to reduce food waste, combining insights from existing solutions into a user-friendly application.",
    "startDate": "Dec 2024",
    "endDate": "Ongoing",
    "link": "",
    "technologies": ["React", "Spring Boot", "PostgreSQL", "Kafka", "REST APIs", "Docker"]
},
{
    "title": "TiffinBox · Food Ordering System",
    "subTitle": "Created a robust Django-based system enabling individuals to connect with home cooks for fresh, homemade meals.",
    "startDate": "Mar 2024",
    "endDate": "Aug 2024",
    "link": "",
    "technologies": ["Django", "PostgreSQL", "Bootstrap", "HTML", "CSS", "JavaScript"]
},
{
    "title": "Climate Neutral · EcoCoders",
    "subTitle": "Developed a web application to manage and track vehicle emissions, promoting eco-friendly practices among users.",
    "startDate": "Feb 2024",
    "endDate": "May 2024",
    "link": "",
    "technologies": ["HTML", "CSS", "JavaScript", "Node.js"]
},
{
    "title": "Nuestro · Decentralized Database Platform",
    "subTitle": "Built a client-side database solution promoting data decentralization and transparency using modern technologies.",
    "startDate": "Sep 2023",
    "endDate": "Nov 2023",
    "link": "",
    "technologies": ["Java Spring Boot", "Angular", "MySQL", "REST APIs"]
}

];


const ProjectsSection = () => {
  return (
    <section className="experience" id="projects">
      <div className="section-title">projects</div>
      <a
        className="experience-block"
        href="https://github.com/sarv19/serverless-image-processing"
        target="_blank"
      >
        <div className="experience-block-left">
          <img src="/serverless.png" alt="Project Preview" />
        </div>
        <div className="experience-block-right">
          <div className="experience-block-right-title">
            Serverless Image Handler{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="experience-block-right-subTitle"></div>
          <div className="experience-block-right-summary">
            Designed and deployed a scalable serverless image processing
            solution on AWS, optimizing workflows with NodeJs for high
            performance. Streamlined AWS CloudFormation deployment for
            simplified setup and authored user-friendly documentation for easy
            onboarding and configuration.
          </div>
          <div
            className="experience-block-right-technologies"
            aria-label="technologies-used"
          >
            <div className="experience-block-right-technologies-tag">
              AWS CloudFormation
            </div>
            <div className="experience-block-right-technologies-tag">
              CloudFront
            </div>
            <div className="experience-block-right-technologies-tag">Lambda</div>
            <div className="experience-block-right-technologies-tag">S3</div>
            <div className="experience-block-right-technologies-tag">
              API Gateway
            </div>
          </div>
        </div>
      </a>
      <a
        className="experience-block"
        href="https://github.com/sarv19/sarv19.github.io"
        target="_blank"
      >
        <div className="experience-block-left">
          <img src="/portfolio.png" alt="Project Preview" />
        </div>
        <div className="experience-block-right">
          <div className="experience-block-right-title">
            Personal Porfolio{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="experience-block-right-subTitle"></div>
          <div className="experience-block-right-summary">
            A sleek and contemporary portfolio website that seamlessly blends
            simplicity with a futuristic design aesthetic. Developed using the
            robust technologies of React and Vite for dynamic and user-friendly
            web experiences.
          </div>
          <div
            className="experience-block-right-technologies"
            aria-label="technologies-used"
          >
            <div className="experience-block-right-technologies-tag">React</div>
            <div className="experience-block-right-technologies-tag">Vite</div>
            <div className="experience-block-right-technologies-tag">SASS</div>
          </div>
        </div>
      </a>
      <a
        className="experience-block"
        href="https://sarah-techwave.vercel.app/blog"
        target="_blank"
      >
        <div className="experience-block-left">
          <img src="/blog-smart.png" alt="Project Preview" />
        </div>
        <div className="experience-block-right">
          <div className="experience-block-right-title">
            TechWave{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="experience-block-right-subTitle"></div>
          <div className="experience-block-right-summary">
            A content aggregation platform built with Supabase, Next.js, and
            TailwindCSS. Provides a seamless experience for users to explore the
            latest articles and videos from top tech sources. Updates daily with
            fresh content and ensures outdated posts are automatically removed.
          </div>
          <div
            className="experience-block-right-technologies"
            aria-label="technologies-used"
          >
            <div className="experience-block-right-technologies-tag">NextJs</div>
            <div className="experience-block-right-technologies-tag">
              TailwindCss
            </div>
            <div className="experience-block-right-technologies-tag">Supabase</div>
            <div className="experience-block-right-technologies-tag">Shadcn</div>
          </div>
        </div>
      </a>
      <a
        className="experience-block"
        href="https://github.com/sarv19/ASE-smart-diet-frontend"
        target="_blank"
      >
        <div className="experience-block-left">
          <img src="/smart-diet.png" alt="Project Preview" />
        </div>
        <div className="experience-block-right">
          <div className="experience-block-right-title">
            Smart Diet{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="experience-block-right-subTitle"></div>
          <div className="experience-block-right-summary">
            Led a team in developing a lightweight application to assist
            individuals with dietary restrictions, utilizing Next.js for
            server-side rendering and Java with Spring Boot for the backend.
            Integrated MySQL, Firebase, and Algolia for effective data storage
            and searching functionalities.
          </div>
          <div
            className="experience-block-right-technologies"
            aria-label="technologies-used"
          >
            <div className="experience-block-right-technologies-tag">NextJs</div>
            <div className="experience-block-right-technologies-tag">Java</div>
            <div className="experience-block-right-technologies-tag">
              SpringBoot
            </div>
            <div className="experience-block-right-technologies-tag">MySQL</div>
            <div className="experience-block-right-technologies-tag">Firebase</div>
            <div className="experience-block-right-technologies-tag">Algolia</div>
          </div>
        </div>
      </a>
      <a
        href="https://github.com/sarv19?tab=repositories"
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
