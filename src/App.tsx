import React from "react";
import "./App.css";
import Banner from "./Components/HomePage/Banner/Banner";
import Navbar from "./Components/HomePage/Navbar/Navbar";
import Services from "./Components/HomePage/Services/Services";
import Treatment from "./Components/HomePage/Treatment/Treatment";

function App() {
  return (
    <div className="bg-accent">
      <div className="max-w-screen-2xl mx-auto ">
        <Navbar />
        <Banner />
        <Services />
        <Treatment/>
      </div>
    </div>
  );
}

export default App;
