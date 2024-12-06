import AboutSection from "./AboutSection.js";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";

const RightSection = () => {
    return (
        <div className="main-body-right">
            <AboutSection />
            <EducationSection />
            <ExperienceSection />
            <ProjectsSection />
        </div>
    )
}

export default RightSection