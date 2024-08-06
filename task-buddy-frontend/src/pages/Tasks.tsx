import React, { useState, useEffect } from "react";
import Task from "../models/Task";
import { fetchTasks } from "../api/tasks";

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      const tasks = await fetchTasks();
      setTasks(tasks);
    };
    loadTasks();
  }, []);
  return (
    <div>
      <ul>
        {tasks.map((task: Task) => (
          <li key={task._id}>
            {task.title} - {task.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
