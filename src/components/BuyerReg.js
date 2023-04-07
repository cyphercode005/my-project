import React from 'react'
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';


export default function BuyerReg() {
  return (
    <div className="buysellcolor volreg pt-10 flex justify-center items-center h-max pb-20">
    <div className="nav-Style px-6 py-6 rounded-lg shadow-lg">
      <h1 className="text-xl font-semibold text-gray-300 text-center mb-6">Sign In to My App

</h1>
      
      <div className="flex flex-col justify-center mt-2">
      <button className="flex p-2 mt-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition duration-300">
          <FaFacebook className="text-xl" /> <span className='px-12'>Continue With FaceBook</span> 
        </button>
        <button className="connect text-white flex mt-2 p-2 border-gray-700 border-b border-l border-t border-r">
          <FaGoogle className="text-xl" /><span className='px-12'>Continue With Google</span> 
        </button>
        
        <button className="connect flex mt-2 p-2 border-gray-700 border-b border-l border-t border-r text-white">
          <FaApple className="text-xl" /><span className='px-12'>Continue With Apple</span> 
        </button>
      </div>
      <p className="mt-4 text-gray-600 text-sm text-center">
        Or login with
      </p>
      <form>
        <div className="my-4">
          <input
            className="w-full bg-transparent placeholder-gray-500 placeholder-opacity-50 px-3 py-2 border-b border-t border-l border-r border-gray-600 rounded-sm outline-none text-Placeholder"
            type="email"
            name="email"
            id="email"
            placeholder="Enter / Username"
            required
          />
        </div>
        <div className="">
          <input
            className="w-full bg-transparent placeholder-gray-500 placeholder-opacity-50 px-3 py-2 border-b border-t border-l border-r border-gray-600 rounded-sm outline-none text-Placeholder"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <button
          className=" mt-4 continue w-full px-4 py-2 rounded-sm"
          type="submit"
        >
          Continue
        </button>
      </form>
      <p className="mt-4 text-gray-600 text-sm text-center">
        Don't have an account?{' '}
        <a href="#signup" className="text-blue-500 hover:text-blue-600 transition duration-300">
          Sign up
        </a>
      </p>
    </div>
  </div>

    )
}
