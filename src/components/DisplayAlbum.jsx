import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'; 
import { useContext } from 'react';

const DisplayAlbum = () => {
  const { id } = useParams()
  const albumdata = albumsData[id]

  const { play } = useContext(PlayerContext)
  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 rounded" src={albumdata.image} alt="" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumdata.name}</h2>
          <h4 >{albumdata.desc}</h4>
          <p className='mt-1'>
            <img className=" inline-block w-5" src={assets.spotify_logo} alt="" />
            <b>Spotify</b>
            .1,323,154 likes
            . <b>50 songs,</b>
            about 2 hr 30 min
          </p>
        </div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-[400px_1fr_1fr_100px_60px] gap-4 px-4 text-[#a7a7a7] mt-10 mb-4">
        <p># Title</p>
        <p className="hidden sm:block">Album</p>
        <p className="hidden lg:block">Date Added</p>
        <img className="w-4 hidden lg:block mx-auto" src={assets.clock_icon} alt="Duration" />
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div
        onClick={() => play(item)} 
          key={index}
          className="grid grid-cols-1 sm:grid-cols-[400px_1fr_1fr_100px_60px] gap-4 py-3 px-4 items-center text-[#a7a7a7] hover:bg-[#ffffff10] rounded group transition"
        >
          {/* 1. Song number + image + title + artist */}
          <div className="flex items-center gap-3 overflow-hidden">
            <p className="w-5 text-sm">{index + 1}</p>
            <img src={item.image} alt={item.name} className="w-10 h-10 rounded" />
            <div className="overflow-hidden">
              <p className="text-white font-medium truncate">{item.name}</p>
              <p className="text-sm truncate  w-full">{item.desc}</p>
            </div>
          </div>
          <p className="text-sm hidden sm:block truncate">{item.album || 'Top 50 Global'}</p>
          <p className="text-sm hidden lg:block">{item.date || '5Days ago'}</p>
          <p className="text-sm hidden sm:block text-right">{item.duration || '2:45'}</p>

          <div className="hidden group-hover:flex justify-center">
            <img src={assets.play_icon} alt="Play" className="w-4 cursor-pointer" />
          </div>
        </div>


      ))}

    </>

  )
}

export default DisplayAlbum
