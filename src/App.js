import React from 'react';
// import Navbar from ".//components/Navbar";
import Counter from ".//components/Counter";
import AccountType from "./components/AccountType";
import BuyerReg from "./components/BuyerReg";
import SellerReg from "./components/SellerReg";
import Footer from "./components/Footer";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
   <>
   <Router>
  <div className="">
    <AccountType/>
        <Routes>
         <Route path="/buyerReg" element={<BuyerReg/>}/>
          <Route path="/sellerReg" element={<SellerReg/>}/>
        </Routes> 

  {/* <Navbar/> */}
        <Routes>
          <Route path="/Counter" element={<Counter/>}/>
        </Routes> </div>
    </Router>
    <Footer/>
   </>
  );
}

export default App;
