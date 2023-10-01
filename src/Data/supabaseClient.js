import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://konhczkglomxvygmzpno.supabase.co";
// const supabaseAnonKey = "process.env.SUPABASE_KEY";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvbmhjemtnbG9teHZ5Z216cG5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU4NTUxMzcsImV4cCI6MjAxMTQzMTEzN30.7ugUwS6a368SdA5DeQ11SLBQSh6Rl-D6GmJ5ACyL8L4";

export const supabase = createClient(supabaseURL, supabaseAnonKey);
