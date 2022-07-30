import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/HomePage/Navbar/Navbar";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  return (
    <div className="bg-accent">
      <div className="max-w-screen-2xl mx-auto px-12">
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signUp" element={<SignUp/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
