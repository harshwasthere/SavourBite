import { useDispatch, useSelector } from "react-redux";
import "./ItemAddButton.css";
import { addItem, removeItem } from "../../redux/cartSlice";
import { toast } from "sonner";

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
            toast.success("Item added in your cart.");
        } else {
            toast.error("Your cart contains items from other restaurant.");
            return;
        }
    };

    const handleRemoveItem = (restaurantId, itemId, itemPrice) => {
        if (resId === null || resId === restaurantId) {
            dispatch(removeItem({ restaurantId, itemId, itemPrice }));
            toast.success("Item removed from your cart.");
        } else {
            toast.error("Your cart contains items from other restaurant.");
            return;
        }
    };

    return !itemExists ? (
        <>
            <button
                className="add-btn add-btn-size"
                onClick={() =>
                    handleAddItem(restaurantId, itemId, itemData, restaurantData, itemPrice)
                }
            >
                ADD
            </button>
        </>
    ) : (
        <div className="add-btn  add-btn-space">
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
