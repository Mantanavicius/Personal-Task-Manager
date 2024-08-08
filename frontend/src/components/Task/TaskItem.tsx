import React, { useState } from "react";
import "./TaskItem.css";
import { Task } from "../../models/Task";
import { updateTask } from "../../api/tasks";

interface TaskItemProps extends Task {
  onDelete: () => void;
  onUpdate: (task: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  title,
  description,
  _id,
  completed,
  onDelete,
  onUpdate,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [isCompleted, setIsCompleted] = useState(completed || false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCompletedChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newCompletedStatus = e.target.checked;
    setIsCompleted(newCompletedStatus);
    await updateTask(_id, newTitle, newDescription, newCompletedStatus);
    onUpdate({
      _id,
      title: newTitle,
      description: newDescription,
      completed: newCompletedStatus,
    });
  };

  const handleSave = async () => {
    if (!newTitle || !newDescription) {
      setErrorMessage("Both title and description are required.");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }
    await updateTask(_id, newTitle, newDescription, isCompleted);
    setIsEditing(false);
    onUpdate({
      _id,
      title: newTitle,
      description: newDescription,
      completed: isCompleted,
    });
  };

  return (
    <div className={`task-item ${isCompleted ? "completed" : ""}`}>
      <div className="task-header">
        <h3>{title}</h3>
        <div className="checkbox-wrapper-31">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={handleCompletedChange}
          />
          <svg viewBox="0 0 35.6 35.6">
            <circle
              className="background"
              cx="17.8"
              cy="17.8"
              r="17.8"></circle>
            <circle
              className="stroke"
              cx="17.8"
              cy="17.8"
              r="14.37"></circle>
            <polyline
              className="check"
              points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
          </svg>
        </div>
      </div>
      <div className="actions-description-wrapper">
        <p>{description}</p>
        <div className="task-actions">
          <button
            onClick={() => setIsEditing(true)}
            disabled={isCompleted}>
            Edit
          </button>
          <button
            onClick={onDelete}
            disabled={isCompleted}>
            Delete
          </button>
        </div>
      </div>
      {isEditing && (
        <div className="modal-overlay">
          <div className="create container">
            <h2>Edit a Task</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSave();
              }}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
              <button type="submit">Save</button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
