import ListComponent from "./ListComponent";

const education = [
  {
    title: "University of Windsor",
    subTitle: "Master of Applied Computing",
    startDate: "May 2023",
    endDate: "Aug 2024",
    link: "https://www.uwindsor.ca/",
  },
  {
    title: "Chitkara University",
    subTitle: "Bachelor of Engineering in Computer Science",
    startDate: "Jul 2016",
    endDate: "Jun 2020",
    link: "https://www.chitkara.edu.in/",
  }
]

const EducationSection = () => {
  return (
    <section className="experience" id="education">
      <div className="section-title">education</div>
      {education.map((item, index) => (
        <ListComponent item={item} />
      ))}
    </section>
  );
};

export default EducationSection;
