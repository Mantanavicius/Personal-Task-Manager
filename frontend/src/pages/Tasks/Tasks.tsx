import "./Tasks.css";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Task } from "../../models/Task";
import { fetchTasks, deleteTask } from "../../api/tasks";
import TaskItem from "../../components/Task/TaskItem";

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadTasks = async () => {
      const tasks = await fetchTasks();
      setTasks(tasks);
      setLoading(false);
    };
    loadTasks();
  }, [tasks]);

  const handleDelete = async (id: string) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  const handleUpdate = (updatedTask: Task) => {
    setTasks(
      tasks.map((task) => (task._id === updatedTask._id ? updatedTask : task))
    );
  };

  return (
    <div className="tasks container">
      <h2>Your Tasks:</h2>
      {loading ? (
        <div className="loading">Loading tasks...</div>
      ) : (
        <ul>
          {tasks.length > 0 ? (
            tasks.map((task: Task) => (
              <li key={task._id}>
                <TaskItem
                  {...task}
                  onDelete={() => handleDelete(task._id)}
                  onUpdate={handleUpdate}
                />
              </li>
            ))
          ) : (
            <div className="container">
              <h3>
                It seems that currently you have no created tasks, but you can
                create one by clicking the button below
              </h3>
              <NavLink
                className="btn"
                to="/create">
                Create Your First Task!
              </NavLink>
            </div>
          )}
        </ul>
      )}
    </div>
  );
};

export default Tasks;
