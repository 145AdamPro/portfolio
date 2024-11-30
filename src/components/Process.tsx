import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery Phase',
    description: 'Understanding your goals, target audience, and project requirements.'
  },
  {
    number: '02',
    title: 'Strategy & Planning',
    description: 'Creating a roadmap and defining the technical architecture.'
  },
  {
    number: '03',
    title: 'Design & Development',
    description: 'Bringing ideas to life with pixel-perfect design and clean code.'
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'Ensuring a smooth deployment and providing ongoing maintenance.'
  }
];

export function Process() {
  return (
    <section id="process" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-medium mb-16"
        >
          Work Process
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4"
            >
              <span className="text-sm text-gray-400">{step.number}</span>
              <h3 className="text-xl font-medium">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}