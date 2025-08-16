import React from "react";

const Header = ({ onNavClick, activeSection }) => {
  const navLinks = ["home", "about", "projects", "skills", "contact", "resume"];

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "1rem ",
        color: "#fff",
        position: "fixed", 
        top: 0,
        left: 0,
        width: "100%",
        background: "rgba(13, 7, 22, 0.95)", 
        zIndex: 10000, 
        boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
      }}
    >
      <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Pavan Kalyan Mathala</div>

      <nav>
        <ul style={{ display: "flex", listStyle: "none", gap: "2rem", margin: 0, padding: 0 }}>
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => onNavClick(link)}
                style={{
                  background: "none",
                  border: "none",
                  color: activeSection === link ? "#00ffff" : "#fff",
                  fontWeight: 500,
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
