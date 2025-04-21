import React from "react";
import { FaDownload, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <section
      className="min-h-screen flex items-center justify-center p-4 bg-white"
      id="about"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-3/4 w-full">
          <div className="about-text space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold">
              <span className="mr-2">Hey folks, I'm</span>
              <div className="animated-info">
                <span className="animated-item">Dhvani Sheth</span>
                <span className="animated-item">Software Engineer</span>
                <span className="animated-item">Full-stack Developer</span>
              </div>
            </h1>

            <p className="text-gray-700">
              I’m a passionate Full-stack Software Engineer with over 4 years of
              hands-on experience crafting high-performance applications.
              Specializing in modern web technologies like Angular, React, and
              Spring Boot, I bring creative solutions to complex challenges.
            </p>

            <p className="text-gray-700">
              Every project I work on is an opportunity to innovate, learn, and
              push the boundaries of what's possible. From collaborating with
              diverse teams to tackling technical problems head-on, I’m driven
              by the belief that great technology empowers people and transforms
              businesses.
            </p>

            <p className="text-gray-700">
              When I'm not coding, you can find me exploring new culinary
              delights, immersing myself in captivating movies, or engaging in
              engaging discussions on tech and life.
            </p>

            <p className="text-gray-700">
              Let's connect and explore how I can contribute to your next
              project!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button
                download="Dhvani Sheth Resume"
                className="px-6 py-2 rounded shadow flex items-center gap-2"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/assets/Dhvani Sheth Resume.pdf";
                  link.download = "Dhvani Sheth Resume.pdf";
                  link.click();
                }}
              >
                <FaDownload /> Download Resume
              </button>

              <button
                className="px-6 py-2 rounded shadow flex items-center gap-2"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/dhvani-sheth-25oct/")
                }
              >
                <FaLinkedin /> Let’s Connect
              </button>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="lg:w-1/4 w-full flex justify-center">
          <img
            src="/assets/profile.jpeg"
            alt="profile"
            className="object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
