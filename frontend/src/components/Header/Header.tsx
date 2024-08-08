import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <NavLink to="/" className="logo">
        <h2>
          Task<span>Buddy</span>
        </h2>
      </NavLink>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tasks">Tasks</NavLink>
        <NavLink to="/create">Create a new task +</NavLink>
      </nav>
    </header>
  );
};

export default Header;
