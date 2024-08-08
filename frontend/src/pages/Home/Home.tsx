import React from "react";
import { NavLink } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <section className="home">
      <div className="container">
        <h1>Welcome to TaskBuddy!</h1>
        <h2>Your personal task manager</h2>
        <h3>
          Create and complete your tasks to achieve your goals! With TaskBuddy,
          you can easily organize your day-to-day activities, set priorities,
          and accomplish more. Our intuitive interface allows you to quickly
          add, edit, and check off tasks as you go. Stay focused, stay
          motivated, and make your dreams a reality with TaskBuddy.
        </h3>
        <NavLink className="btn" to="/create">Create Your First Task</NavLink>
      </div>
    </section>
  );
};

export default Home;
