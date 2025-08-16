import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Background from "./components/BackGround";
import ResumePage from "./components/Resume";
import TextType from "./components/TextType";
import Skills from "./components/Skills";

function App() {
  // Track which section is currently visible
  const [activeSection, setActiveSection] = useState("home");

  // Handler for header clicks
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div>
      {/* Background effect */}
      <Background />

      {/* Header with navigation */}
      <Header onNavClick={handleNavClick} activeSection={activeSection} />

      {/* Conditional rendering of sections */}
      {activeSection === "home" && (
        <section
          id="home"
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "3rem",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
            <TextType
              text={[
                "Hey there! 👋 Welcome to my digital playground!",
                "I build cool things with React and Java.",
                "Full-stack dev by day, bug exterminator by night 😎",
              ]}
              typingSpeed={60}
              deletingSpeed={40}
              pauseDuration={2000}
              loop={true}
              textColors={["#00ffff", "#ff00ff", "#ffff00"]}
              showCursor={true}
            />
          </h1>
        
        </section>
      )}

      {activeSection === "about" && <About />}
      {activeSection === "projects" && <Projects />}
      {activeSection === "skills" && (
        <section style={{ minHeight: "100vh", padding: "3rem", textAlign: "center" }}>
          <Skills />
        </section>
      )}
      {activeSection === "contact" && <Contact />}
      {activeSection === "resume" && <ResumePage />}
    </div>
  );
}

export default App;
