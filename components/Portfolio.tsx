import { PortfolioCard } from "./ui/portfolio-card";

const portfolios = [
  {
    name: "Anirban Ghosh",
    url: "https://anirban-three.vercel.app/",
    description: "Creative developer specializing in Frontend web experiences and interactive designs. Pushing the boundaries of web technology with React, Next.js, Three.js and Figma.",
    role: "Frontend Developer + UI/UX Designer"
  },
  {
    name: "Mohak",
    url: "https://mochak.me/",
    description: "Full-stack developer crafting beautiful, performant web applications. Focused on creating seamless user experiences with modern technologies.",
    role: "Full Stack Backend Developer"
  },
  {
    name: "Swarnendu Ghosh",
    url: "https://swarnendu.me",
    description: "Full-stack developer crafting beautiful, performant web applications. Focused on creating seamless user experiences with modern technologies with end to end deployment and monitoring.",
    role: "Full Stack Developer with DevOps"
  }
];

export function Portfolio() {
  return (
    <section className="py-36 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-lime-400 to-purple-400 bg-clip-text text-transparent">
          Featured Portfolios
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore these amazing portfolios showcasing innovative web development and creative design work.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolios.map((portfolio) => (
          <PortfolioCard
            key={portfolio.name}
            name={portfolio.name}
            url={portfolio.url}
            description={portfolio.description}
            role={portfolio.role}
          />
        ))}
      </div>
    </section>
  );
} 