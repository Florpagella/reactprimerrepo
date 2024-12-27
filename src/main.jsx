import React from "react";
import ReactDom from "react-dom/client";
import "./styles.css";
import { ListadoApp } from "./ListadoApp";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ListadoApp />
  </React.StrictMode>
);
