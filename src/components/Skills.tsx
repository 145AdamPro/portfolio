import React from 'react';
import { Code2, Database, Layout, Server } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from './animations/FadeIn';

const skills = {
  frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Redux'],
  backend: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs'],
  database: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase'],
  tools: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest']
};

export function Skills() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Frontend', icon: Layout, color: 'blue', skills: skills.frontend },
            { title: 'Backend', icon: Server, color: 'green', skills: skills.backend },
            { title: 'Database', icon: Database, color: 'purple', skills: skills.database },
            { title: 'Tools', icon: Code2, color: 'orange', skills: skills.tools }
          ].map((category, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up">
              <motion.div
                className="p-6 bg-white rounded-lg shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <category.icon className={`w-12 h-12 text-${category.color}-600 mb-4`} />
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className={`w-2 h-2 bg-${category.color}-600 rounded-full mr-2`}></span>
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}