import React from "react";
import { FaDownload, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <section
      className="about full-screen d-lg-flex justify-content-center align-items-center"
      id="about"
    >
      <div className="container mx-auto p-2">
        <div className="row">
          <div className="col-lg-9 col-md-12 col-12 d-flex align-items-center">
            <div className="about-text">
              <h1 className="animated animated-text">
                <span className="mr-2">Hey folks, I'm </span>
                <div className="animated-info">
                  <span className="animated-item">Dhvani Sheth</span>
                  <span className="animated-item">Software Engineer</span>
                  <span className="animated-item">Full-stack Developer</span>
                </div>
              </h1>
              <p>
                I’m a passionate Full-stack Software Engineer with over 4 years
                of hands-on experience crafting high-performance applications.
                Specializing in modern web technologies like Angular, React, and
                Spring Boot, I bring creative solutions to complex challenges.
                My focus is on writing clean, scalable, and efficient code to
                deliver exceptional user experiences and robust backend systems.
              </p>

              <p>
                Every project I work on is an opportunity to innovate, learn,
                and push the boundaries of what's possible. From collaborating
                with diverse teams to tackling technical problems head-on, I’m
                driven by the belief that great technology empowers people and
                transforms businesses.
              </p>

              <div className="custom-btn-group mt-4">
                <button
                  download="Dhvani Sheth Resume"
                  className="btn mr-lg-2 custom-btn"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/assets/Dhvani Sheth Resume.pdf";
                    link.download = "Dhvani Sheth Resume.pdf";
                    link.click();
                  }}
                >
                  <FaDownload className="border-1" /> Download Resume
                </button>

                {/* lets connect */}
                <button
                  className="btn custom-btn custom-btn-bg"
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/dhvani-sheth-25oct/"
                    );
                  }}
                >
                  <FaLinkedin className="border-1" /> Let's Connect
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-12 col-12">
            <div className="about-image svg">
              <img
                src="/assets/profile.jpeg"
                className="img-fluid rounded-circle"
                alt="profile"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
