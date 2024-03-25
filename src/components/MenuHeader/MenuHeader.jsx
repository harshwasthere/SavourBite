import "./MenuHeader.css";
import starIcon from "../../assets/images/star.svg";
import { BadgeIndianRupeeIcon, Bike, Timer } from "lucide-react";

export default function MenuHeader(props) {
    const {
        name,
        cuisines,
        avgRating,
        totalRatingsString,
        sla,
        areaName,
        expectationNotifiers,
        costForTwoMessage,
    } = props.data;

    return (
        <div className="menu-header">
            <div className="menu-header-top">
                <div className="menu-header-details">
                    <span className="menu-name">{name}</span>
                    <span className="menu-subdetails">{cuisines?.join(", ")}</span>
                    <span className="menu-subdetails">{`${areaName ? areaName : ""} ${
                        areaName && sla.lastMileTravelString ? "," : ""
                    } ${sla?.lastMileTravelString ? sla.lastMileTravelString : ""}`}</span>
                </div>

                <div className="menu-rating">
                    <div className="menu-star">
                        <img src={starIcon} alt=""  />
                        <span>{avgRating}</span>
                    </div>
                    <div className="menu-header-separator"> </div>
                    <span className="menu-rating-string">{totalRatingsString}</span>
                </div>
            </div>

            <div className="menu-delivery">
                {expectationNotifiers?.[0]?.text && <Bike size={"1rem"} />}
                <span>{expectationNotifiers?.[0]?.text}</span>
            </div>
            <hr />
            <div className="menu-header-bottom">
                <div className="menu-header-bottom-item">
                    <Timer />
                    <span>{sla?.slaString}</span>
                </div>

                <div className="menu-header-bottom-item">
                    <BadgeIndianRupeeIcon />
                    <span>{costForTwoMessage}</span>
                </div>
            </div>
        </div>
    );
}
