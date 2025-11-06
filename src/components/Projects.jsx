import React from 'react';
import { motion } from 'framer-motion';
import kanban from '../assets/kanban.png';  // Correct import of image

export const Projects = () => {
  const items = [
    { 
      id: 1, 
      title: 'Kanban Board Component', 
      description: 'An interactive Kanban board built with React and Storybook, featuring drag-and-drop task management and customizable columns.', 
      tech: ['React', 'Storybook', 'Vite'], 
      image: kanban,  // Use imported image variable here
      repo: 'https://github.com/raginee4321/kanban-component-raginee', 
      live: 'https://kanbanboardraginee.netlify.app/', 
      storybook: 'https://raginee4321.github.io/kanban-component-raginee/?path=/story/components-kanbanboard--interactive-playground'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-transparent to-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(p => (
            <motion.div key={p.id} whileHover={{ y: -6 }} className="card p-4 bg-white/5 rounded-xl shadow-md">
              <div className="h-40 bg-white/10 mb-3 flex items-center justify-center overflow-hidden rounded-lg">
                <img src={p.image} alt={p.title} className="object-cover w-full h-full" />
              </div>
              <h3 className="font-bold text-lg">{p.title}</h3>
              <p className="text-gray-300 text-sm my-2">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span
                    key={t}
                    className="text-xs text-gray-400 border border-white/10 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-3 flex flex-wrap gap-4">
                <a href={p.repo} target="_blank" rel="noopener noreferrer" className="text-sm text-accent underline">
                  Repo
                </a>
                <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-sm text-accent underline">
                  Live
                </a>
                <a href={p.storybook} target="_blank" rel="noopener noreferrer" className="text-sm text-accent underline">
                  Storybook
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
