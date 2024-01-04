// src/components/TaskList.js

import React, { useState, useEffect } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:8080/api/tasks') // Replace with your actual API URL
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch tasks.');
        }
        return response.json();
      })
      .then(data => {
        setTasks(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading tasks...</p>;
  if (error) return <p>An error occurred: {error}</p>;

  const filteredTasks = tasks.filter(task => task.isCompleted === showCompleted);

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <input type="checkbox" checked={task.isCompleted} readOnly />
          {task.title}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
