import React from "react";

function About() {
  return (
    <section className="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
    <div className="container">
        <div className="row">
            <div className="col-lg-9 col-md-12 col-12 d-flex align-items-center">
                <div className="about-text">
                    <small className="small-text">Welcome to <span className="mobile-block">my portfolio website!</span></small>
                    <h1 className="animated animated-text">
                        <span className="mr-2">Hey folks, I'm </span>
                            <div className="animated-info">
                                <span className="animated-item">Dhvani Sheth</span>
                                <span className="animated-item">Software Engineer</span>
                                <span className="animated-item">Full-stack Developer</span>
                            </div>
                    </h1>
                    <p>
                    I am a Full-stack Software Engineer with over 4 years of experience in developing scalable applications using technologies like Angular, React, Spring Boot, and more. I am passionate about building efficient and innovative solutions.
                    </p>
                    
                    <div className="custom-btn-group mt-4">
                      <a href="/assets/Dhvani Sheth Resume.pdf" download="Dhvani Sheth Resume" className="btn mr-lg-2 custom-btn"><i className="uil uil-file-alt"></i> Download Resume</a>
                      <a href="#contact" className="btn custom-btn custom-btn-bg custom-btn-link">Let's Connect</a>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-12 col-12">
                <div className="about-image svg">
                    <img src="/assets/profile.jpeg" className="img-fluid rounded-full" alt="profile" />
                </div>
            </div>

        </div>
    </div>
</section>
  );
}

export default About;
