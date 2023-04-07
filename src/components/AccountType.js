import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AccountType() {
  const [showBuyerSellerLinks, setShowBuyerSellerLinks] = useState(true);

  const handleBuyerSellerLinkClick = () => {
    setShowBuyerSellerLinks(false);
  };

  return (
    <div className=''>
     <nav className="nav-Style flex px-20 py-3 items-center border-b border-gray-600">
  <h1 className="text-3xl font-bold"><a href="/">Project</a></h1>
  <div className="flex items-center">
    <div className="flex items-center">
      
      <input className="w-96 ml-5 px-3 py-1 text-Placeholder placeholder-gray-500 placeholder-opacity-50 outline-none bg-transparent font- rounded-sm border-b border-t border-l border-gray-600" type="text" name="search" id="search" placeholder="What services you are looking for today?" />
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 py-2 search" fill="none" viewBox="0 0 24 24" stroke="white">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
    <ul className="ml-28 flex items-center space-x-6">
      <li className=" nav-li"> <a href="#">Business </a> </li>
      <li className=" nav-li"> <a href="#">Explore </a> </li>
      <li className=" nav-li"> <a href="#">English </a> </li>
      <li className=" nav-li"> <a href="#">Become a Seller </a> </li>
      <li className=" nav-li"> <a href="#">Sign In </a> </li>
      <li className="nav-spec-li border hover:border-transparent px-2 py-0 rounded-sm"> <a href="#">Join</a> </li>
    </ul>
  </div>
</nav>   
<div>
<ul className="nav-Style flex items-center justify-center space-x-6 py-1 border-b border-gray-600">
      <li className=" nav-li"> <a href="#">Graphics & Design </a> </li>
      <li className=" nav-li"> <a href="#">Digital Marketing </a> </li>
      <li className=" nav-li"> <a href="#">Writing & Transation </a> </li>
      <li className=" nav-li"> <a href="#">Video & Animation </a> </li>
      <li className=" nav-li"> <a href="#">Music & Audio </a> </li>
      <li className=" nav-li"> <a href="#">Programming & Tech </a> </li>
      <li className=" nav-li"> <a href="#">Photography </a> </li>
      <li className=" nav-li"> <a href="#">Business </a> </li>
      <li className=" nav-li"> <a href="#">AI Services </a> </li>
    </ul>
</div>
      <div className='buysellcolor'>
        {showBuyerSellerLinks && ( // Render Buyer/Seller links only if showBuyerSellerLinks is true
      // <span>haha</span>
      <div className='py-32'> 
        <span className='areYou text-9xl items-center flex justify-center'>Are You ?</span>
          <div className="items-center flex justify-around px-60 mt-20">
      <span className="buySell text-6xl">
        <Link to="/buyerReg" onClick={handleBuyerSellerLinkClick}>
          BUYER
        </Link>
      </span>
      <span className="buySell text-6xl">
        <Link to="/sellerReg" onClick={handleBuyerSellerLinkClick}>
          SELLER
        </Link>
      </span>
    </div></div>
        )}
        {/* Render content based on whether Buyer/Seller links are hidden or not */}
        {!showBuyerSellerLinks && (
          <div className='buysellcolor'>
          </div>
        )}
      </div>
    </div>
  );
}
