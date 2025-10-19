import { motion } from "framer-motion";

export default function LeagueSlide4() {
  const teams = [
    { name: "Equipo 1", points: 24, goalDiff: 10 },
    { name: "Equipo 2", points: 24, goalDiff: 8 },
    { name: "Equipo 3", points: 20, goalDiff: 5 },
    { name: "Equipo 4", points: 18, goalDiff: 2 },
    { name: "Equipo 5", points: 16, goalDiff: -1 },
    { name: "Equipo 6", points: 14, goalDiff: -3 },
    { name: "Equipo 7", points: 12, goalDiff: -5 },
    { name: "Equipo 8", points: 10, goalDiff: -8 },
    { name: "Equipo 9", points: 8, goalDiff: -10 },
    { name: "Equipo 10", points: 6, goalDiff: -12 },
  ];

  const sortedTeams = [...teams].sort((a, b) => {
    if (b.points === a.points) return b.goalDiff - a.goalDiff;
    return b.points - a.points;
  });

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: i < 4 ? 1 : 0.3,
      y: 0,
      transition: { delay: 0.8 + i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <motion.div
      key="league4"
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center h-full text-center p-6 space-y-6"
    >
      <motion.h1
        custom={0}
        variants={headerVariants}
        className="text-4xl font-extrabold text-gray-800 mb-6"
      >
        Tabla de Clasificación
      </motion.h1>

      <motion.p
        custom={1}
        variants={headerVariants}
        className="text-lg text-gray-600 mb-2"
      >
        Se clasificarán los <strong>4 primeros</strong> equipos.
      </motion.p>

      <motion.p
        custom={2}
        variants={headerVariants}
        className="text-sm text-gray-500 mb-4"
      >
        En caso de empate a puntos, gana quien tenga mejor diferencia de goles.
      </motion.p>

      <motion.table
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="table-auto border-collapse border border-gray-300 shadow-lg"
      >
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Posición</th>
            <th className="border border-gray-300 px-4 py-2">Equipo</th>
            <th className="border border-gray-300 px-4 py-2">Puntos</th>
            <th className="border border-gray-300 px-4 py-2">Dif. Goles</th>
          </tr>
        </thead>
        <tbody>
          {sortedTeams.map((team, i) => (
            <motion.tr
              key={team.name}
              custom={i}
              variants={rowVariants}
              initial="hidden"
              animate="visible"
              className={`${
                i < 4 ? "bg-green-200 font-bold" : "bg-white"
              } hover:bg-gray-100`}
            >
              <td className="border border-gray-300 px-4 py-2">{i + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{team.name}</td>
              <td className="border border-gray-300 px-4 py-2">
                {team.points}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {team.goalDiff}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>

      <motion.div
        custom={3}
        variants={headerVariants}
        className="mt-4 text-sm text-gray-600"
      >
        <strong>Ejemplo:</strong> Equipo 1 y Equipo 2 tienen 24 puntos, pero
        Equipo 1 tiene +10 de diferencia de goles y Equipo 2 +8, por lo que
        Equipo 1 queda primero.
      </motion.div>
    </motion.div>
  );
}
