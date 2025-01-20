import React, { useEffect, useState } from "react";
import api from "../../services/api";

const Tasks = ({ projectId }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await api.get(`/tasks/${projectId}`);
        setTasks(res.data);
      } catch (error) {
        console.error("Error fetching tasks", error.response?.data?.message);
      }
    };

    fetchTasks();
  }, [projectId]);

  return (
    <div>
      <h1>Tasks</h1>
      {tasks.map((task) => (
        <div key={task._id}>
          <h3>{task.title}</h3>
          <p>Status: {task.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
