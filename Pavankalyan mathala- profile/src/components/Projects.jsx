import React from "react";

const Projects = () => {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "A modern personal portfolio built with React and Vite to showcase projects and skills.",
      link: "#",
    },
    {
      title: "E-commerce App",
      description: "A full-featured e-commerce application with product catalog, cart, and checkout functionality.",
      link: "#",
    },
    {
      title: "Blog Platform",
      description: "A responsive blog platform where users can read, write, and comment on articles.",
      link: "#",
    },
  ];

  return (
    <section
      style={{
        padding: "6rem 2rem",
        maxWidth: "1000px",
        margin: "0 auto",
        textAlign: "center",
        color: "#ffffff",
        position: "relative",
        zIndex: 1,
      }}
    >
      <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Projects</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
        }}
      >
        {projectList.map((project, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              padding: "2rem",
              borderRadius: "15px",
              boxShadow: "0 0 15px rgba(255, 255, 255, 0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 0 25px rgba(255, 255, 255, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 0 15px rgba(255, 255, 255, 0.1)";
            }}
          >
            <h3 style={{ marginBottom: "1rem" }}>{project.title}</h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", marginTop: "1rem", color: "#00bfff" }}
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
