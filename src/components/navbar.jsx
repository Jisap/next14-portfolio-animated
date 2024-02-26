"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import NavLink from "./navLink"
import { motion } from "framer-motion"

const links = [
  {url: "/", title: "Home"},
  {url: "/about", title: "About"},
  {url: "/portfolio", title: "Portfolio"},
  {url: "/contact", title: "Contact"}
]

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const topVariants={
    closed:{
      rotate: 0,
    },
    opened:{
      rotate: 45,
      backgroundColor: "rgb(255,255,255)"
    }
  }
  const centerVariants={
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    }
  }
  const bottomVariants={
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)"
    }
  }

  const listVariants = {
    closed: {
      x: "100vw"
    },
    opened: {
      x: 0,
      transition:{
        when: "beforeChildren",
        staggerChildren: 0.2,
      }
    }
  }

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    }
  }

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
      
      {/* Links Page */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* LOGO */}
      <div className="md:hidden lg:flex xl:justify-center xl:w-1/3">
        <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
          <span className="text-white mr-1">Design</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">.dev</span>
        </Link>
      </div>

      {/* Socials links */}
      <div className="hidden md:flex gap-4 w-1/3 justify-end"> 
        <Link href="#">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/facebook.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/pinterest.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/dribbble.png" alt="" width={24} height={24} />
        </Link>
      </div>

      {/* Responsive Menu */}
      <div className="md:hidden">
        {/* Menu Button */}
        <button 
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}  
        >
          <motion.div 
            className="w-10 h-1 bg-black rounded origin-left" 
            variants={topVariants}
            animate={open ? "opened" : "closed"}
          >
          </motion.div>
          <motion.div 
            className="w-10 h-1 bg-black rounded" 
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
          >
          </motion.div>
          <motion.div 
            className="w-10 h-1 bg-black rounded origin-left" 
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}  
          >
          </motion.div>
        </button>
        {/* Menu List */}
        {open && (
          <motion.div 
          className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col
          items-center justify-center gap-8 text-4xl z-40"
          variants={listVariants}
          initial="closed"
          animate="opened"
          >
            {links.map((link) => (
              <motion.div key={link.title} variants={listItemVariants}>
                <Link 
                  href={link.url}  
                >
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

    </div>
  )
}

export default Navbar