import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Challenges from "@/components/landing/Challenges";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/layout/Footer";
import AISection from "@/components/landing/AISection";
import Statistics from "@/components/landing/Statistics";
import Testimonials from "@/components/landing/Testimonials";
export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-950 text-white overflow-hidden">

        <Hero />

        <Features />

       <AISection />
        <Challenges />
        <Statistics />
        <Testimonials />
        <CTA />

      </main>

      <Footer />

    </>
  );
}