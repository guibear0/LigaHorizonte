import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { buildLogoUrl } from "../lib/supabaseHelpers";

export default function LogosCarrusel({ speed = 30, height = "h-20" }) {
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
    <div className="overflow-hidden bg-white py-6">
      <div
        className="flex w-max animate-scrollX"
        style={{ animationDuration: `${speed}s` }}
      >
        {[...logos, ...logos].map((team, i) => (
          <img
            key={i}
            src={team.logoUrl}
            alt={team.name}
            className={`${height} w-auto mx-8 flex-shrink-0`}
          />
        ))}
      </div>
    </div>
  );
}
