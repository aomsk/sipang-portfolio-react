import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "../src/styles/index.css";
import { ActiveNavbarProvider } from "./context/activeSectionNavbar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ActiveNavbarProvider>
      <App />
    </ActiveNavbarProvider>
  </React.StrictMode>
);
