import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="text-center flex items-center justify-between py-6 px-10 bg-gradient-to-r from-purple-800 to-indigo-800">
   <Link to="/" className='text-4xl font-extrabold '>🎬 Media Search</Link>
   <div className='flex gap-5 items-center'>
<Link className='px-4 py-2 rounded active:scale-95 bg-black text-white font-medium text-base'
 to='/'>Search</Link>
<Link className='px-4 py-2 rounded active:scale-95 bg-black text-white font-medium text-base' 
to="/collection">Collection</Link>
   </div>
  </div>
  )
}

export default Navbar
