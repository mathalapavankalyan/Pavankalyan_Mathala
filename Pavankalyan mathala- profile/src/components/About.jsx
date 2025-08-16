import React from "react";
import TypeWriter from "./TypeWriter";

const About = () => {
  return (
    <section
      style={{
        padding: "6rem 2rem",
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center",
        color: "#ffffff",
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h2 style={{ fontSize: "3rem", marginBottom: "2rem" }}>About Me</h2>
      <p style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
        <TypeWriter text="Hello! I’m Pavan Kalyan, a Full Stack Developer with 1 year of experience." speed={50} />
      </p>
      <p style={{ fontSize: "1.5rem", lineHeight: "2rem", marginTop: "1rem" }}>
        <TypeWriter text="I specialize in Java Spring Boot for backend and React for frontend." speed={50} />
      </p>
      <p style={{ fontSize: "1.5rem", lineHeight: "2rem", marginTop: "1rem" }}>
        <TypeWriter text="I build interactive, responsive, and modern web applications." speed={50} />
      </p>
      <p style={{ fontSize: "1.5rem", lineHeight: "2rem", marginTop: "1rem" }}>
        <TypeWriter text="I love turning ideas into seamless user experiences and exploring new technologies." speed={50} />
      </p>
    </section>
  );
};

export default About;
