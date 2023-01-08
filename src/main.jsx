import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import { GlobalStyles } from "./comps";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <GlobalStyles>
  //     <App />
  //   </GlobalStyles>
  // </React.StrictMode>
  <GlobalStyles>
    <App />
  </GlobalStyles>
);
