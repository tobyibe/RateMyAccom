import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiMenuFill } from "react-icons/ri";
import { useState } from 'react';
import { FiHome } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
const NavBar = () => {
  const [nav, setNav] = useState(false) //Nav state used for moving the navbar on mobile devices when menu button is clicked

  const handleNav = () => {
    setNav(!nav);
  }
  
  return (
    <nav className='flex justify-end sm:justify-between p-5 bg-[#344e41]'>
      <div className='hidden sm:flex space-x-5'>
        <FaInstagram size="2rem"/>
        <FaXTwitter size="2rem"/>  
        <FiHome size="2rem"/>            
      </div>
      <div className='sm:flex space-x-5 hidden'>
        <button className=' text-xl font-semibold border-black hover:border-b-2'>Log In</button>
        <button className=' text-xl font-semibold border-black hover:border-b-2'>Sign In</button>
      </div>  
       
      <div className={!nav?"flex flex-col space-y-5 fixed left-[-100%] sm:hidden transition-all bg-[#dad7cd] rounded-lg" : 'fixed flex flex-col space-y-5 left-5 px-5 sm:hidden transition-all bg-[#dad7cd] rounded-lg'}>
        <ul className=' rounded-lg '>
            <li className='p-4 border-b border-b-black transition-all cursor-pointer'>Sign In</li>
            <li className='p-4 border-b border-black transition-all cursor-pointer'>Log In</li>
            <li className='p-4 border-b border-b-black transition-all cursor-pointer'>Home</li>
            <li className='p-4 border-b border-black transition-all cursor-pointer'>Twitter/X</li>
            <li className='p-4  cursor-pointer'>TikTok</li>
        </ul>
      </div>
      <div className='sm:hidden ' onClick={handleNav}>
        {!nav? <RiMenuFill size="2rem" /> : <IoMdClose size="2rem" />}   
      </div>  
    </nav>
  )
}

export default NavBar;   