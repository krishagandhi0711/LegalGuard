import React from "react";
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import DemoSection from "../components/home/DemoSection";
import BackToTop from "../components/BackToTop";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <BackToTop />
    </div>
  );
}