import { useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Social from "./Social";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Portfolio() {
  useEffect(() => {
    // Scroll animation functionality
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });
    
    animateOnScrollElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      animateOnScrollElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Social />
      <Contact />
      <Footer />
    </div>
  );
}
