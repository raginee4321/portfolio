import React from 'react'
import { motion } from 'framer-motion'

export const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
        <p className="text-gray-300 mb-6">Feel free to reach out for collaborations or freelance work.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div whileHover={{ y: -4 }} className="card p-4 rounded-lg bg-white/5">
            <h3 className="font-bold mb-1">Email</h3>
            <a
              href="mailto:sraginee412@gmail.com"
              className="text-accent underline text-sm"
            >
              sraginee412@gmail.com
            </a>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="card p-4 rounded-lg bg-white/5">
            <h3 className="font-bold mb-2">Social</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/in/raginee-sharma-08a256282/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/raginee4321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
