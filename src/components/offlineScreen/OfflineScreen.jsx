import "./offlinescreen.css";
import error404 from "../../assets/images/mountain404error2.png";
import { useNavigate } from "react-router-dom";

export default function OfflineScreen() {
    const navigate = useNavigate();
    return (
        <div className="offline-screen">
            <img className="offline-screen-image" src={error404} alt="ERROR_404" />
            <span className="offline-screen-msg">Oops! It looks like you've lost connection.</span>
            <button onClick={() => navigate("/")} className="offline-screen-btn">
                Home
            </button>
        </div>
    );
}
