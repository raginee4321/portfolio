import React from 'react'
import { motion } from 'framer-motion'

export const Experience = () => {
  const jobs = [
    { id:1, role:'Frontend Intern', company:'Uzence Design Studio', period:'Present', desc:'Working on Design Components.' },
    { id:2, role:'Math Teacher', company:'Local School', period:'2020 - 2023', desc:'Taught math and mentored students.' }
  ]

  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>

        <div className="space-y-4">
          {jobs.map(j => (
            <motion.div key={j.id} className="card p-4" whileHover={{ x:4 }}>
              <div className="flex justify-between">
                <div>
                  <h3 className="font-bold">{j.role}</h3>
                  <p className="text-gray-300 text-sm">{j.company}</p>
                </div>
                <div className="text-sm text-gray-400">{j.period}</div>
              </div>
              <p className="text-gray-300 mt-2">{j.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
