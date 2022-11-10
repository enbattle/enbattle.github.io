import { ColorModeScript, Box } from "@chakra-ui/react";
import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
// If you use strict mode, it"s useful in catching other bugs and issues, but causes react hooks to be called twice
root.render(
  // <StrictMode>
  <React.StrictMode>
    <Box>
      <ColorModeScript />
      <App />
    </Box>
  </React.StrictMode>
  // </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
