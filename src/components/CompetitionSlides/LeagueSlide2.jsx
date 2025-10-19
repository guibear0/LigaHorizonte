import { motion } from "framer-motion";
import TeamBall from "../TeamBall";

export default function LeagueSlide2() {
  return (
    <motion.div
      key="league2"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
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
    </motion.div>
  );
}
