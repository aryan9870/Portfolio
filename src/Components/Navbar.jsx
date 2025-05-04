import { useState } from 'react';
import React from 'react'
import logo from '../assets/logo.png';
import menu from '../assets/menu.png';
import contact from '../assets/contact.png';
import { Link } from 'react-scroll';
import './Navbar.css'

const Navbar = () => {

  const [showmenu, setshowmenu] = useState(false)

  function handleContactscroll() {
    document.querySelector(".contact").scrollIntoView({ behavior: 'smooth' })
  }

  function handleshow() {
    setshowmenu(!showmenu)
  }

  function aryanhandle() {
    setshowmenu(!showmenu)
  }

  return (
    <div>
      <div className='nav flex bg-transparent rounded-b-lg sm:justify-around justify-between px-6 sm:px-0 text-white items-center py-1 fixed w-full z-50'>
        <div className="logo">
          <img className='h-16' src={logo} alt="logo" />
        </div>
        <div className="menuButtons sm:flex list-none gap-10 hidden">
          <Link activeClass='active' to='home' spy={true} smooth={true} offset={0} duration={500} className="item font-semibold">Home</Link>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={0} duration={500} className="item font-semibold">About</Link>
          <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={0} duration={500} className="item font-semibold">Portfolio</Link>
          <Link activeClass='active' to='clint' spy={true} smooth={true} offset={0} duration={500} className="item font-semibold">Clints</Link>
        </div>
        <button onClick={handleContactscroll} className="contactMe border bg-slate-200 text-black text-sm py-3 px-8 rounded-3xl sm:flex hidden items-center gap-2 mb-3 sm:mb-0 hover:invert border-transparent hover:border-gray-900 hover:bg-transparent">
          <img className='h-4 mt-1 ' src={contact} alt="" />Contact me</button>

        <div className="menu sm:hidden" onClick={handleshow}>
          <img className='h-10' src={menu} alt="logo" />
        </div>
      </div>
      <div className={showmenu ? "flex" : "hidden"}>
          <div className='flex flex-col w-28 text-white bg-gray-800 gap-2 fixed z-50 right-24 top-10 rounded-md py-2 px-3'>
            <Link onClick={aryanhandle} activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className="mobItem">Home</Link>
            <Link onClick={aryanhandle} activeClass='active' to='about' spy={true} smooth={true} offset={0} duration={500} className="mobItem">About</Link>
            <Link onClick={aryanhandle} activeClass='active' to='portfolio' spy={true} smooth={true} offset={0} duration={500} className="mobItem">Portfolio</Link>
            <Link onClick={aryanhandle} activeClass='active' to='clint' spy={true} smooth={true} offset={0} duration={500} className="mobItem">Clints</Link>
            <Link onClick={aryanhandle} activeClass='active' to='contact' spy={true} smooth={true} offset={0} duration={500} className="mobItem">Contact</Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar