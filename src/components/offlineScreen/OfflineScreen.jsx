import "./offlinescreen.css";
import { useNavigate } from "react-router-dom";

export default function OfflineScreen(props) {
    const type = props.type;
    const navigate = useNavigate();
    const unavailable = {
        imageLink: "./src/assets/images/locationUnavailable.png",
        msg: "Oops! Location unavailable ",
    };

    const offline = {
        imageLink: "/src/assets/images/error.png",
        msg: "Oops! It looks like you've lost connection.",
    };

    return (
        <div className="offline-screen">
            <img
                className="offline-screen-image"
                src={type === "offline" ? offline.imageLink : unavailable.imageLink}
                alt="ERROR_404"
            />
            <span className="offline-screen-msg">
                {type === "offline" ? offline.msg : unavailable.msg}
            </span>
            <button onClick={() => navigate("/")} className="offline-screen-btn">
                Home
            </button>
        </div>
    );
}
