import { useEffect, useState } from "react";

export default function useOnlineStatus() {
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("online", () => {
            setOnlineStatus(true);
        });

        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });
    }, []);

    return onlineStatus;
}
