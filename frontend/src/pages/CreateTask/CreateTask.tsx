import React, { useState } from "react";
import { createTask } from "../../api/tasks";

const CreateTask: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !description) {
      setErrorMessage("Both title and description are required.");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }
    try {
      await createTask(title, description);
      setTitle("");
      setDescription("");
      setSuccessMessage("Task created successfully! You but you may create another one.");
      setTimeout(() => setSuccessMessage(""), 5000);
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <div className="create container">
      <h2>Create a Task</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form
        onSubmit={handleSubmit}
        className="create-task-form">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          placeholder="Enter task title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          value={description}
          placeholder="Enter task description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateTask;
