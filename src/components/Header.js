import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ background: "#333", color: "#fff", padding: "10px" }}>
      <nav>
        <Link to="/" style={{ margin: "0 10px", color: "#fff" }}>
          Home
        </Link>
        <Link to="/about" style={{ margin: "0 10px", color: "#fff" }}>
          About
        </Link>
        <Link to="/news" style={{ margin: "0 10px", color: "#fff" }}>
          News
        </Link>
        <Link to="/contact" style={{ margin: "0 10px", color: "#fff" }}>
          Contact Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
