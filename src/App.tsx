
import React, { useEffect, useState } from 'react';
import './App.css';
import Loader from './components/globalLoader/Loader';
import { ErrorModel } from './components/globalErrorModel/ErrorModel';
import AxiosInstance from './axios/globalAxios';
import { store } from './redux/store';
import Toolbar from './pages/Toolbar';
import About from './pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Perlinim from './pages/Perlinim';
import AddToCard from './pages/AddToCard';
import Sweet from './pages/Sweet';
import Personal_Customization from './pages/Personal_Customization';
import Shopping from './pages/Shopping';
import Payment from './pages/Payment';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {

  useEffect(() => {
  }, []);
  useEffect(() => {
    AxiosInstance(store);
  }, []);
  return (
    <div>
      <Toolbar />
      {<ErrorModel></ErrorModel>}
      {<Loader />}
      <Routes>
        {/* ... נתיבים אחרים ... */}
        {/* <Route path="/tool-us" element={<Toolbar />} /> */}
        <Route path="/Home" element={<Home />} />

        <Route path="/about-us" element={<About />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Perlinim" element={<Perlinim />} />
        <Route path="/AddToCard" element={<AddToCard />} />
        <Route path="/Sweet" element={<Sweet />} />
        <Route path="/Personal_Customization" element={<Personal_Customization />} />
        <Route path="/Shopping" element={<Shopping />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

        {/* ... נתיבים אחרים ... */}
      </Routes>
    </div>
  );

}
export default App;