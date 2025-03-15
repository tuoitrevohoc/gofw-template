import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RelayEnvironmentProvider } from "react-relay";
import environment from "./relay/environment.ts";

import "./global.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RelayEnvironmentProvider environment={environment}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </RelayEnvironmentProvider>
  </StrictMode>
);
