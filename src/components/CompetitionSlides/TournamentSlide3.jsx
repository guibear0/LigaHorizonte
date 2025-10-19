import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import TeamBall from "../TeamBall";
import { Trophy } from "lucide-react";

export default function TournamentSlide3() {
  const controlsBall1 = useAnimation();
  const controlsBall2 = useAnimation();
  const controlsVS = useAnimation();
  const controlsTrophy = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // Paso 1: Hacer que las bolas aparezcan desde abajo con un fade, subiendo lentamente
      await Promise.all([
        controlsBall1.start({
          y: 0,
          opacity: 1,
          transition: { duration: 2, ease: "easeOut" }, // Misma velocidad que Slide2
        }),
        controlsBall2.start({
          y: 0,
          opacity: 1,
          transition: { duration: 2, ease: "easeOut" }, // Misma velocidad que Slide2
        }),
      ]);

      // Pausa breve antes de mostrar el VS
      await new Promise((res) => setTimeout(res, 500));

      // Paso 2: Mostrar el VS en el centro
      await controlsVS.start({
        opacity: 1,
        transition: { duration: 0.5 },
      });

      // Pausa breve antes de mostrar el Trophy
      await new Promise((res) => setTimeout(res, 500));

      // Paso 3: Mostrar el Trophy arriba
      await controlsTrophy.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
      });
    };

    sequence();
  }, [controlsBall1, controlsBall2, controlsVS, controlsTrophy]);

  return (
    <motion.div
      key="tournament3"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center justify-center h-full text-center p-6 space-y-6"
    >
      <h1 className="text-4xl font-extrabold text-gray-800">
        Final del Torneo
      </h1>
      <p className="text-lg text-gray-600">
        Los ganadores de los partidos decidirán el vencedor del torneo.
      </p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={controlsTrophy}
        className="mt-6"
      >
        <Trophy
          className="w-12 h-12"
          style={{
            color: "#facc15", // Color dorado
            filter: "drop-shadow(0 0 4px rgba(0, 0, 0, 0.3))",
            strokeWidth: 2,
            background: "linear-gradient(45deg, #facc15, #eab308)", // Efecto metálico dorado
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        />
      </motion.div>

      <div className="relative flex gap-12 mt-4 items-center">
        {/* Bola del equipo 1 */}
        <motion.div initial={{ y: 100, opacity: 0 }} animate={controlsBall1}>
          <TeamBall color="bg-red-500" label="1" />
        </motion.div>

        {/* VS en el centro */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={controlsVS}
          className="text-2xl font-bold text-gray-700"
        >
          VS
        </motion.div>

        {/* Bola del equipo 2 */}
        <motion.div initial={{ y: 100, opacity: 0 }} animate={controlsBall2}>
          <TeamBall color="bg-blue-500" label="2" />
        </motion.div>
      </div>
    </motion.div>
  );
}
