import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-8">
            Tell me about your next project
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            <motion.a
              href="mailto:adam@example.com"
              className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Let's talk
              <ArrowRight className="ml-2" size={20} />
            </motion.a>
            
            <motion.a
              href="https://calendly.com"
              className="inline-flex items-center px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule a call
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}