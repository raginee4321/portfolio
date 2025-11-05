import React from "react";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4 text-center"
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-300 mb-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          I’m a passionate Front-End Developer skilled in building modern,
          responsive, and user-friendly web interfaces using React, Next.js,
          HTML, CSS, and Tailwind CSS. I focus on clean code, accessibility,
          and performance while turning design ideas into engaging digital
          experiences. I love creating interactive UIs and continuously improving
          my skills through hands-on projects.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Skills */}
          <div className="card p-6 bg-gray-800 rounded-2xl shadow-md">
            <h3 className="font-bold text-xl mb-2 text-indigo-400">Skills</h3>
            <ul className="text-gray-300 mt-2 list-disc list-inside space-y-1">
              <li>HTML5 / CSS3 (Flexbox, Grid)</li>
              <li>JavaScript (ES6+)</li>
              <li>React.js / Next.js</li>
              <li>Tailwind CSS</li>
              <li>Responsive Web Design</li>
              <li>Basic Node.js / Express.js understanding</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="card p-6 bg-gray-800 rounded-2xl shadow-md">
            <h3 className="font-bold text-xl mb-2 text-indigo-400">Tools</h3>
            <ul className="text-gray-300 mt-2 list-disc list-inside space-y-1">
              <li>VS Code</li>
              <li>Git / GitHub</li>
            </ul>
          </div>

          {/* Education */}
          <div className="card p-6 bg-gray-800 rounded-2xl shadow-md">
            <h3 className="font-bold text-xl mb-2 text-indigo-400">Education</h3>
            <p className="text-gray-300 mt-2">
              <strong>BCS – Bachelor of Computer Science</strong>
            </p>
          </div>
        </div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold mb-4 text-center text-indigo-400">
            Projects
          </h3>
          <ul className="text-gray-300 list-disc list-inside space-y-3">
            <li>
              <strong>Kanban Board (React)</strong> – Built an interactive task
              management board with drag-and-drop functionality using React
              Beautiful DnD. Managed state locally without a database.
            </li>
            <li>
              <strong>Crypto Tracker App</strong> – Real-time cryptocurrency price
              tracker built with React and Redux Toolkit, featuring live updates
              and filtering.
            </li>
            <li>
              <strong>Taekwondo Association Website</strong> – Designed a responsive
              React website for event management, news, and gallery sections.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
