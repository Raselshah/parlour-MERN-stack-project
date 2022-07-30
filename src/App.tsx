import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import BookingDetails from "./Components/Booking/BookingDetails/BookingDetails";
import BookingList from "./Components/Booking/BookingList/BookingList";
import BookingNavbar from "./Components/Booking/BookingNavbar/BookingNavbar";
import Review from "./Components/Booking/Review/Review";
import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/HomePage/Navbar/Navbar";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  return (
    <div className="bg-accent App">
      <div className="max-w-screen-2xl mx-auto px-12">
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/booking" element={<BookingNavbar/>} >
            <Route path="book" element={<BookingDetails />} />
            <Route path="bookingList" element={<BookingList />} />
            <Route path="review" element={<Review />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
