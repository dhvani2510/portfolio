import React, { useState } from "react";
import Slider from "react-slick";

const projects = [
  {
    title: "TiffinBox",
    video: "/assets/tiffinbox.mp4",
    description:
      "TiffinBox is a web-based food ordering platform designed to connect local home cooks with students and working professionals seeking affordable, nutritious homemade meals. It empowers small-scale chefs to run their own food business from home while offering users a convenient way to subscribe to daily or weekly meal plans. The platform focuses on simplicity, trust, and community-building, aiming to reduce food waste and support local entrepreneurship.",
  },
  {
    title: "EcoCoders",
    video: "/assets/ecocoders.mp4",
    description:
      "EcoCoders is a sustainability-driven application that helps users track their vehicle emissions in real-time and take actionable steps to reduce their carbon footprint. By setting gamified eco-goals and rewarding users for sustainable choices, the platform promotes eco-conscious behavior. It leverages modern web technologies and data visualization to provide insights into driving habits and suggests alternatives like carpooling or public transit for a greener future.",
  },
];

const HomeSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 15000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <section
      className="py-16 px-4 bg-gradient-to-r from-slate-100 to-white"
      id="project"
    >
      <div className="container mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10">
          A Glimpse Into My Journey of Building...
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <FlipCard
                key={index}
                video={project.video}
                title={project.title}
                description={project.description}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
const FlipCard = ({ video, title, description }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group perspective w-full h-[400px] cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full backface-hidden rounded-xl shadow-lg overflow-hidden">
          <video
            src={video}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-xl p-6 flex flex-col justify-center shadow-xl">
          <h3 className="text-4xl font-semibold mb-2 text-center">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const CustomPrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute -left-12 top-1/2 transform -translate-y-1/2 z-20
              border border-slate-300 shadow-md hover:shadow-lg 
               p-3 rounded-full
               transition duration-300 cursor-pointer"
  >
    <span className="text-2xl">←</span>
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute -right-12 top-1/2 transform -translate-y-1/2 z-20
              border border-slate-300 shadow-md hover:shadow-lg 
               p-3 rounded-full 
               transition duration-300 cursor-pointer"
  >
    <span className="text-2xl">→</span>
  </div>
);

export default HomeSection;
