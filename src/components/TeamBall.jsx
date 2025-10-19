import { motion } from "framer-motion";

export default function TeamBall({ color, label, extra = "" }) {
  return (
    <motion.div
      className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg ${color} ${extra}`}
    >
      {label}
    </motion.div>
  );
}
