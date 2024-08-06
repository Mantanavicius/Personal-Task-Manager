import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="main-header between">
      <NavLink to="/" className="logo">
        <h1>
          Task<span>Buddy</span>
        </h1>
      </NavLink>
      <nav className="center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tasks">Tasks</NavLink>
        <NavLink to="/create">Create new task +</NavLink>
      </nav>
    </header>
  );
};

export default Header;
