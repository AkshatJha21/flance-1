"use client"

import img from '../assets/hero-banner.jpg'
import mob from '../assets/hero-mobile.jpg'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

  const scrollToNext = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  return (
    <div
      className="h-screen relative"
      style={{
        background: `url(${isMobile ? mob : img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <div className='flex h-full items-center justify-center text-[#EDE6D6]/80 bg-[#131313]/30'>
          <div className='flex flex-col text-center gap-y-4 mt-4 md:mt-8'> 
            <motion.h1 
              className='font-cormorant text-4xl md:text-7xl'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.1, delay: 1 }}
            >
              Tad Ekam
            </motion.h1>
            <motion.p 
              className='font-avenir text-balance md:text-[20px] tracking-wider font-light'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.1, delay: 2 }}
            >
              Inspired by the Rig Veda
            </motion.p>
          </div>
        </div>
        <motion.div 
          onClick={scrollToNext} 
          className='absolute bottom-3 flex flex-col items-center w-full mx-auto animate-bounce -space-y-6 opacity-80 cursor-pointer'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
            <svg className="w-8 h-8 md:w-10 md:h-10 text-[#EDE6D6]/80" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
            </svg>
            <svg className="w-8 h-8 md:w-10 md:h-10 text-[#EDE6D6]/80" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
            </svg>
        </motion.div>
    </div>
  );
}
