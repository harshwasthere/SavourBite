import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { LocationProvider } from "./context/LocationProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <LocationProvider>
            <App />
        </LocationProvider>
    </React.StrictMode>,
);
