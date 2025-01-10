import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Auth0ProviderWithHistory from "./Auth0ProviderWithHistory";

const container = document.getElementById("root");

if (!container) {
  throw new Error("El elemento root no existe");
}

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <App />
        <ToastContainer />
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </React.StrictMode>
);
