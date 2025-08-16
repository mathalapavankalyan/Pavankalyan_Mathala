import React, { useState } from "react";
import Galaxy from "./Galaxy";

const Background = () => {
  const [glareList, setGlareList] = useState([]);

  const handleClick = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const id = Date.now();

    // Create multiple small glints
    const newGlare = Array.from({ length: 5 }).map((_, idx) => ({
      id: id + "-" + idx,
      x,
      y,
      angle: (360 / 5) * idx, // evenly spread angles
    }));

    setGlareList((prev) => [...prev, ...newGlare]);

    // Remove glints after animation
    setTimeout(() => {
      setGlareList((prev) => prev.filter((g) => !newGlare.includes(g)));
    }, 500);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        overflow: "hidden",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <Galaxy
        mouseRepulsion={true}
        mouseInteraction={true}
        density={1.5}
        glowIntensity={0.5}
        saturation={0.8}
        hueShift={240}
      />

      {glareList.map((glare) => {
        const distance = 60; // max distance from center
        const rad = (glare.angle * Math.PI) / 180;
        const translateX = distance * Math.cos(rad);
        const translateY = distance * Math.sin(rad);

        return (
          <div
            key={glare.id}
            style={{
              position: "absolute",
              left: glare.x + "px",
              top: glare.y + "px",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "rgba(0, 255, 255, 0.8)",
              boxShadow: "0 0 15px 5px rgba(0, 255, 255, 0.8)",
              pointerEvents: "none",
              transform: "translate(0,0)",
              animation: `burstAnim 0.5s ease-out forwards`,
            }}
          />
        );
      })}

      <style>{`
        @keyframes burstAnim {
          0% { transform: translate(0,0) scale(1); opacity: 1; }
          100% { transform: translate(var(--x), var(--y)) scale(1.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Background;
