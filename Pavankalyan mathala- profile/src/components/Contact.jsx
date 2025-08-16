import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the data
    console.log("Contact Form Submitted:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      style={{
        padding: "6rem 2rem",
        maxWidth: "600px",
        margin: "0 auto",
        textAlign: "center",
        color: "#ffffff",
        position: "relative",
        zIndex: 1,
      }}
    >
      <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Contact Me</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            padding: "0.75rem 1rem",
            borderRadius: "8px",
            border: "1px solid #ffffff50",
            background: "rgba(255, 255, 255, 0.05)",
            color: "#ffffff",
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            padding: "0.75rem 1rem",
            borderRadius: "8px",
            border: "1px solid #ffffff50",
            background: "rgba(255, 255, 255, 0.05)",
            color: "#ffffff",
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
          style={{
            padding: "0.75rem 1rem",
            borderRadius: "8px",
            border: "1px solid #ffffff50",
            background: "rgba(255, 255, 255, 0.05)",
            color: "#ffffff",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "0.75rem 1rem",
            borderRadius: "8px",
            border: "none",
            background: "#00bfff",
            color: "#000",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#009acd")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#00bfff")}
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
