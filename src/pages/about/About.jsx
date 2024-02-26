import React from "react";
import { Code2Icon, Github, MapPin } from "lucide-react";
import "./about.css";
import AboutShimmer from "../../components/shimmer/AboutShimmer";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            loading: true,
        };
    }

    async componentDidMount() {
        try {
            const response = await fetch("https://api.github.com/users/harsh12codes");
            const json = await response.json();
            console.log(json);

            this.setState({
                data: json,
                loading: false,
            });
        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle error, e.g., display an error message to the user
            this.setState({
                loading: false,
            });
        }
    }

    render() {
        const { avatar_url, name, location, bio, login } = this.state.data;

        return this.state.loading ? (
            <AboutShimmer />
        ) : (
            <div className="about">
                <div className="about-me">
                    <span className="about-title">෴ ABOUT ME ෴</span>
                    <div className="about-me-body">
                        <div className="about-me-profile-photo">
                            <img src={avatar_url} alt="" />
                        </div>
                        <div className="about-me-details">
                            <div className="about-me-sub-details">
                                <span className="about-me-name">{name}</span>
                                <span className="about-me-username">{login}</span>
                                <div className="about-me-location">
                                    <MapPin size={"1rem"} />
                                    <span>{location}</span>
                                </div>
                                <span className="about-me-bio">{bio}</span>
                            </div>

                            <div className="about-me-links">
                                <button className="btn">
                                    <Github size={"1rem"} />
                                    Harsh12Codes
                                </button>
                                <button className="btn">
                                    <Code2Icon size={"1rem"} />
                                    KhanaKhoj
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="about-project">
                    <span className="about-title">෴ ABOUT PROJECT ෴</span>
                </div> */}
            </div>
        );
    }
}

export default About;
