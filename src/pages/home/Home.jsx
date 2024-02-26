import "./home.css";
import homeIllustration from "../../assets/images/home-illustration.png";
import { LocateFixed, LocateOffIcon } from "lucide-react";
import { useLocation } from "../../hooks/useLocation";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const { fetchCurrentLocation, addDemoCoordinate } = useLocation();

    const navigate = useNavigate();

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
                            onClick={async () => {
                                await fetchCurrentLocation();
                                navigate("/home/restaurant");
                            }}
                            className="primary-btn location-btn search-size"
                        >
                            <LocateFixed />
                            Location
                        </button>

                        <button
                            onClick={async () => {
                                await addDemoCoordinate();
                                navigate("/home/restaurant");
                            }}
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
