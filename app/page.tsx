import { Cta } from "@/components/Landing/Cta";
import { Footer } from "@/components/Landing/Footer";
import { Header } from "@/components/Landing/Header";
import { Hero } from "@/components/Landing/Hero";
import { HowitWorks } from "@/components/Landing/HowitWorks";
import { PricingSection } from "@/components/Landing/PricingSection";
import { WhattoAsk } from "@/components/Landing/WhattoAsk";


export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowitWorks />
      <WhattoAsk />
      <PricingSection />
      <Cta/>
      <Footer />

      
      
    </div>

  )
}