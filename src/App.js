
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { Routes , Route} from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import Categories from './Components/Categories/Categories';
import Error from './utils/Error';
import SinglePage from './Components/SinglePage/SinglePage';

function App() {
  return (
    <div className="App">

  <Navbar />
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/meal/:id" element={<SinglePage />} />
    <Route path="*" element={<Error />} />
  </Routes>
  <Footer/> 
    </div>
  );
}

export default App;
