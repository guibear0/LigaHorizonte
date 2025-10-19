import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Slide transition animation
export const slideVariants = {
  enter: { x: "100%", opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
};

// Default function returning slides array
export default function Slides() {
  return [
    // Slide 1: Liga Horizonte Hero
    <motion.div
      key="slide1"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.3 }}
      className="absolute inset-0 flex bg-rose-100 flex-col items-center justify-center py-6 text-center overflow-hidden w-full"
    >
      <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 tracking-tight mb-6 relative z-10 drop-shadow-lg">
        Liga Horizonte
      </h1>
      <p className="max-w-2xl text-lg md:text-2xl text-gray-700 mb-8 relative z-10 font-medium">
        Únete a la emoción de la liga donde cada partido escribe una nueva
        leyenda.
      </p>
    </motion.div>,

    // Slide 2: Curiosidades sobre la Liga
    <motion.div
      key="slide2"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.3 }}
      className="absolute inset-0 bg-rose-100 flex flex-col items-center justify-center px-6 py-6 text-center overflow-hidden w-full"
    >
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 tracking-tight mb-6 relative z-10 drop-shadow-lg">
        Funcionamiento de la competición
      </h1>
      <p className="max-w-2xl text-lg md:text-xl text-gray-700 mb-8 relative z-10 font-medium">
        ¿Quieres saber el esquema que siga nuestra liga? Descúbrelo en el
        siguiente enlace
      </p>
      <a
        href="#"
        className="inline-flex items-center px-8 py-3 rounded-full bg-teal-600 text-white font-semibold shadow-lg hover:bg-teal-700 transition-transform relative z-10"
      >
        Ver Más <ArrowRight className="ml-2 w-5 h-5" />
      </a>
    </motion.div>,

    // Slide 3: Nuestro Campeón
    <motion.div
      key="slide3"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.3 }}
      className="absolute inset-0 flex bg-rose-100 flex-col md:flex-row items-center justify-center px-6 py-6 text-center md:text-left overflow-hidden w-full"
    >
      <div className="flex-1 ml-30">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 tracking-tight mb-6 relative z-10 drop-shadow-lg">
          Nuestro Campeón
        </h1>
        <p className="max-w-md text-lg md:text-xl text-gray-700 mb-8 relative z-10 font-medium">
          Celebramos al equipo que conquistó la gloria en la temporada 2025.
        </p>
        <a
          href="#"
          className="inline-flex  items-center px-8 py-3 rounded-full bg-teal-600 text-white font-semibold shadow-lg hover:bg-teal-700 transition-transform relative z-10"
        >
          Ver Campeón <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
      <div className="flex-1 flex justify-center relative z-10">
        <img
          src="/trofeo.png"
          alt="Trofeo del Campeón"
          className="w-full max-w-md h-auto object-contain"
        />
      </div>
    </motion.div>,
  ];
}
