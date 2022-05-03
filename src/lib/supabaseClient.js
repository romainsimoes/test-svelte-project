import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://omisevpgwvbktywfeiwp.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9taXNldnBnd3Zia3R5d2ZlaXdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTE1MjAwNTgsImV4cCI6MTk2NzA5NjA1OH0.Mjye8WIsZ4eeuKmb1WFx9ZKjlDE2xKCTYuiB-ElUuM4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
