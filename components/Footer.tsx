import { motion } from 'framer-motion'
import React from 'react'

export const Footer = () => {
  return (
    <div>
        <section id="contact" className="py-20 px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto"
        >
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight">Ready to Transform Your Vision?</h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-16 font-light max-w-3xl mx-auto leading-relaxed">
            Let's collaborate to build something extraordinary. From concept to deployment, we're here to make your digital dreams a reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-12 py-6 rounded-2xl text-xl font-semibold transition-all duration-300 shadow-2xl hover:shadow-white/25"
              onClick={() => window.open('https://cal.com/dsuper03/30min', '_blank')}
            >
              Start Your Project
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/20 text-white px-12 py-6 rounded-2xl text-xl font-medium backdrop-blur-sm hover:bg-white/5 transition-all duration-300"
              onClick={() => window.open('https://cal.com/dsuper03/15min', '_blank')}
             >
              Schedule a Call
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
