import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import TeamBall from "../TeamBall";
import { Award } from "lucide-react";

export default function TournamentSlide2() {
  const controlsBall1 = useAnimation();
  const controlsBall2 = useAnimation();
  const controlsVS = useAnimation();
  const controlsAward = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // Paso 1: Hacer que las bolas aparezcan desde arriba con un fade, más lento
      await Promise.all([
        controlsBall1.start({
          y: 0,
          opacity: 1,
          transition: { duration: 2, ease: "easeOut" }, // Caída más lenta
        }),
        controlsBall2.start({
          y: 0,
          opacity: 1,
          transition: { duration: 2, ease: "easeOut" }, // Caída más lenta
        }),
      ]);

      // Pausa breve antes de mostrar el VS
      await new Promise((res) => setTimeout(res, 500));

      // Paso 2: Mostrar el VS en el centro
      await controlsVS.start({
        opacity: 1,
        transition: { duration: 0.5 },
      });

      // Pausa breve antes de mostrar el Award
      await new Promise((res) => setTimeout(res, 500));

      // Paso 3: Mostrar el Award
      await controlsAward.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
      });
    };

    sequence();
  }, [controlsBall1, controlsBall2, controlsVS, controlsAward]);

  return (
    <motion.div
      key="tournament2"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center justify-center h-full text-center p-6 space-y-6"
    >
      <h1 className="text-4xl font-extrabold text-gray-800">
        Partido por el tercer puesto
      </h1>
      <p className="text-lg text-gray-600">
        Los perdedores de los partidos se disputarán el tercer puesto a un
        partido.
      </p>
      <div className="relative flex gap-12 mt-4 items-center">
        {/* Bola del equipo 3 */}
        <motion.div initial={{ y: -100, opacity: 0 }} animate={controlsBall1}>
          <TeamBall color="bg-green-500" label="3" />
        </motion.div>

        {/* VS en el centro */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={controlsVS}
          className="text-2xl font-bold text-gray-700"
        >
          VS
        </motion.div>

        {/* Bola del equipo 4 */}
        <motion.div initial={{ y: -100, opacity: 0 }} animate={controlsBall2}>
          <TeamBall color="bg-orange-500" label="4" />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={controlsAward}
        className="mt-6"
      >
        <Award
          className="w-12 h-12"
          style={{
            color: "#cd7f32", // Color bronce
            filter: "drop-shadow(0 0 4px rgba(0, 0, 0, 0.3))",
            strokeWidth: 2,
            background: "linear-gradient(45deg, #cd7f32, #a5694f)", // Efecto metálico
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
