import "./offlinescreen.css";
import { useNavigate } from "react-router-dom";

export default function OfflineScreen(props) {
    const { imageLink, msg } = props.data;
    const navigate = useNavigate();
    return (
        <div className="offline-screen">
            <img className="offline-screen-image" src={imageLink} alt="ERROR_404" />
            <span className="offline-screen-msg">{msg}</span>
            <button onClick={() => navigate("/")} className="offline-screen-btn">
                Home
            </button>
        </div>
    );
}
