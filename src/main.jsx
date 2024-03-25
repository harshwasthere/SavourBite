import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { LocationProvider } from "./context/LocationProvider";
import { Provider } from "react-redux";
import webStore from "./redux/webStore";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={webStore}>
            <LocationProvider>
                <App />
            </LocationProvider>
        </Provider>
    </React.StrictMode>,
);
