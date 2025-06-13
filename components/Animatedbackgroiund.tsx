"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export function AnimatedBackground() {
  // Reduce particle count and memoize them
  const particles = useMemo(() => 
    Array.from({ length: 50 }, (_, i) => ({ // Reduced from 200 to 50
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() > 0.8 ? 2 : 1,
      color: Math.random() > 0.5 ? 'rgba(59, 130, 246, 0.2)' : 'rgba(168, 85, 247, 0.2)',
      duration: 8 + Math.random() * 4, // Slower animations
      delay: Math.random() * 3
    })), []
  );

  return (
    <div className="absolute inset-0">
      {/* Simplified Grid Layers */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Static Reflective Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-black/40 to-gray-900/20"></div>
      
      {/* Simplified Purple Snake Auras - Left Side */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl"
        animate={{
          scaleY: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          clipPath: "polygon(0% 0%, 60% 0%, 40% 100%, 0% 100%)"
        }}
      />

      {/* Simplified Purple Snake Auras - Right Side */}
      <motion.div
        className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl"
        animate={{
          scaleY: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        style={{
          clipPath: "polygon(40% 0%, 100% 0%, 100% 100%, 60% 100%)"
        }}
      />
      
      {/* Simplified Radial Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-blue-500/6 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-radial from-purple-500/6 via-transparent to-transparent"></div>
      
      {/* Reduced Floating Orbs - Only 2 instead of 4+ */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl"
        animate={{
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Optimized Particles with will-change */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full will-change-transform"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Removed rotating reflection - too expensive */}
    </div>
  );
}