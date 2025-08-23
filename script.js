import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const supabaseUrl = "https://zeqefyxwhznqiyfgjmrn.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InplcWVmeXh3aHpucWl5ZmdqbXJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3MjYwNTcsImV4cCI6MjA2MzMwMjA1N30.ktk-5EzJBa7W2zq5ALoYMDrRHrx0wScyiu874g0czaw"; // public key
const supabase = createClient(supabaseUrl, supabaseKey);

async function loadAnnouncements() {
  const { data, error } = await supabase
    .from("announcements")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return;
  }

  const list = document.getElementById("announcement-list");
  list.innerHTML = "";
  data.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.text;
    list.appendChild(li);
  });
}

loadAnnouncements();
