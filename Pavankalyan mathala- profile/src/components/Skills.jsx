import React from "react";
import GlassIcons from "./GlassIcons";

// URLs for skill logos (you can replace with your preferred images)
const skillItems = [
  { label: "Python", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" width={30} />, color: "blue" },
  { label: "Java", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" width={30} />, color: "red" },
  { label: "MongoDB", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" width={30} />, color: "green" },
  { label: "SQL", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" width={30} />, color: "indigo" },
  { label: "HTML", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" width={30} />, color: "orange" },
  { label: "CSS", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" width={30} />, color: "blue" },
  { label: "JavaScript", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" width={30} />, color: "yellow" },
  { label: "Spring Boot", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" width={30} />, color: "green" },
  { label: "Microservices", icon: <img src="https://cdn-icons-png.flaticon.com/512/414/414974.png" alt="Microservices" width={30} />, color: "purple" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      style={{
        padding: "6rem 2rem",
        maxWidth: "1000px",
        margin: "0 auto",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>My Skills</h2>
      <GlassIcons items={skillItems} className="skills-icons" />
    </section>
  );
};

export default Skills;
