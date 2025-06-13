import { navItems } from '@/data/services'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react';
import React from 'react'

export const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  return (
    <div>

         <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
      >
        <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-1.5 shadow-2xl">
          <div className="flex items-center justify-between">
            <div className="text-white font-bold text-xl ml-2">D3Studio</div>
            
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-300"
              >
                Get Started
              </motion.button>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pt-4 border-t border-white/10"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full bg-white text-black px-6 py-2 rounded-xl text-sm font-semibold mt-4">
                Get Started
              </button>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </div>
  )
}
