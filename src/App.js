import React from "react";
import Header from "./components/Header";
import AboutSection from "./components/About";
import ProjectSection from "./components/Projects";
import PortfolioSection from "./components/Portfolio";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <AboutSection />
      <ProjectSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
