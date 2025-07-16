import React from 'react';
import { assets } from '../assets/assets'; // your arrow icons go here
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-between items-center p-4  text-white font-medium ">

      {/* Left Side: Arrows + Filters */}
      <div className="flex-col items-center gap-5">
        {/* Back and Forward Arrows */}
        <div className="flex gap-2">
          <img onClick={() => navigate(-1)} className="w-8 h-8 bg-black border border-gray-600 p-2 rounded-full cursor-pointer" src={assets.arrow_left} alt="Back" />
          <img onClick={() => navigate(1)} className="w-8 h-8 bg-black border border-gray-600 p-2 rounded-full cursor-pointer" src={assets.arrow_right} alt="Forward" />
        </div>
        {/* Filters */}
        <div className="flex gap-2  mt-3 cursor-pointer">
          <button className="bg-white text-black px-4 py-1 rounded-2xl">All</button>
          <button className="bg-black border border-gray-500 px-4 py-1 rounded-2xl">Music</button>
          <button className="bg-black border border-gray-500 px-4 py-1 rounded-2xl">Podcasts</button>
        </div>
      </div>

      {/* Right Side: Explore, Install, Avatar */}
      <div className="flex items-center gap-4">
        <button className="hidden md:block bg-white text-black px-4 py-1 rounded-2xl">Explore Premium</button>
        <button className="bg-black border border-gray-500 px-4 py-1 rounded-2xl">Install App</button>
        <div className="bg-purple-600 w-7 h-7 rounded-full flex items-center justify-center text-black text-sm font-semibold">M</div>
      </div>
    </div>
  );
};

export default Navbar;
