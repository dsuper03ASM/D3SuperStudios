import { Code, Cloud, Smartphone, Globe, Brain, Shield } from "lucide-react";

export const services = [
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

  export const testimonials = [
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

  export const companies = [
    "Microsoft", "Google", "Amazon", "Apple", "Meta", "Netflix", "Stripe", "Shopify"
  ];

  export const faqs = [
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

  export const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/#contact" }
  ];