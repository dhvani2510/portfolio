import ListComponent from "./ListComponent";

const experience = [
  {
    "title": "Software Engineer · Softab Technologies",
    "subTitle": "Developed advanced management portal solutions, combining modern UI frameworks with robust backend technologies to enhance business operations.",
    "startDate": "Aug 2023",
    "endDate": "Dec 2023",
    "link": "https://softabtechnologies.com/", 
    "technologies": ["Angular", "Spring Boot", "REST APIs", "MySQL", "Docker", "Jenkins", "AWS"]
},
{
    "title": "Software Engineer · Tenerity India Limited",
    "subTitle": "Engineered scalable software for a banking client’s travel benefits platform, delivering innovative features and high-volume data processing solutions.",
    "startDate": "Jul 2020",
    "endDate": "Apr 2023",
    "link": "https://www.tenerity.com/",
    "technologies": ["React", "ASP.NET Core", "SQL Server", "Apache Kafka", "Apache Spark", "Git", "Jenkins"]
},
{
    "title": "Software Engineer Intern · Tenerity India Limited",
    "subTitle": "Designed and implemented a comprehensive inventory management system while contributing to customer-facing Angular applications.",
    "startDate": "Jul 2019",
    "endDate": "Jun 2020",
    "link": "https://www.tenerity.com/",
    "technologies": ["Angular", "ASP.NET Core", "PostgreSQL", "HTML", "CSS", "JavaScript"]
}
];



const ExperienceSection = () => {
  return (
    <section className="experience" id="experience">
      <div className="section-title">experience</div>
      {experience.map((item) => (
        <ListComponent item={item} />
      ))}
    </section>
  );
};

export default ExperienceSection;
