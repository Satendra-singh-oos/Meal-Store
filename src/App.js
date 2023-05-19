
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { Routes , Route} from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import Categories from './Components/Categories/Categories';
import RandomMeal from './Components/RandomMeal/RandomMeal';
import Error from './utils/Error';

function App() {
  return (
    <div className="App">

  <Navbar />
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/random-meal" element={<RandomMeal />} />
    <Route path="*" element={<Error />} />
  </Routes>
  <Footer/> 
    </div>
  );
}

export default App;
