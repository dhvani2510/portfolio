import AboutSection from "./AboutSection.js";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";

const RightSection = () => {
    return (
        <div className="main-body-right">
            <AboutSection />
            <EducationSection />
            <ExperienceSection />
            <SkillsSection />
            <ProjectsSection />
        </div>
    )
}

export default RightSection