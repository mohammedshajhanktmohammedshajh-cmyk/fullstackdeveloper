
import { useState } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import "./App.css";
import Login from "./modules/login";
import Register from "./modules/register";
import Dashboard from "./dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
