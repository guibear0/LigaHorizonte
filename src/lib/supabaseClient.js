import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://suhkxdtynussqitvsslp.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1aGt4ZHR5bnVzc3FpdHZzc2xwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5NzI4OTEsImV4cCI6MjA3NDU0ODg5MX0.aMIzePGPrHjI8AXMMHVtlKtlUPRloByZJgkfFp6zeNY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
