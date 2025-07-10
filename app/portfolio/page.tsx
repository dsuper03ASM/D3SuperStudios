"use client";

import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/Animatedbackgroiund";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
} 