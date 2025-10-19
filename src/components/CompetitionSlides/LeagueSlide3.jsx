import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import TeamBall from "../TeamBall";

export default function LeagueSlide3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    setPhase(0);
    const interval = setInterval(() => {
      setPhase((prev) => {
        if (prev < 3) return prev + 1;
        clearInterval(interval);
        return 3;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      key="league3"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
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
    </motion.div>
  );
}
