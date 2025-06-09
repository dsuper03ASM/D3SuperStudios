"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone, Cloud, Brain, Globe, Shield, Star, ChevronDown, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "Full Stack Development",
      description: "Complete web applications using React, Next.js, Node.js, and modern frameworks",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: "DevOps & Cloud",
      description: "CI/CD pipelines, AWS/Azure deployment, and infrastructure automation",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "React Native",
      description: "Cross-platform mobile applications for iOS and Android",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Web3 Development",
      description: "Blockchain applications, smart contracts, and DeFi solutions",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "AI Integration",
      description: "Machine learning models, chatbots, and AI-powered features",
      gradient: "from-violet-500/20 to-purple-500/20"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Security & Performance",
      description: "Code audits, optimization, and security implementations",
      gradient: "from-indigo-500/20 to-blue-500/20"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp",
      content: "Outstanding work! They delivered our e-commerce platform ahead of schedule with exceptional quality.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "StartupXYZ",
      content: "The mobile app they built for us has over 100k downloads. Incredible attention to detail!",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "InnovateLab",
      content: "Their AI integration transformed our business processes. Highly recommended!",
      rating: 5,
      avatar: "ER"
    }
  ];

  const companies = [
    "Microsoft", "Google", "Amazon", "Apple", "Meta", "Netflix"
  ];

  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer: "We work with modern tech stacks including React, Next.js, Node.js, Python, AWS, Docker, and more."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary from 2-4 weeks for simple websites to 3-6 months for complex applications."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer maintenance packages and ongoing support for all our projects."
    },
    {
      question: "What's your development process?",
      answer: "We follow Agile methodology with regular updates, testing, and client feedback throughout development."
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Enhanced Background with Grid Pattern */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black to-gray-900/50"></div>
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium text-blue-400 tracking-wider uppercase">Digital Excellence</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-7xl md:text-9xl font-bold text-white mb-6 tracking-tight"
          >
            Build the
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Future
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            We craft next-generation digital solutions that transform ambitious ideas into powerful, scalable applications. From full-stack development to AI integration.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold flex items-center gap-3 transition-all duration-300 shadow-2xl hover:shadow-white/25"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-medium backdrop-blur-sm hover:bg-white/5 transition-all duration-300"
            >
              View Our Work
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl font-bold text-white mb-6 tracking-tight">Our Expertise</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
              Comprehensive solutions for your digital transformation journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className={`relative h-full p-8 rounded-2xl border border-white/10 backdrop-blur-xl bg-gradient-to-br ${service.gradient} hover:border-white/20 transition-all duration-500 shadow-2xl hover:shadow-white/10`}>
                  {/* Reflective shine effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="text-white mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-4 group-hover:text-blue-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-base leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-lg text-gray-500 mb-12 font-light tracking-wider uppercase">Trusted by Industry Leaders</h3>
            <div className="flex flex-wrap justify-center items-center gap-16">
              {companies.map((company, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="text-2xl font-bold text-gray-600 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl font-bold text-white mb-6 tracking-tight">Client Stories</h2>
            <p className="text-xl text-gray-400 font-light">Real feedback from real projects</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="relative h-full p-8 rounded-2xl border border-white/10 backdrop-blur-xl bg-gradient-to-br from-white/5 to-transparent hover:border-white/20 transition-all duration-500 shadow-2xl hover:shadow-white/10">
                  {/* Reflective shine effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-8 text-lg leading-relaxed font-light">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="text-white font-semibold">{testimonial.name}</p>
                        <p className="text-blue-400 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl font-bold text-white mb-6 tracking-tight">FAQ</h2>
            <p className="text-xl text-gray-400 font-light">Everything you need to know</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative rounded-2xl border border-white/10 backdrop-blur-xl bg-gradient-to-br from-white/5 to-transparent hover:border-white/20 transition-all duration-500 overflow-hidden">
                  <div
                    className="cursor-pointer p-8"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-white text-lg font-semibold pr-8">{faq.question}</h3>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? "auto" : 0,
                      opacity: openFaq === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8">
                      <p className="text-gray-400 font-light leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer/CTA Section */}
      <section className="py-32 px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-6xl font-bold text-white mb-6 tracking-tight">Ready to Start?</h2>
          <p className="text-xl text-gray-400 mb-16 font-light">
            Let's discuss your project and bring your vision to life
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-12 py-6 rounded-xl text-xl font-semibold transition-all duration-300 shadow-2xl hover:shadow-white/25"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
