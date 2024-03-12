import "./OfflineScreen.css";
import { useNavigate } from "react-router-dom";
import locUnavailable from "../../assets/images/locationUnavailable.png";
import error from "../../assets/images/error.png";

export default function OfflineScreen(props) {
    const type = props.type;
    const navigate = useNavigate();
    const unavailable = {
        imageLink: locUnavailable,
        msg: "Oops! Location unavailable ",
    };

    const offline = {
        imageLink: error,
        msg: "Oops! It looks like you've lost connection.",
    };

    return (
        <div className="offline-screen">
            <img
                className="offline-screen-image"
                src={type === "offline" ? offline.imageLink : unavailable.imageLink}
                alt="ERROR_404"
                loading="lazy"
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
