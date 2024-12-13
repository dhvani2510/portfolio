import React from "react";
import Header from "./components/Header";
import AboutSection from "./components/About";
import ProjectSection from "./components/Projects";
import PortfolioSection from "./components/Portfolio";
import ContactSection from "./components/Contact";

function App() {
  return (
    <div>
      {/* a sticky top header */}
      <Header />
      <AboutSection />
      <ProjectSection />
      <PortfolioSection />
      <ContactSection />
      


    </div>
  );
}

export default App;
