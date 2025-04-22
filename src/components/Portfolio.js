import React from "react";
import * as motion from "motion/react-client";

const TimelineCard = ({ title, org, description, align = "left" }) => (
  <div
    className={`w-full md:w-5/12 ${
      align === "left" ? "text-left pl-4" : "text-right pr-4"
    }`}
  >
    <div className="bg-gray-100 p-5 rounded-xl shadow-lg inline-block">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-sm font-medium text-indigo-600">{org}</p>
      <p className="text-gray-600 mt-1 text-sm">{description}</p>
    </div>
  </div>
);

const getMonth = (month) => {
  return new Intl.DateTimeFormat("en", { month: "short" }).format(
    new Date(2000, month - 1)
  );
};

const TimelineDot = ({ year, month }) => (
  <div className="w-0 md:w-2/12 flex flex-col items-center relative z-10">
    <div className="bg-white rounded-full p-2 shadow-md border border-indigo-200 text-indigo-600 text-center">
      {getMonth(month)}
      <br /> {year}
    </div>
  </div>
);

const Portfolio = () => {
  const timelineData = [
    {
      type: "work",
      year: 2024,
      month: 12,
      title: "Software Engineer",
      org: "Toropal",
      description:
        "Building admin monitoring platform using React and Node.js.",
    },
    {
      type: "education",
      year: 2023,
      month: 5,
      title: "Master of Applied Computing",
      org: "University of Windsor",
      description: "Ontario, Canada",
    },
    {
      type: "work",
      year: 2023,
      month: 8,
      title: "Full-Stack Developer",
      org: "Softab Technologies",
      description: "Created management portal using Angular and Spring Boot.",
    },
    {
      type: "work",
      year: 2020,
      month: 4,
      title: "Software Engineer",
      org: "Tenerity India Limited",
      description:
        "Developed RESTful APIs and big data flows using Kafka and Spark.",
    },
    {
      type: "education",
      year: 2016,
      month: 7,
      title: "B.E. in Computer Science",
      org: "Chitkara University",
      description: "Punjab, India",
    },
    {
      type: "work",
      year: 2019,
      month: 7,
      title: "Software Engineer Intern",
      org: "Tenerity India Limited",
      description: "Built an Inventory System using Angular and ASP.NET Core.",
    },
  ];

  const sortedTimeline = [...timelineData].sort((a, b) =>
    b.year === a.year ? b.month - a.month : b.year - a.year
  );

  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">My Journey</h2>

      <div className="relative max-w-5xl mx-auto px-4">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-indigo-300 z-0" />

        <div className="space-y-20">
          {sortedTimeline.map((item, index) => {
            const isWork = item.type === "work";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col md:flex-row items-center"
              >
                {isWork ? (
                  <>
                    <TimelineCard {...item} align="right" />
                    <TimelineDot year={item.year} month={item.month} />
                    <div className="w-full md:w-5/12" />
                  </>
                ) : (
                  <>
                    <div className="w-full md:w-5/12" />
                    <TimelineDot year={item.year} month={item.month} />
                    <TimelineCard {...item} align="left" />
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
