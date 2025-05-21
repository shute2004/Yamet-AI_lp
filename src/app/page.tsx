
"use client"; 

import { useEffect } from 'react';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSolutionSection } from "@/components/sections/problem-solution-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { TechnologyFlowSection } from "@/components/sections/technology-flow-section"; // New section
import { PricingTeaserSection } from "@/components/sections/pricing-teaser-section"; // This is now the mid-page CTA
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section"; // This is the final bottom CTA

export default function LandingPage() {
  useEffect(() => {
    console.log('Tracking: PageView - Yamet AI Landing Page');
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProblemSolutionSection />
        <HowItWorksSection />
        <TechnologyFlowSection /> 
        <PricingTeaserSection /> {/* This is the new mid-page CTA with updated content */}
        <FaqSection />
        <CtaSection /> {/* This is the final bottom CTA */}
      </main>
      <Footer />
    </div>
  );
}
