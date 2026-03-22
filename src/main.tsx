/**
 * NextERP Systems
 * Enterprise Management Ecosystem
 * Developed by Reagan Otema & Binsobedde Najiib
 */

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./components/theme-provider";
import "./globals.css";

// Get root container
const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container missing in index.html");
}

// Create React root
const root = createRoot(container);

// Render application
root.render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);