import React from "react";

function Portfolio() {
  return (
    <section className="portfolio p-2 d-lg-flex justify-content-center align-items-center" id="portfolio">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-12">
          <h2>Experience</h2>
          <div className="timeline">
            <div className="timeline-wrapper">
              <div className="timeline-yr">2023</div>
              <div className="timeline-info">
                <h3>Software Engineer <small>Softab Technologies</small></h3>
                <p>
                  Developed a management portal using Angular and Spring Boot.
                </p>
              </div>
            </div>
            <div className="timeline-wrapper">
              <div className="timeline-yr">2020</div>
              <div className="timeline-info">
                <h3>
                  Software Engineer <small>Tenerity India Limited</small>
                </h3>
                <p>
                  Developed RESTful APIs and managed high-volume data
                  processing solutions for a banking client.
                </p>
              </div>
            </div>
            <div className="timeline-wrapper">
              <div className="timeline-yr">2019</div>
              <div className="timeline-info">
                <h3>
                  Intern <small>Tenerity India Limited</small>
                </h3>
                <p>
                Contributed to Angular and ASP.NET Core projects,
                including creating an Inventory Management System.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <h2>Education</h2>
          <div className="timeline">
            <div className="timeline-wrapper">
              <div className="timeline-yr">2024</div>
              <div className="timeline-info">
                <h3>
                  Master of Applied Computing
                  <small>University of Windsor</small>
                </h3>
              </div>
            </div>
            <div className="timeline-wrapper">
              <div className="timeline-yr">2020</div>
              <div className="timeline-info">
                <h3>
                  Bachelor of Engineering <small>Chitkara University</small>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Portfolio;
