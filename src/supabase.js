import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yaoyifmfyuxgabvmreum.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlhb3lpZm1meXV4Z2Fidm1yZXVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQxMzUwMTcsImV4cCI6MTk4OTcxMTAxN30.zS9OQ455zIRhLj5ePfBmueKjcZgQ_7byDUvMWt6sy50";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
