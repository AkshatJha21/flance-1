"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import logo from '../assets/navLight.png';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <div className={`font-cormorant fixed flex px-4 items-center justify-between top-0 left-0 w-full z-20 transition-colors duration-300 ${scrolled ? 'bg-[#131313] shadow-sm' : ''}`}>
      <div className='flex items-center space-x-4 font-avenir font-light text-lg' onClick={() => router.push('/')}>
        <Image src={logo} alt="sarvatva" width={240}/>
      </div>
      <div className='lg:hidden flex items-center text-[#EDE6D6]/80'>
        <button onClick={toggleMenu} className="flex items-center">
          {menuOpen ? (
            <svg className="w-6 h-6 text-[#EDE6D6]/80" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m16 14-4-4-4 4"/>
          </svg>
          ) : (
            <svg className="w-6 h-6 text-[#EDE6D6]/80" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
            </svg>
          )}
        </button>
      </div>
      <div className={`hidden lg:flex space-x-2 md:gap-x-4 text-sm md:text-md`}>
          <p className={`py-4 md:px-4 text-[18px] font-semibold rounded transition-all ${scrolled ? 'hover:text-[#EDE6D6]/80 text-[#EDE6D6]' : 'text-[#EDE6D6]/80 hover:bg-black hover:bg-opacity-30 hover:text-[#EDE6D6]'}`} onClick={() => router.push('/collection')}>Vedic Furniture</p>
          <p className={`py-4 md:px-4 text-[18px] font-semibold rounded transition-all ${scrolled ? 'hover:text-[#EDE6D6]/80 text-[#EDE6D6]' : 'text-[#EDE6D6]/80 hover:bg-black hover:bg-opacity-30 hover:text-[#EDE6D6]'}`} onClick={() => router.push('/about')}>The Craft of Wholeness</p>
          <p className={`py-4 md:px-4 text-[18px] font-semibold rounded transition-all ${scrolled ? 'hover:text-[#EDE6D6]/80 text-[#EDE6D6]' : 'text-[#EDE6D6]/80 hover:bg-black hover:bg-opacity-30 hover:text-[#EDE6D6]'}`} onClick={() => router.push('/connect')}>Let's Connect</p>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <DropdownMenu />
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar

const DropdownMenu = () => {
    return (
        <motion.div 
            className='lg:hidden absolute mt-4 left-0 right-0 top-full z-50 w-[95%] md:w-[50%] mx-auto '
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
        >
            <div className='flex flex-col bg-[#131313] border-[0.5px] border-[#EDE6D6]/10 rounded-md shadow-lg'>
                <p className={`py-4 text-[18px] transition-all text-[#EDE6D6]/80 border-b-[0.5px] border-[#EDE6D6]/10 px-6`}>Vedic Furniture</p>
                <p className={`py-4 text-[18px] transition-all text-[#EDE6D6]/80 border-b-[0.5px] border-[#EDE6D6]/10 px-6`}>The Craft of Wholeness</p>
                <p className={`py-4 text-[18px] transition-all text-[#EDE6D6]/80 px-6`}>Let's Connect</p>
            </div>
        </motion.div>
    )
  }