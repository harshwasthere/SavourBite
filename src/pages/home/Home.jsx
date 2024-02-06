import "./home.css";
import homeIllustration from "../../assets/images/home-illustration.png";
import { useEffect } from "react";

export default function Home() {
    // const url = "https://outpost.mappls.com/api/security/oauth/token";
    // const grantType = "client_credentials";
    // const clientId =
    //     "96dHZVzsAuuX800hZtxv7UmHK7yYO-uPnn9APnRTBh_hUvdcZkyZSehutg6nYBRWMLfi9WCPinfzub_cfB-Tzg==";
    // const clientSecret =
    //     "lrFxI-iSEg-KJoN_MP-pAFLz4-JHC3r54BS2mWlam_gC6rdmO8Bcm11kPh8cPfQf4SkWHzSK6R6M-Uc4mJ9gEMEpsADyRedX";

    // useEffect(() => {
    //     fetchCordinates(url);
    // }, []);

    // const fetchCordinates = async (url) => {
    //     const requestOptions = {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/x-www-form-urlencoded",
    //             Accept: "application/json",
    //         },
    //         body: `grant_type=${grantType}&client_id=${encodeURIComponent(
    //             clientId,
    //         )}&client_secret=${encodeURIComponent(clientSecret)}`,
    //     };
    //     try {
    //         const response = await fetch(url, requestOptions);

    //         if (!response.ok) {
    //             console.log("response is !ok");
    //             return;
    //         }

    //         const tokenData = await response.json();
    //         console.log(tokenData);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

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
                    <div className="primary-search">
                        <label>
                            <input type="text" placeholder="Location" className="search-size" />
                        </label>
                        <button className="primary-btn search-size">Search</button>
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
