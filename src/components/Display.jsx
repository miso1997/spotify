import React, { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import DisplayAlbum from './DisplayAlbum';
import DisplayHome from './DisplayHome';
import {albumsData} from '../assets/assets';

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();

  const isAlbum = location.pathname.includes("albums");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = isAlbum && albumsData[Number(albumId)]?.bgColor;

  // Correctly using useEffect
  useEffect(() => {
    if (isAlbum && bgColor) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current.style.background = "#121212";
    }
  }, [location.pathname]); // runs whenever the route changes

  return (
    <div
      ref={displayRef}
      className='w-full m-2 px-6 pt-4 rounded text-white overflow-auto lg:w-[100%] lg:ml-3'
    >
      <Routes>
        <Route path='/' element={<DisplayHome />} />
        <Route path='/albums/:id' element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
