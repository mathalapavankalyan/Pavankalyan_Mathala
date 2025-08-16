import React from "react";
import "./ResumePage.css";

const ResumePage = () => {
  return (
    <div className="resume-container">
      <h1 className="resume-title">My Resume</h1>
      <div className="resume-iframe-container" style={{ marginTop: "2rem" }}>
        <iframe
          src="/assets/PavankalyanMathala.pdf"
          width="100%"
          height="800px"
          style={{
            border: "2px solid #00ffff",
            borderRadius: "10px",
            boxShadow: "0 4px 15px rgba(0,255,255,0.3)"
          }}
          title="Resume"
        />
      </div>
    </div>
  );
};

export default ResumePage;
