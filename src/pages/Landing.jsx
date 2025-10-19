import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogosCarrusel from "../components/LogosCarrusel";
import Header from "../components/Header";
import Slides, { slideVariants } from "../components/LandingSlides";

export default function Landing() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic slide transition every 5 seconds, stopping after the third slide
  useEffect(() => {
    if (currentSlide < 2) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => prev + 1);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [currentSlide]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-amber-50 via-white to-rose-100 overflow-hidden">
      <LogosCarrusel />
      <Header />

      {/* Slideshow */}
      <main className="flex-grow relative w-full">
        <AnimatePresence initial={false}>
          {Slides()[currentSlide]}
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 py-4 absolute bottom-0 left-0 right-0 z-20">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-6 h-2 rounded-full transition-colors ${
                index === currentSlide
                  ? "border-2 border-teal-600 bg-teal-600"
                  : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </main>

      <footer className="bg-teal-900 text-rose-100 text-center py-6 relative z-10">
        <p className="text-sm">
          © {new Date().getFullYear()} Liga Horizonte — Todos los derechos
          reservados
        </p>
      </footer>
    </div>
  );
}
