import React from 'react'
import { motion } from 'framer-motion'

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 px-4">
        <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y:0, opacity:1 }} transition={{ duration: 0.7 }} className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Hi, I'm Raginee Sharma.
        </motion.h1>

        <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y:0, opacity:1 }} transition={{ delay: 0.2 }} className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
         I’m a Front-End Developer skilled in creating responsive, modern, and user-friendly web interfaces using React, Tailwind CSS, and JavaScript
        </motion.p>

        {/* Buttons - editable styles */}
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.4 }} className="flex justify-center items-center space-x-4 mt-6">
          <a href="#projects" className="bg-accent text-white px-6 py-3 rounded font-medium transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            View Projects
          </a>

          <a href="#contact" className="border border-white/10 text-white px-6 py-3 rounded font-medium transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/5">
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  )
}
