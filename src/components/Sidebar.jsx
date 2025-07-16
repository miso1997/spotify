import React from 'react'
import { assets } from '../assets/assets'
import liked from '../assets/liked.png'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <aside className=" hidden lg:flex lg:w-64  bg-zinc-900 flex flex-col space-y-10 p-4 text-white rounded">
      {/* Navigation */}
      <nav className="space-y-4">
        <div  onClick={()=>navigate('/')}className="flex items-center gap-3 text-sm hover:text-green-500 cursor-pointer">
          <img src={assets.home_icon} className="w-6" alt="" />
          Home
        </div>
        <div className="flex items-center gap-3 text-sm hover:text-green-500 cursor-pointer">
          <img src={assets.search_icon} className="w-6" alt="" />
          Search
        </div>
      </nav>

      <hr className="my-5 border-zinc-700" />

      {/* Library */}
      <div className="text-sm mt-0">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <img className="w-5" src={assets.stack_icon} alt="" />
            Your Library
          </div>
          <div className="flex gap-2">
            <img className="w-4" src={assets.arrow_icon} alt="" />
            <img className="w-4" src={assets.plus_icon} alt="" />
          </div>
        </div>

        <div className="mb-4 flex items-center gap-2">
          <img className="w-6" src={liked} alt="Liked" />
          <p>Liked Songs</p>
        </div>

        <div className="space-y-4">
          <div className="bg-zinc-800 p-4 rounded">
            <p className="font-semibold mb-1">Create your first playlist</p>
            <p className="text-xs text-zinc-400 mb-3">It's easy — we'll help you</p>
            <button className="bg-white text-black text-sm px-4 py-1.5 rounded-full">Create Playlist</button>
          </div>

          <div className="bg-zinc-800 p-4 rounded">
            <p className="font-semibold mb-1">Let's find some podcasts to follow</p>
            <p className="text-xs text-zinc-400 mb-3">We'll keep you updated</p>
            <button className="bg-white text-black text-sm px-4 py-1.5 rounded-full">Browse Podcasts</button>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
