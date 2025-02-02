import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // Import BrowserRouter here
import App from "./App";  // Import App component
import "./index.css";  // Global styles

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>  {/* Wrap the entire App with BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
