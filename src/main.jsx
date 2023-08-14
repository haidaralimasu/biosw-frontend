import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18n/index.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { BSCTestnet, DAppProvider } from "@usedapp/core";
import { bscRPCURL } from "./config.js";

const config = {
  readOnlyChainId: BSCTestnet.chainId,
  readOnlyUrls: {
    [BSCTestnet.chainId]: bscRPCURL,
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
      <ToastContainer />
    </DAppProvider>
  </React.StrictMode>
);
