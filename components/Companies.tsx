import { companies } from '@/data/services'
import { motion } from 'framer-motion'
import React from 'react'

export const Companies = () => {
  return (
    <div>
          <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-lg text-gray-500 mb-12 font-light tracking-wider uppercase">Trusted by Industry Leaders</h3>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
              {companies.map((company, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="text-xl md:text-2xl font-bold text-gray-600 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
