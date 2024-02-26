import { useState } from "react";
import { LocationContext } from "./LocationContext";

export const LocationProvider = ({ children }) => {
    const [currentLocation, setCurrentLocation] = useState(null);

    const fetchCurrentLocation = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setCurrentLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                    resolve();
                },
                (error) => {
                    console.error("Error getting geolocation:", error);
                    reject(error);
                },
            );
        });
    };

    const addDemoCoordinate = () => {
        setCurrentLocation({
            latitude: 25.3407388,
            longitude: 74.63131829999999,
        });
        return Promise.resolve();
    };

    return (
        <LocationContext.Provider
            value={{
                currentLocation,
                fetchCurrentLocation,
                addDemoCoordinate,
            }}
        >
            {children}
        </LocationContext.Provider>
    );
};
