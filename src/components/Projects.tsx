import React from 'react';
import { ArrowUpRight, MessageSquare, Code2, Mic } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'OptiChat Beta',
    description: 'An AI chat interface extension for browsers, enhancing the way users interact with AI assistants.',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=1200',
    link: 'https://github.com/145AdamPro/optizchat-beta',
    icon: MessageSquare,
    tags: ['Browser Extension', 'AI', 'JavaScript']
  },
  {
    title: 'Learn Code Platform',
    description: 'An interactive platform teaching coding fundamentals through hands-on exercises and real-world projects.',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=1200',
    link: 'https://learn-code-inky.vercel.app',
    icon: Code2,
    tags: ['Education', 'React', 'Next.js']
  },
  {
    title: 'AI Voice Assistant',
    description: 'A voice-powered AI assistant that helps users interact with their devices naturally.',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=1200',
    link: 'https://github.com/145AdamPro/aivoice',
    icon: Mic,
    tags: ['AI', 'Voice Recognition', 'Python']
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-medium mb-16"
        >
          Selected Projects
        </motion.h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative overflow-hidden rounded-2xl mb-8">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[16/9] object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div
                    className="absolute top-4 right-4 bg-black text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ rotate: 45 }}
                  >
                    <ArrowUpRight size={24} />
                  </motion.div>
                </div>
                
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <project.icon className="w-6 h-6" />
                    <h3 className="text-2xl font-medium">{project.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <div className="flex gap-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-sm text-gray-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}