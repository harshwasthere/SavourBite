import { MapPin } from "lucide-react";
import "./MenuFooter.css";

export default function MenuFooter(props) {
    const { imageId, text, name, area, completeAddress } = props.data;

    const imageLink = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_60/${imageId}`;

    return (
        <div className="menu-footer">
            <div className="menu-footer-fssai">
                {imageId && <img src={imageLink} alt="fssai-logo"  />}
                <span>{text}</span>
            </div>
            <div className="menu-footer-breaker"></div>
            <div className="menu-footer-details">
                <span className="menu-footer-name">{name}</span>
                {area && <span className="menu-footer-area">{`(Outlet: ${area})`}</span>}
                {completeAddress && (
                    <div className="menu-footer-address">
                        <MapPin size={"1rem"} />
                        <span>{completeAddress}</span>
                    </div>
                )}
            </div>
        </div>
    );
}
