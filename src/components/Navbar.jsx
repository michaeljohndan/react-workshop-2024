import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <header className="header">
      <a href="/" className="name">
        Name
      </a>

      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Portfolio</a>
        <a href="/">Contact</a>
      </nav>
    </header>
  );
};
