import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://wxguxijjsvvtykmynhqc.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4Z3V4aWpqc3Z2dHlrbXluaHFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2MzIzMzUsImV4cCI6MjA2MzIwODMzNX0.JRZvmOqXUM4zqcZf3ZboxG492Oj7HXv73E80qoB78JY";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
