import React from 'react';
import './App.css';
import Banner from './Components/HomePage/Banner/Banner';
import Navbar from './Components/HomePage/Navbar/Navbar';

function App() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <Navbar/>
      <Banner/>
    </div>
  );
}

export default App;
