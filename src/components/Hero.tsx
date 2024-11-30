import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8 inline-flex items-center space-x-3">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
                alt="Adam"
                className="w-12 h-12 rounded-full"
              />
              <span className="text-gray-600">Hey there 👋</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-medium leading-tight mb-8">
              Building digital
              <span className="block">experiences with code</span>
            </h1>

            <motion.a
              href="https://github.com/145AdamPro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full hover:bg-gray-900 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="mr-2" size={20} />
              View GitHub
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}