import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Preload profile picture so it's cached before navigating to /about
import profilePic from "@/assets/profile-pic.png";
const link = document.createElement("link");
link.rel = "preload";
link.as = "image";
link.href = profilePic;
document.head.appendChild(link);

createRoot(document.getElementById("root")!).render(<App />);
