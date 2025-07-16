import React from 'react'

const SongItem = ({name, desc, image,id}) => {
  return (
    <div className='px-2 py-2 rounded cursor-pointer hover:bg-[#ffffff26] min-w-[180px]'>
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
      <img className="rounded" src={image} alt="" />
    </div>
  )
}

export default SongItem
