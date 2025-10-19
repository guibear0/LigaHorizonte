import { motion } from "framer-motion";
import { Trophy, Medal } from "lucide-react";
import TeamBall from "./TeamBall";

const slideVariants = {
  enter: { x: "100%", opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
};

export default function getTournamentSlides() {
  return [
    // Slide torneo 1 → semifinales
    <motion.div
      key="tournament1"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center justify-center h-full text-center p-6"
    >
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
        Semifinales del Torneo
      </h1>
      <div className="grid grid-cols-1 gap-12">
        <div className="flex items-center gap-6 justify-center">
          <TeamBall color="bg-red-500" label="Rojo" />
          <span className="font-bold text-2xl text-gray-700">vs</span>
          <TeamBall color="bg-blue-500" label="Azul" />
        </div>
        <div className="flex items-center gap-6 justify-center">
          <TeamBall color="bg-green-500" label="Verde" />
          <span className="font-bold text-2xl text-gray-700">vs</span>
          <TeamBall color="bg-orange-500" label="Naranja" />
        </div>
      </div>
    </motion.div>,

    // Slide torneo 2 → tercer puesto
    <motion.div
      key="tournament2"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center justify-center h-full text-center p-6 space-y-6"
    >
      <h1 className="text-3xl font-extrabold text-gray-800">
        Disputa del Tercer Puesto
      </h1>
      <p className="text-gray-600">Los perdedores jugarán por la medalla</p>
      <Medal className="w-16 h-16 text-amber-700" />
    </motion.div>,

    // Slide torneo 3 → final
    <motion.div
      key="tournament3"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center justify-center h-full text-center p-6 space-y-6"
    >
      <h1 className="text-3xl font-extrabold text-gray-800">
        Gran Final del Torneo
      </h1>
      <p className="text-gray-600">Los ganadores deciden el campeón</p>
      <Trophy className="w-16 h-16 text-yellow-500" />
    </motion.div>,

    // Slide torneo 4 → estadio
    <motion.div
      key="tournament4"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center justify-center h-full text-center p-6 space-y-6"
    >
      <h1 className="text-3xl font-extrabold text-gray-800">
        Ambos partidos se jugarán en
      </h1>
      <p className="text-lg text-gray-600">Estadio Horizon Fate</p>
      <img
        src="/estadio.png"
        alt="Estadio Horizon Fate"
        className="rounded-xl shadow-lg max-h-[400px]"
      />
    </motion.div>,
  ];
}
