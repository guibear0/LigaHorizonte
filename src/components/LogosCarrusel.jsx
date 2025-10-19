import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { buildLogoUrl } from "../lib/supabaseHelpers";

export default function LogosCarrusel({ speed = 30 }) {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    async function fetchLogos() {
      const { data, error } = await supabase.from("teams").select("name, slug");
      if (error) {
        console.error("Error cargando logos:", error);
        return;
      }
      setLogos(
        data.map((t) => ({
          ...t,
          logoUrl: buildLogoUrl(t.name, t.slug),
        }))
      );
    }
    fetchLogos();
  }, []);

  return (
    <div className="overflow-hidden bg-white">
      <div
        className="flex w-max animate-scrollX"
        style={{ animationDuration: `${speed}s` }}
      >
        {[...logos, ...logos].map((team, i) => (
          <img
            key={i}
            src={team.logoUrl}
            alt={team.name}
            className="mx-8 flex-shrink-0 w-16 object-contain"
            style={{ maxHeight: "50px", aspectRatio: "1 / 1" }} // Max height 50px, maintains square proportion
          />
        ))}
      </div>
    </div>
  );
}
