const skills = [
    {
        "category": "Languages",
        "names": ["C", "C++", "Java", "Python", "JavaScript", "TypeScript", "HTML", "CSS"]
    },
    {
        "category": "Frameworks & Libraries",
        "names": ["Spring Boot", "Angular", "React", "React Native", "ASP.NET", "Django", "Node.js", "Flutter"]
    },
    {
        "category": "Databases",
        "names": ["MySQL", "Oracle", "PostgreSQL", "MongoDB", "SQL Server", "NoSQL"]
    },
    {
        "category": "Tools",
        "names": ["Git", "Jira", "Jenkins", "Docker", "Kibana", "Apache Kafka", "Apache Spark", "Confluence"]
    }
];



export default function SkillsSection() {
    return (
        <section id="skills" className="experience">
            <div className="section-title">skills</div>
            {skills.map((item) => (
                <SkillsComponent item={item} />
            ))}
        </section>
    );
}

const SkillsComponent = (props) => {
    return (
        <div className="experience-block">
            <div className="experience-block-left">{props.item.category}</div>
            <div className="experience-block-right-skills">
                {props.item.names.map((name) => (
                    <div className="experience-block-right-technologies-tag">{name}</div>
                ))}
            </div>
        </div>

    )
}