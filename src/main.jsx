import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { LocationProvider } from "./context/LocationProvider";
import { Provider } from "react-redux";
import webStore from "./redux/webStore";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={webStore}>
                <LocationProvider>
                    <App />
                </LocationProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
);
