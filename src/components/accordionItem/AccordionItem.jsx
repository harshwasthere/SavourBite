import { dummyData } from "../accordion/dummyData";
import "./accordionItem.css";
import veg from "../../assets/images/veg.png";
import nonVeg from "../../assets/images/non-veg.png";
import dishImg from "../../assets/images/dishimg.png";

export default function AccordionItem(props) {
    const { name, description, imageId, inStock, itemAttribute, price, defaultPrice } = props.data;
    const imageLink =
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
        imageId;

    return (
        <div className="accordionItem">
            <div className="accordionItem-details">
                <div className="acc-veg">
                    {itemAttribute?.vegClassifier === "NONVEG" ? (
                        <img src={nonVeg} alt="non-vegitarian-food" />
                    ) : (
                        <img src={veg} alt="vegitarian-food" />
                    )}
                </div>
                <div className="acc-subdetails">
                    <span className="acc-item-name">{name}</span>
                    <span className="acc-item-price">
                        ₹{defaultPrice ? defaultPrice / 100 : price / 100}
                    </span>
                </div>
                <div className="acc-item-detail">
                    <span>{description}</span>
                </div>
            </div>
            <div className="accordionItem-photo">
                <div className="acc-item-photo">
                    {imageId !== undefined && <img src={imageLink} alt="restaurant-photo" />}
                    <div className="add-btn-container">
                        <button className="add-btn add-btn-size">ADD</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
