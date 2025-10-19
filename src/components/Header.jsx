import { ArrowRight, Trophy, Calendar, BarChart2, Table } from "lucide-react";
import { motion } from "framer-motion";

// Reusable Header Component
export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-100/80 border-1 border-gray-300 ">
      <div className="flex items-center justify-between px-4 py-2 max-h-20">
        <nav className="flex space-x-4 text-gray-700 font-medium">
          <a
            href="#"
            className="flex items-center hover:text-teal-600 transition-colors"
          >
            <Table className="w-5 h-5 mr-1" /> Clasificación
          </a>
          <a
            href="#"
            className="flex items-center hover:text-teal-600 transition-colors"
          >
            <Calendar className="w-5 h-5 mr-1" /> Jornadas
          </a>
        </nav>

        <a href="/">
          <img
            src="https://suhkxdtynussqitvsslp.supabase.co/storage/v1/object/public/images/Logo_Lig.png"
            alt="Liga Horizonte"
            className="w-32 h-auto drop-shadow-md"
          />
        </a>

        <nav className="flex space-x-4 text-gray-700 font-medium">
          <a
            href="#"
            className="flex items-center hover:text-teal-600 transition-colors"
          >
            <Trophy className="w-5 h-5 mr-1" /> Equipos
          </a>
          <a
            href="#"
            className="flex items-center hover:text-teal-600 transition-colors"
          >
            <BarChart2 className="w-5 h-5 mr-1" /> Estadísticas
          </a>
        </nav>
      </div>
    </header>
  );
}
