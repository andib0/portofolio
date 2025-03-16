import React from "react";

const page = () => {
  return (
    <div style={{ height: "100vh" }}>
      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          maxWidth: "600px",
          margin: "2rem auto",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <li
          style={{
            background: "linear-gradient(45deg, #ff6b6b, #feca57)",
            margin: "1rem 0",
            padding: "1rem",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease",
          }}
        >
          <h3 style={{ margin: 0, color: "#fff" }}>Exciting Feature</h3>
          <p style={{ margin: "0.5rem 0 0", color: "#f8f8f8" }}>
            Discover our groundbreaking innovation
          </p>
        </li>
        <li
          style={{
            background: "linear-gradient(45deg, #54a0ff, #5f27cd)",
            margin: "1rem 0",
            padding: "1rem",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease",
          }}
        >
          <h3 style={{ margin: 0, color: "#fff" }}>Amazing Experience</h3>
          <p style={{ margin: "0.5rem 0 0", color: "#f8f8f8" }}>
            Immerse yourself in a world of possibilities
          </p>
        </li>
        <li
          style={{
            background: "linear-gradient(45deg, #ff9ff3, #feca57)",
            margin: "1rem 0",
            padding: "1rem",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease",
          }}
        >
          <h3 style={{ margin: 0, color: "#fff" }}>Unbeatable Value</h3>
          <p style={{ margin: "0.5rem 0 0", color: "#f8f8f8" }}>
            Get more for less with our exclusive offers
          </p>
        </li>
      </ul>
    </div>
  );
};

export default page;
