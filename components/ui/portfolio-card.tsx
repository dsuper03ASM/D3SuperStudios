import { Card } from "./card";
import { Button } from "./button";
import Link from "next/link";

interface PortfolioCardProps {
  name: string;
  url: string;
  description: string;
  role?: string;
}

export function PortfolioCard({ name, url, description, role }: PortfolioCardProps) {
  const descriptionPoints = description.split('\n');
  const isBulletList = description.includes('•');

  return (
    <Card className="group relative overflow-hidden border border-purple-500/20 bg-black/40 backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:border-lime-500/50 before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:via-purple-500/5 before:to-lime-500/5 before:opacity-0 before:transition-opacity hover:before:opacity-100">
      <div className="absolute top-0 left-0 h-[2px] w-[2px] bg-lime-500 shadow-[0_0_10px_4px_rgba(132,204,22,0.5)] transition-all duration-500 group-hover:h-[10px] group-hover:w-[10px]" />
      <div className="absolute top-0 right-0 h-[2px] w-[2px] bg-purple-500 shadow-[0_0_10px_4px_rgba(168,85,247,0.5)] transition-all duration-500 group-hover:h-[10px] group-hover:w-[10px]" />
      <div className="absolute bottom-0 left-0 h-[2px] w-[2px] bg-purple-500 shadow-[0_0_10px_4px_rgba(168,85,247,0.5)] transition-all duration-500 group-hover:h-[10px] group-hover:w-[10px]" />
      <div className="absolute bottom-0 right-0 h-[2px] w-[2px] bg-lime-500 shadow-[0_0_10px_4px_rgba(132,204,22,0.5)] transition-all duration-500 group-hover:h-[10px] group-hover:w-[10px]" />

      <div className="relative z-10 p-8">
        <div className="mb-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-lime-400 via-purple-400 to-lime-400 bg-clip-text text-transparent pb-1">{name}</h3>
          {role && (
            <div className="inline-flex items-center space-x-2 mt-2">
              <div className="h-2 w-2 rounded-full bg-lime-500 animate-pulse" />
              <p className="text-purple-300 text-sm font-mono tracking-wider">{role}</p>
            </div>
          )}
        </div>
        
        <div className="relative mb-8">
          <div className="absolute -left-4 top-0 h-full w-[2px] bg-gradient-to-b from-lime-500/50 to-purple-500/50" />
          {isBulletList ? (
            <ul className="space-y-2 text-gray-300 leading-relaxed">
              {descriptionPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-lime-500 mr-2">{point.trim().startsWith('•') ? '' : '•'}</span>
                  <span>{point.trim().startsWith('•') ? point.trim().substring(1).trim() : point.trim()}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-300 leading-relaxed">{description}</p>
          )}
        </div>

        <Link href={url} target="_blank">
          <Button className="w-full bg-gradient-to-r from-lime-500 to-purple-500 hover:from-lime-600 hover:to-purple-600 text-black font-mono tracking-wider transition-all duration-300 hover:shadow-[0_0_20px_rgba(132,204,22,0.5)]">
            <span className="mr-2">{">"}</span>
            EXPLORE PORTFOLIO
            <span className="ml-2">{"<"}</span>
          </Button>
        </Link>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-[-2px] bg-gradient-to-r from-lime-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-lime-500/50 to-transparent top-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[2s] ease-in-out" />
      </div>
    </Card>
  );
} 