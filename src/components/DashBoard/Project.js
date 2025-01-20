import React, { useEffect, useState } from "react";
import api from "../../services/api";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await api.get("/projects");
        setProjects(res.data);
      } catch (error) {
        console.error("Error fetching projects", error.response?.data?.message);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>{project.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
