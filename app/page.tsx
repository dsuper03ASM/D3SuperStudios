"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone, Cloud, Brain, Globe, Shield, Star, ChevronDown, Sparkles, Menu, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "Full Stack Development",
      description: "End-to-end web application development using cutting-edge technologies like React, Next.js, Node.js, TypeScript, and modern cloud infrastructure. We build scalable, performant applications that grow with your business.",
      gradient: "from-blue-500/20 to-cyan-500/20",
      features: ["React & Next.js", "Node.js & Express", "TypeScript", "Database Design", "API Development"]
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: "DevOps & Cloud Infrastructure",
      description: "Complete CI/CD pipeline setup, AWS/Azure deployment strategies, containerization with Docker & Kubernetes, infrastructure as code, monitoring, and automated scaling solutions.",
      gradient: "from-purple-500/20 to-pink-500/20",
      features: ["AWS/Azure/GCP", "Docker & Kubernetes", "CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Logging"]
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using React Native and Flutter. Native iOS and Android development with seamless UX/UI design, offline capabilities, and performance optimization.",
      gradient: "from-green-500/20 to-emerald-500/20",
      features: ["React Native", "Flutter", "Native iOS/Android", "Offline Sync", "Push Notifications"]
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Web3 & Blockchain",
      description: "Decentralized application development, smart contract creation and auditing, DeFi protocols, NFT marketplaces, and integration with major blockchain networks including Ethereum, Polygon, and Solana.",
      gradient: "from-orange-500/20 to-red-500/20",
      features: ["Smart Contracts", "DeFi Protocols", "NFT Platforms", "Web3 Integration", "Blockchain Audits"]
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "AI & Machine Learning",
      description: "Custom AI solutions including chatbots, recommendation systems, computer vision, natural language processing, and machine learning model development with TensorFlow, PyTorch, and OpenAI integration.",
      gradient: "from-violet-500/20 to-purple-500/20",
      features: ["Custom AI Models", "NLP & Computer Vision", "Chatbot Development", "ML Pipeline", "OpenAI Integration"]
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Security & Performance",
      description: "Comprehensive security audits, penetration testing, performance optimization, code reviews, GDPR compliance, and implementation of best security practices for web and mobile applications.",
      gradient: "from-indigo-500/20 to-blue-500/20",
      features: ["Security Audits", "Performance Optimization", "GDPR Compliance", "Code Reviews", "Penetration Testing"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp",
      role: "CTO",
      content: "Exceptional team! They delivered our enterprise e-commerce platform 3 weeks ahead of schedule. The code quality is outstanding, and their attention to performance optimization saved us thousands in server costs. Highly recommend for any serious project.",
      rating: 5,
      avatar: "SJ",
      project: "E-commerce Platform"
    },
    {
      name: "Michael Chen",
      company: "StartupXYZ",
      role: "Founder & CEO",
      content: "Our mobile app now has over 250k+ active users and a 4.8 App Store rating. The team's expertise in React Native and backend optimization was crucial to our success. They're true partners in our growth journey.",
      rating: 5,
      avatar: "MC",
      project: "Mobile App Development"
    },
    {
      name: "Emily Rodriguez",
      company: "InnovateLab",
      role: "Head of Digital",
      content: "The AI integration completely transformed our customer service operations. We've seen a 40% reduction in response times and 85% customer satisfaction improvement. Their technical expertise is unmatched.",
      rating: 5,
      avatar: "ER",
      project: "AI Chatbot Integration"
    }
  ];

  const companies = [
    "Microsoft", "Google", "Amazon", "Apple", "Meta", "Netflix", "Stripe", "Shopify"
  ];

  const faqs = [
    {
      question: "What technologies and frameworks do you specialize in?",
      answer: "We work with cutting-edge tech stacks including React, Next.js, Vue.js, Node.js, Python, TypeScript, PostgreSQL, MongoDB, AWS, Docker, Kubernetes, and modern AI/ML frameworks like TensorFlow and PyTorch. We stay updated with the latest industry trends and best practices."
    },
    {
      question: "What's your typical project timeline and process?",
      answer: "Project timelines vary: simple websites (2-4 weeks), complex web apps (6-12 weeks), mobile apps (8-16 weeks), and enterprise solutions (3-6 months). We follow Agile methodology with weekly sprints, daily standups, and continuous client feedback throughout development."
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes! We offer comprehensive maintenance packages including 24/7 monitoring, regular updates, security patches, performance optimization, and feature enhancements. Our support team ensures your application runs smoothly long after launch."
    },
    {
      question: "How do you ensure code quality and security?",
      answer: "We implement rigorous code reviews, automated testing (unit, integration, e2e), security audits, and follow industry best practices. All code is version-controlled with Git, and we use tools like SonarQube for code quality analysis and implement CI/CD pipelines."
    },
    {
      question: "What's your pricing structure?",
      answer: "We offer flexible pricing models: fixed-price projects for well-defined scopes, hourly rates for ongoing work, and retainer agreements for long-term partnerships. We provide detailed estimates after understanding your specific requirements and goals."
    },
    {
      question: "Can you work with our existing team and tech stack?",
      answer: "Absolutely! We seamlessly integrate with existing development teams and can work with your current technology stack. We also provide training and knowledge transfer to ensure smooth collaboration and project continuity."
    }
  ];

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Enhanced Premium Background */}
      <div className="absolute inset-0">
        {/* Multiple Grid Layers */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:8rem_8rem]"></div>
        
        {/* Radial Gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-blue-500/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-radial from-purple-500/5 via-transparent to-transparent"></div>
        
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}></div>
        
        {/* Floating Orbs - Enhanced */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 40, -30, 0],
            scale: [1, 0.9, 1.3, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/6 rounded-full blur-2xl"
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Enhanced Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(150)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() > 0.5 ? '1px' : '2px',
              height: Math.random() > 0.5 ? '1px' : '2px',
              backgroundColor: `rgba(${Math.random() > 0.5 ? '59, 130, 246' : '168, 85, 247'}, ${0.1 + Math.random() * 0.3})`,
            }}
            animate={{
              y: [0, -30 - Math.random() * 20, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Navigation Bar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
      >
        <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-4 shadow-2xl">
          <div className="flex items-center justify-between">
            <div className="text-white font-bold text-xl">D3Studio</div>
            
            {/* Desktop Menu */}
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

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-24">
        <div className="text-center z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium text-blue-400 tracking-wider uppercase">Premium Digital Solutions</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-7xl md:text-9xl font-bold text-white mb-8 tracking-tight leading-none"
          >
            Craft Digital
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Excellence
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            We transform visionary ideas into powerful, scalable digital solutions. From enterprise-grade applications to cutting-edge AI integration - we build the future of technology.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-white text-black px-10 py-5 rounded-2xl text-lg font-semibold flex items-center gap-3 transition-all duration-300 shadow-2xl hover:shadow-white/25"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative border border-white/20 text-white px-10 py-5 rounded-2xl text-lg font-medium backdrop-blur-sm hover:bg-white/5 transition-all duration-300"
            >
              View Our Portfolio
            </motion.button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
          >
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "50+", label: "Happy Clients" },
              { number: "99%", label: "Success Rate" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm font-light">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl font-bold text-white mb-6 tracking-tight">Our Expertise</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              Comprehensive digital solutions powered by cutting-edge technology and years of expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group"
              >
                <div className={`relative h-full p-8 rounded-3xl border border-white/10 backdrop-blur-xl bg-gradient-to-br ${service.gradient} hover:border-white/20 transition-all duration-500 shadow-2xl hover:shadow-white/10`}>
                  {/* Enhanced Reflective shine effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="relative z-10">
                    <div className="text-white mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-4 group-hover:text-blue-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-base leading-relaxed font-light mb-6">
                      {service.description}
                    </p>
                    
                    {/* Feature List */}
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                          <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl font-bold text-white mb-6 tracking-tight">Client Success Stories</h2>
            <p className="text-xl text-gray-400 font-light">Real results from real partnerships</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group"
              >
                <div className="relative h-full p-8 rounded-3xl border border-white/10 backdrop-blur-xl bg-gradient-to-br from-white/5 to-transparent hover:border-white/20 transition-all duration-500 shadow-2xl hover:shadow-white/10">
                  {/* Enhanced Reflective effects */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-xs text-blue-400 font-medium">{testimonial.project}</span>
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
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
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
      <section id="faq" className="py-32 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl font-bold text-white mb-6 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400 font-light">Everything you need to know about working with us</p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative rounded-3xl border border-white/10 backdrop-blur-xl bg-gradient-to-br from-white/5 to-transparent hover:border-white/20 transition-all duration-500 overflow-hidden">
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

      {/* Enhanced Footer/CTA Section */}
      <section id="contact" className="py-32 px-4 relative">
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
            >
              Start Your Project
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/20 text-white px-12 py-6 rounded-2xl text-xl font-medium backdrop-blur-sm hover:bg-white/5 transition-all duration-300"
            >
              Schedule a Call
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
