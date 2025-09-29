// src/lib/supabaseHelpers.js
import { supabase } from "../lib/supabaseClient"; // tu cliente central

export function buildLogoUrl(teamName, teamSlug) {
  if (!teamName || !teamSlug) return "";
  // 👇 NO encodeURIComponent aquí
  const path = `Equipos/${teamName}/Logo_${teamSlug}.png`;
  return supabase.storage.from("images").getPublicUrl(path).data.publicUrl;
}
