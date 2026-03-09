import Navbar from "../app/components/layout/Navbar";
import Hero from "../app/components/sections/Hero";
import Footer from "./components/layout/Footer";
import CTA from "./components/sections/CTA";
import HowItWorks from "./components/sections/HowItWorks";
import Quote from "./components/sections/Quote";
import Services from "./components/sections/Services";

export default function Home() {
  return (
    <main className="relative bg-brand-bg">
      <Navbar />
      <Hero />
      <Services />
      <Quote />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}