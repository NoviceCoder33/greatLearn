import React, { createContext, useReducer, useContext } from "react";

const TasksContext = createContext();

const taskReducer = (state, action) => {
  switch (action.type) {
    case "SET_PROJECTS":
      return { ...state, projects: action.payload };
    case "ADD_PROJECT":
      return { ...state, projects: [...state.projects, action.payload] };
    case "SET_TASKS":
      return { ...state, tasks: action.payload };
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    default:
      return state;
  }
};

export const TasksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, { projects: [], tasks: [] });

  return (
    <TasksContext.Provider value={{ state, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);
