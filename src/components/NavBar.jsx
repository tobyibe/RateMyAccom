import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
 
const NavBar = () => {
    const [nav, setNav] = useState(true);
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='w-full text-white flex justify-between items-center p-5 border-b border-b-gray-700 '>
      <h1 className=' text-3xl font-bold text-green-300'>Rate My Accom</h1>
      <ul className='hidden sm:flex uppercase'>
          <li className='m-4 font-bold hover:border-b-2 hover:mb-2 cursor-pointer'>Log In</li>
          <li className='m-4 font-bold hover:border-b-2 hover:mb-2  cursor-pointer'>Sign Up</li>
          <li className='m-4 font-bold hover:border-b-2 hover:mb-2  cursor-pointer'>Contact Us</li>
          <li className='m-4 font-bold hover:border-b-2 hover:mb-2  cursor-pointer'>X/Twitter</li>
          <li className='m-4 font-bold hover:border-b-2 hover:mb-2  cursor-pointer'>Instagram</li>
      </ul>

      <div onClick={handleNav} className=' cursor-pointer sm:hidden'> 
          {!nav ? <AiOutlineClose size="2rem" /> : <AiOutlineMenu size="2rem"/>}
          
      </div>
      <div className={!nav? "fixed top-0 left-0 border-r-2 border-r-gray-700 w-[60%] h-full bg-[#232D3F] transition-all duration-500" : " fixed left-[-100%]  top-0 border-r-2 border-r-gray-700 w-[60%] h-full bg-[#232D3F] duration-500 transition-all"}>
          <h1 className='w-full text-xl font-bold text-green-300 p-4'>Rate My Accom</h1>
          <ul className=' rounded-lg uppercase'>
              <li className='p-4 border-b border-b-gray-700 hover:bg-gray-900 transition-all cursor-pointer'>Log In</li>
              <li className='p-4 border-b border-b-gray-700 hover:bg-gray-900 transition-all cursor-pointer'>Sign In</li>
              <li className='p-4 border-b border-b-gray-700 hover:bg-gray-900 transition-all cursor-pointer'>Contact Us</li>
              <li className='p-4 border-b border-b-gray-700 hover:bg-gray-900 transition-all cursor-pointer'>X/Twitter</li>
              <li className='p-4 border-b border-b-gray-700 hover:bg-gray-900 transition-all cursor-pointer'>Instagram</li>
          </ul>
      </div>
        
    </div>
  )
}

export default NavBar