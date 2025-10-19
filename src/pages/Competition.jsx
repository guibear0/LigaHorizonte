import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, RefreshCw } from "lucide-react";
import Header from "../components/Header";
//  slides de liga
import LeagueSlide1 from "../components/CompetitionSlides/LeagueSlide1";
import LeagueSlide2 from "../components/CompetitionSlides/LeagueSlide2";
import LeagueSlide3 from "../components/CompetitionSlides/LeagueSlide3";
import LeagueSlide4 from "../components/CompetitionSlides/LeagueSlide4";

//  slides del torneo
import TournamentSlide1 from "../components/CompetitionSlides/TournamentSlide1";
import TournamentSlide2 from "../components/CompetitionSlides/TournamentSlide2";
import TournamentSlide3 from "../components/CompetitionSlides/TournamentSlide3";
import TournamentSlide4 from "../components/CompetitionSlides/TournamentSlide4";

export default function Competition() {
  const [index, setIndex] = useState(0);

  // Lista de slides en orden, pasando un prop de delay de 1 segundo
  const slides = [
    <LeagueSlide1 key="league1" delay={1000} />,
    <LeagueSlide2 key="league2" delay={1000} />,
    <LeagueSlide3 key="league3" delay={1000} />,
    <LeagueSlide4 key="league4" delay={1000} />,
    <TournamentSlide1 key="tournament1" delay={1000} />,
    <TournamentSlide2 key="tournament2" delay={1000} />,
    <TournamentSlide3 key="tournament3" delay={1000} />,
    <TournamentSlide4 key="tournament4" delay={1000} />,
  ];

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
  };

  const restartSlides = () => {
    setIndex(0);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-rose-100">
      <Header />
      <AnimatePresence mode="wait">{slides[index]}</AnimatePresence>

      {/* Flecha izquierda */}
      {index > 0 && (
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-gray-100"
        >
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
      )}

      {/* Flecha derecha o botón "Ver de nuevo" */}
      {index < slides.length - 1 ? (
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-gray-100"
        >
          <ArrowRight className="w-6 h-6 text-gray-700" />
        </button>
      ) : (
        <button
          onClick={restartSlides}
          className="absolute right-6 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-gray-100 flex items-center gap-2"
        >
          <RefreshCw className="w-6 h-6 text-gray-700" />
          <span className="text-sm font-medium text-gray-700">
            Ver de nuevo
          </span>
        </button>
      )}
    </div>
  );
}
