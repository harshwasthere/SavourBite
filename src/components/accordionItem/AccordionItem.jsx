import "./AccordionItem.css";
import veg from "../../assets/images/veg.png";
import nonVeg from "../../assets/images/non-veg.png";
import ItemAddButton from "../Button/ItemAddButton";

export default function AccordionItem(props) {
    const { name, description, imageId, itemAttribute, price, defaultPrice } = props.data;
    const { restaurantId } = props;
    const imageLink = imageId
        ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`
        : null;

    return (
        <div className="accordionItem">
            <div className="accordionItem-details">
                <div className="acc-veg">
                    <img
                        src={itemAttribute.vegClassifier === "NONVEG" ? nonVeg : veg}
                        alt={itemAttribute.vegClassifier === "NONVEG" ? "non-veg-food" : "veg-food"}
                    />
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
                    {imageLink && <img src={imageLink} alt="restaurant-photo"  />}
                    <div className="add-btn-container">
                        <ItemAddButton
                            restaurantId={restaurantId}
                            itemData={props.data}
                            restaurantData={props.restaurantData}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
