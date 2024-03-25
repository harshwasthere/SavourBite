import "./ErrorScreen.css";
import { useNavigate } from "react-router-dom";
import locUnavailable from "../../assets/images/locationUnavailable.png";
import errorImg from "../../assets/images/error.png";

export default function ErrorScreen(props) {
    const type = props.type;
    const navigate = useNavigate();
    let imageLink, msg;

    if (type === "offline") {
        imageLink = errorImg;
        msg = "Oops! It looks like you've lost connection.";
    } else if (type === "unavailable") {
        imageLink = locUnavailable;
        msg = "Oops! Location unavailable ";
    } else {
        imageLink = errorImg;
        msg = "Something went wrong! Please try again";
    }

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
