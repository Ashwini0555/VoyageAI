import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features/Features";
import Footer from "@/components/Footer/Footer";
import Destinations from "@/components/Destinations/Destinations";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
   <>
  <Hero />
  <Destinations />
  <Features />
  <HowItWorks />
  <Testimonials />
  <Footer />
</>
  );
}