import React from "react";
import LogosCarrusel from "../components/LogosCarrusel";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-indigo-50 via-white to-indigo-100">
      {/* === Carrusel de logos en la parte superior === */}
      <div className="shadow-md">
        <LogosCarrusel speed={30} height="h-24" />
      </div>

      {/* === Header fijo con efecto glass === */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-indigo-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <nav className="flex space-x-6 text-indigo-700 font-medium">
            <a
              href="#calendario"
              className="hover:text-indigo-500 transition-colors"
            >
              Calendario
            </a>
            <a
              href="#resultados"
              className="hover:text-indigo-500 transition-colors"
            >
              Resultados
            </a>
          </nav>

          <img
            src="https://suhkxdtynussqitvsslp.supabase.co/storage/v1/object/public/images/Logo_Lig.png"
            alt="Liga Horizonte"
            className="w-44 h-auto drop-shadow-md"
          />

          <nav className="flex space-x-6 text-indigo-700 font-medium">
            <a
              href="#clasificacion"
              className="hover:text-indigo-500 transition-colors"
            >
              Clasificación
            </a>
            <a
              href="#estadisticas"
              className="hover:text-indigo-500 transition-colors"
            >
              Estadísticas
            </a>
          </nav>
        </div>
      </header>

      {/* === Hero principal === */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center relative">
        {/* Background sutil de gradiente radial */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-200/40 to-purple-200/30 pointer-events-none"></div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 tracking-tight mb-6 relative z-10">
          Liga Horizonte
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-gray-700 mb-8 relative z-10">
          La liga que siempre has imaginado, donde cada partido es una historia
          épica y cada equipo busca la gloria.
        </p>
        <a
          href="#calendario"
          className="relative z-10 inline-block px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 transition-transform transform hover:scale-105"
        >
          Explora la temporada
        </a>
      </main>

      {/* === Footer elegante === */}
      <footer className="bg-indigo-900 text-indigo-100 text-center py-6">
        <p className="text-sm">
          © {new Date().getFullYear()} Liga Horizonte — Todos los derechos
          reservados
        </p>
      </footer>
    </div>
  );
}
