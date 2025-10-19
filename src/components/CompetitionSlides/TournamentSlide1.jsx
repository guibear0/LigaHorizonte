import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import TeamBall from "../TeamBall";

export default function TournamentSlide1() {
  const controls = useAnimation();
  const controlsVS1 = useAnimation();
  const controlsVS2 = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // Paso 1: Mostrar los 4 equipos en línea horizontal, espaciados
      await controls.start((i) => ({
        x: i * 80 - 120, // Espaciado de 80px, centrado
        y: 0,
        opacity: 1,
        transition: { duration: 1.5, ease: "easeInOut" }, // Animación más rápida
      }));

      // Pausa para que se vea claramente la alineación
      await new Promise((res) => setTimeout(res, 800));

      // Paso 2: Juntar los equipos en un círculo
      await controls.start((i) => ({
        x: Math.cos((i * Math.PI) / 2) * 40,
        y: Math.sin((i * Math.PI) / 2) * 40,
        transition: { duration: 1, ease: "easeInOut" }, // Animación más rápida
      }));

      // Pausa breve
      await new Promise((res) => setTimeout(res, 400));

      // Paso 3: Separar en enfrentamientos (1 vs 3 a la izquierda, 2 vs 4 a la derecha)
      await controls.start((i) => {
        const positions = [
          { x: -120, y: -40 }, // Equipo 1 (izquierda arriba, más separado)
          { x: 120, y: -40 }, // Equipo 2 (derecha arriba, más separado)
          { x: -120, y: 40 }, // Equipo 3 (izquierda abajo, más separado)
          { x: 120, y: 40 }, // Equipo 4 (derecha abajo, más separado)
        ];
        return {
          x: positions[i].x,
          y: positions[i].y,
          transition: { duration: 1, ease: "easeInOut" }, // Animación más rápida
        };
      });

      // Paso 4: Mostrar los VS
      await controlsVS1.start({ opacity: 1, transition: { duration: 0.5 } });
      await controlsVS2.start({ opacity: 1, transition: { duration: 0.5 } });
    };

    sequence();
  }, [controls, controlsVS1, controlsVS2]);

  const teams = [
    { color: "bg-red-500", label: "1" },
    { color: "bg-blue-500", label: "2" },
    { color: "bg-green-500", label: "3" },
    { color: "bg-orange-500", label: "4" },
  ];

  return (
    <motion.div
      key="tournament1"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-full text-center p-6"
    >
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
        Sorteo de los 4 primeros
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Los 4 equipos se alinean y se posicionan para los enfrentamientos.
      </p>

      <div className="relative w-96 h-40 flex justify-center items-center">
        {/* Equipos */}
        {teams.map((team, i) => (
          <motion.div
            key={team.label}
            custom={i}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={controls}
            className="absolute"
          >
            <TeamBall color={team.color} label={team.label} />
          </motion.div>
        ))}

        {/* VS entre 1 y 3 (centrado entre la pareja izquierda) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={controlsVS1}
          className="absolute text-2xl font-bold text-gray-700"
          style={{
            left: "19%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          VS
        </motion.div>

        {/* VS entre 2 y 4 (centrado entre la pareja derecha) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={controlsVS2}
          className="absolute text-2xl font-bold text-gray-700"
          style={{
            left: "81%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          VS
        </motion.div>
      </div>
    </motion.div>
  );
}
