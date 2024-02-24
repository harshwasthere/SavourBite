import "./home.css";
import homeIllustration from "../../assets/images/home-illustration.png";
import { LocateFixed, LocateOffIcon } from "lucide-react";

export default function Home() {
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
                        <button className="primary-btn location-btn search-size">
                            <LocateFixed />
                            Location
                        </button>

                        <button className="primary-btn search-size">
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
