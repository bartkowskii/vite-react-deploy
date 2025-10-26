import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// import { componentTagger } from "lovable-tagger"; // Ten import może być niepotrzebny, jeśli nie używasz tego narzędzia

// WAŻNE: Wpisz tutaj DOKŁADNIE nazwę swojego repozytorium
const REPO_NAME = "/vite-react-deploy/";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), 
    // mode === "development" && componentTagger() // Wyrzucamy to, by nie komplikować
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  // Zastąp starą linię nową, która używa stałej REPO_NAME
base: "/vite-react-deploy/",
}));
