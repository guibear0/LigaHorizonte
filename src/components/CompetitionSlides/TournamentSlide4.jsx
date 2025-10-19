import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import estadioImg from "../../../public/estadio.png"; // asegúrate de que la ruta sea correcta

export default function TournamentSlide4() {
  const controlsTitle = useAnimation();
  const controlsImage = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // Animación de entrada para el título
      await controlsTitle.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut" },
      });

      // Animación de entrada para la imagen: fade y escala desde 0.8, más rápida
      await controlsImage.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" }, // Animación más rápida
      });
    };

    sequence();
  }, [controlsTitle, controlsImage]);

  return (
    <motion.div
      key="tournament4"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center justify-center h-full text-center p-6 space-y-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={controlsTitle}
        className="text-4xl font-extrabold text-gray-800"
      >
        Estadio Horizon Fate
      </motion.h1>
      <p className="text-lg text-gray-600">
        Ambos partidos se disputarán en el estadio Horizon Fate.
      </p>
      <motion.img
        src={estadioImg}
        alt="Estadio Horizon Fate"
        className="w-[400px] rounded-lg shadow-lg mt-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={controlsImage}
      />
    </motion.div>
  );
}
