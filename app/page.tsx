"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Companies } from "@/components/Companies";
import { Testimonial } from "@/components/Testimonial";
import Faq from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/Animatedbackgroiund";

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Optimized Background */}
      <AnimatedBackground />

      {/* Content with proper z-index layering */}
      <div className="">
        <Navbar />
        <Hero />
        <Section />
        <Companies />
        <Testimonial />
        <Faq />
        <Footer />
      </div>
    </div>
  );
}
