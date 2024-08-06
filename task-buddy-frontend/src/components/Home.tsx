import React, { useState, useEffect } from "react";
import { fetchTasks } from "../api/tasks";

type Task = {
  title: string;
  description: string;
};

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  // const [newTask, setNewTask] = useState({ title: '', description: '' })

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await fetchTasks();
        console.log(data)
        setTasks(data);
      } catch (e) {
        console.log(e);
      }
    };
    loadTasks();
  }, []);

  return (
    <div>
      <h1>Welcome to TaskBuddy!</h1>
      <p>Your personal task manager</p>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task: Task, index) => (
          <li key={index}>
            {task.title} - {task.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
