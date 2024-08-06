import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <section className="home center">
      <div className="container center">
        <h1>Welcome to TaskBuddy!</h1>
        <h2>Your personal task manager</h2>
        <p>
          Create and complete your tasks to achieve your goals! With TaskBuddy,
          you can easily organize your day-to-day activities, set priorities,
          and accomplish more. Our intuitive interface allows you to quickly
          add, edit, and check off tasks as you go. Stay focused, stay
          motivated, and make your dreams a reality with TaskBuddy.
        </p>
        <NavLink to="/create">Create Your First Task</NavLink>
      </div>
    </section>
  );
};

export default Home;
