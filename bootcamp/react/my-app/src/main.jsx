import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";
import App from "./App.jsx";
<<<<<<< Updated upstream
import { ThinkingInReact } from "./pages/ThinkingInReact.jsx";
=======
>>>>>>> Stashed changes

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
<<<<<<< Updated upstream
        <Route path="/thinking-in-react" element={<ThinkingInReact />} />
=======
>>>>>>> Stashed changes
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
