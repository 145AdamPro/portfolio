import React from 'react';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-[#F8F8F8]/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <nav className="flex justify-between items-center">
          <motion.a 
            href="#home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-medium"
          >
            adam.dev
          </motion.a>
          
          <div className="hidden md:flex space-x-12">
            <motion.a
              href="#projects"
              className="text-gray-600 hover:text-black transition-colors"
              whileHover={{ y: -2 }}
            >
              projects
            </motion.a>
          </div>

          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </nav>
      </div>
    </header>
  );
}