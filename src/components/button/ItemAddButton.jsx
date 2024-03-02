import { useDispatch, useSelector } from "react-redux";
import "./itemaddbutton.css";
import { addItem, removeItem } from "../../redux/cartSlice";

export default function ItemAddButton(props) {
    const { restaurantId, itemData, restaurantData } = props;
    const itemId = itemData.id;

    const itemPrice = itemData.defaultPrice ? itemData.defaultPrice / 100 : itemData.price / 100;

    const dispatch = useDispatch();
    const resId = useSelector((store) => store.cart.restaurantId);
    const items = useSelector((store) => store.cart.items);

    const itemExists = items.some((item) => item.itemId === itemData.id);
    const existingItemIndex = items.findIndex((item) => item.itemId === itemId);

    const handleAddItem = (restaurantId, itemId, itemData, restaurantData, itemPrice) => {
        if (resId === null || resId === restaurantId) {
            dispatch(addItem({ restaurantId, itemId, itemData, restaurantData, itemPrice }));
        } else {
            console.log("you are trying to add item of other restaurant");
            return;
        }
        console.log(resId, items);
    };

    const handleRemoveItem = (restaurantId, itemId, itemPrice) => {
        console.log("resid : " + resId + " restaurantId : " + restaurantId);
        if (resId === null || resId === restaurantId) {
            dispatch(removeItem({ restaurantId, itemId, itemPrice }));
        } else {
            console.log("you are trying to remove item of other restaurant");
            return;
        }
        console.log(resId, items);
    };

    return !itemExists ? (
        <button
            className="add-btn add-btn-size"
            onClick={() => handleAddItem(restaurantId, itemId, itemData, restaurantData, itemPrice)}
        >
            ADD
        </button>
    ) : (
        <div className="add-btn add-btn-size add-btn-space">
            <span
                className="calc-btn"
                onClick={() => handleRemoveItem(restaurantId, itemId, itemPrice)}
            >
                -
            </span>
            <span>{items[existingItemIndex].count}</span>
            <span
                className="calc-btn"
                onClick={() =>
                    handleAddItem(restaurantId, itemId, itemData, restaurantData, itemPrice)
                }
            >
                +
            </span>
        </div>
    );
}
