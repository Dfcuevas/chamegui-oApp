import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// Supports weights 400-700
import "@fontsource-variable/lora";
// Supports weights 300-800
import "@fontsource-variable/open-sans";
//import and config tanstack query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
