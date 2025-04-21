import React, { useEffect } from "react";

const HomeSection = () => {
  // const options = {
  //   loop: true,
  //   margin: 10,
  //   nav: true,
  //   dots: false,
  //   autoplay: true,
  //   autoplayTimeout: 15000,
  //   items: 1,
  // };

  useEffect(() => {
    const videoElements = document.querySelectorAll("video");
    videoElements.forEach((video) => {
      video.addEventListener("ended", () => {
        video.currentTime = 0;
        video.play();
      });
    });
  }, []);

  return (
    <section
      className="project p-2 d-lg-flex justify-content-center align-items-center"
      id="project"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-11 text-center mx-auto col-12">
            <div className="col-lg-8 mx-auto">
              <h2>A Glimpse Into My Journey of Building...</h2>
            </div>
            {/* <OwlCarousel
              className="owl-theme owl-carousel owl-loaded owl-drag"
              {...options}
            >
              <div className="item">
                <video
                  src="/assets/tiffinbox.mp4"
                  autoPlay
                  loop
                  muted
                  className="img-fluid"
                ></video>
              </div>
              <div className="item">
                <video
                  src="/assets/ecocoders.mp4"
                  autoPlay
                  loop
                  muted
                  className="img-fluid"
                ></video>
              </div>
            </OwlCarousel> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
