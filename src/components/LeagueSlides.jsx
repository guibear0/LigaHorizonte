import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TeamBall from "./TeamBall";

const slideVariants = {
  enter: { x: "100%", opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
};

export default function LeagueSlides() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState(0);

  // Avanza fases dentro del sistema de puntos
  useEffect(() => {
    if (index === 2) {
      setPhase(0);
      const interval = setInterval(() => {
        setPhase((prev) => {
          if (prev < 3) return prev + 1;
          clearInterval(interval);
          return 3;
        });
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [index]);

  const slides = [
    // Slide 1: Liga 10 equipos
    <motion.div
      key="league1"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center justify-center h-full text-center p-6"
    >
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
        Funcionamiento de la Liga
      </h1>
      <p className="max-w-2xl text-lg text-gray-600 mb-8">
        La competición comienza con una liga de <strong>10 equipos</strong>.
      </p>
      <div className="grid grid-cols-5 gap-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <TeamBall key={i} color="bg-teal-500" label={i + 1} />
        ))}
      </div>
    </motion.div>,

    // Slide 2: Ida y vuelta
    <motion.div
      key="league2"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center justify-center h-full text-center p-6"
    >
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
        Partidos Ida y Vuelta
      </h1>
      <p className="max-w-2xl text-lg text-gray-600 mb-8">
        Cada equipo juega un total de <strong>18 partidos</strong>: 9 en casa y
        9 fuera.
      </p>
      <div className="flex items-center gap-12 mt-6">
        <TeamBall color="bg-blue-500" label="A" />
        <span className="text-2xl font-bold text-gray-700">vs</span>
        <TeamBall color="bg-red-500" label="B" />
      </div>
    </motion.div>,

    // Slide 3: Sistema de puntos
    <motion.div
      key="league3"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center justify-center h-full text-center p-6 space-y-12"
    >
      <h1 className="text-4xl font-extrabold text-gray-800">
        Sistema de Puntuación
      </h1>

      <AnimatePresence mode="wait">
        {(phase === 0 || phase === 3) && (
          <motion.div
            key="victoria"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center space-y-4"
          >
            <p className="text-lg text-gray-600 font-medium">
              Una Victoria sumará 3 puntos al vencedor
            </p>
            <div className="flex items-center gap-8">
              <motion.div
                animate={{ x: [0, 20, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <TeamBall color="bg-green-500" label="A" />
              </motion.div>
              <TeamBall color="bg-red-500 opacity-50" label="B" />
            </div>
            <motion.div
              className="text-2xl font-bold text-green-600"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              +3
            </motion.div>
          </motion.div>
        )}

        {(phase === 1 || phase === 3) && (
          <motion.div
            key="empate"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center space-y-4"
          >
            <p className="text-lg text-gray-600 font-medium">
              Un empate sumará 1 punto a ambos equipos
            </p>
            <div className="flex items-center gap-8">
              <motion.div
                animate={{ x: [0, 15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <TeamBall color="bg-blue-500" label="A" />
              </motion.div>
              <motion.div
                animate={{ x: [0, -15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <TeamBall color="bg-orange-500" label="B" />
              </motion.div>
            </div>
            <div className="flex gap-8 text-blue-600 font-bold text-2xl">
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                +1
              </motion.span>
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                +1
              </motion.span>
            </div>
          </motion.div>
        )}

        {(phase === 2 || phase === 3) && (
          <motion.div
            key="derrota"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center space-y-4"
          >
            <p className="text-lg text-gray-600 font-medium">
              Una derrota no sumará puntos
            </p>
            <div className="flex items-center gap-8">
              <TeamBall color="bg-purple-500 opacity-50" label="A" />
              <motion.div
                animate={{ x: [0, -20, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <TeamBall color="bg-yellow-500" label="B" />
              </motion.div>
            </div>
            <motion.div
              className="text-2xl font-bold text-gray-700"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              0
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>,

    // Slide 4: Clasificación
    <motion.div
      key="league4"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center justify-center h-full text-center p-6 space-y-6"
    >
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
        Tabla de Clasificación
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Se clasificarán los <strong>4 primeros</strong> equipos
      </p>
      <table className="table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Posición</th>
            <th className="border border-gray-300 px-4 py-2">Equipo</th>
            <th className="border border-gray-300 px-4 py-2">Puntos</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, i) => (
            <tr key={i} className={i < 4 ? "bg-green-200 font-bold" : ""}>
              <td className="border border-gray-300 px-4 py-2">{i + 1}</td>
              <td className="border border-gray-300 px-4 py-2">
                Equipo {i + 1}
              </td>
              <td className="border border-gray-300 px-4 py-2">{30 - i * 2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>,
  ];

  return <AnimatePresence mode="wait">{slides[index]}</AnimatePresence>;
}
