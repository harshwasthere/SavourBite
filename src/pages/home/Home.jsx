import "./home.css";
import homeIllustration from "../../assets/images/home-illustration.png";
import { LocateFixed, LocateOffIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    const handleLocation = (notDemo) => {
        if ("geolocation" in navigator && notDemo) {
            navigator.geolocation.getCurrentPosition(function (position) {
                navigate("/restaurant", {
                    state: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    },
                });
            });
        } else {
            console.log("Geolocation is not available in your browser.");
            navigate("/restaurant", {
                state: {
                    latitude: 26.8947446,
                    longitude: 75.8301169,
                },
            });
        }
    };
    return (
        <div className="home">
            <div className="home-logo">KhanaKhoj</div>
            <div className="home-body">
                <div className="home-details">
                    <div className="home-text">
                        <span>
                            Your <span>Cravings</span>,
                        </span>
                        <span>Delivered at the speed of a click. </span>
                        <span>
                            The quickest way to find your <span>food</span>
                        </span>
                    </div>

                    <div className="btn-container">
                        <button
                            onClick={() => handleLocation(true)}
                            className="primary-btn location-btn search-size"
                        >
                            <LocateFixed />
                            Location
                        </button>

                        <button
                            onClick={() => handleLocation(false)}
                            className="primary-btn search-size"
                        >
                            <LocateOffIcon />
                            Demo
                        </button>
                    </div>
                </div>
                <div className="home-illustration">
                    <img src={homeIllustration} alt="" />
                </div>
            </div>

            <div className="home-footer">Created💜@Harsh12codes</div>
        </div>
    );
}


