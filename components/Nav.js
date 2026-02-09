import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const Nav = ()=>{
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(()=>{
    const onScroll = ()=> setScrolled(window.scrollY>24)
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <header className={`fixed w-full z-40 transition-all ${scrolled? 'backdrop-blur-md bg-black/40 py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Image src="/logo.svg" alt="CyberSec" width={140} height={36} />
        </div>

        <nav className="hidden md:flex gap-8 items-center text-gray-200">
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#blog" className="hover:text-white">Blog</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 rounded-md border border-gray-700 text-sm">Login</button>
          <button className="px-4 py-2 rounded-md text-sm gradient-btn text-white btn-glow" style={{'--from':'#8B5CF6','--to':'#3B82F6'}}>Sign Up</button>
        </div>

        <div className="md:hidden">
          <button onClick={()=>setOpen(true)} aria-label="Open menu" className="p-2">
            <FiMenu size={22} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-50 bg-black/60">
            <div className="absolute right-0 top-0 w-3/4 max-w-xs h-full bg-[#0b1220] p-6 glass">
              <div className="flex justify-end"><button onClick={()=>setOpen(false)}><FiX size={20} /></button></div>
              <nav className="mt-8 flex flex-col gap-4">
                <a href="#pricing" onClick={()=>setOpen(false)}>Pricing</a>
                <a href="#blog" onClick={()=>setOpen(false)}>Blog</a>
                <a href="#contact" onClick={()=>setOpen(false)}>Contact</a>
              </nav>
              <div className="mt-6 flex gap-3">
                <button className="px-3 py-2 border rounded">Login</button>
                <button className="px-3 py-2 rounded gradient-btn text-white" style={{'--from':'#8B5CF6','--to':'#3B82F6'}}>Sign Up</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Nav
