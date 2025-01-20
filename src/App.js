import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Projects from "./components/Dashboard/Projects";
import { AuthProvider } from "./context/AuthContext";
import { TasksProvider } from "./context/TasksContext";
import "./styles.css";

const App = () => {
  return (
    <AuthProvider>
      <TasksProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Projects />} />
          </Routes>
        </Router>
      </TasksProvider>
    </AuthProvider>
  );
};

export default App;
