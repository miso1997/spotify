import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Correct import

const Albumitem = ({ id, name, desc, image }) => {  // ✅ Added id to props
  const navigate = useNavigate(); // ✅ Corrected hook name

  return (
    <div 
      onClick={() => navigate(`/albums/${id}`)}  // ✅ Corrected onClick
      className='px-2 py-2 rounded cursor-pointer hover:bg-[#ffffff26] min-w-[180px]'
    >
      <img className="rounded w-full mb-2" src={image} alt={name} /> {/* Image above text for better layout */}
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  );
};

export default Albumitem;
