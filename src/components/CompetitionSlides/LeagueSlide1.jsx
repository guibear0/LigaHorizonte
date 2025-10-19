import { motion } from "framer-motion";
import TeamBall from "../TeamBall";

export default function LeagueSlide1() {
  return (
    <motion.div
      key="league1"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
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
    </motion.div>
  );
}
