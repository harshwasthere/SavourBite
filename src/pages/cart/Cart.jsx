import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import AccordionItem from "../../components/AccordionItem/AccordionItem";
import CartPhoto from "../../assets/images/add-to-cart.png";

export default function Cart() {
    const navigate = useNavigate();
    const resId = useSelector((store) => store.cart.restaurantId);
    const items = useSelector((store) => store.cart.items);
    const resData = useSelector((store) => store.cart.restaurantData);
    const totalPrice = useSelector((store) => store.cart.totalPrice);

    if (items.length === 0) {
        return (
            <div className="empty-cart-container">
                <img src={CartPhoto} alt="" className="empty-cart-img" loading="lazy" />
                <span className="empty-cart-main-heading">Your cart is empty</span>
                <span className="empty-cart-sub-heading">
                    Looks like you have not added anything to your cart. Go ahead & explore items in
                    menu.
                </span>
                <button onClick={() => navigate("/restaurant")} className="offline-screen-btn">
                    Add items
                </button>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <span className="cart-title">Your Cart</span>
            <div className="cart">
                <div className="cart-details">
                    <div className="cart-details-restaurant">
                        <div className="cart-details-res-img">
                            <img
                                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.cloudinaryImageId}`}
                                alt=""
                               
                            />
                        </div>
                        <div className="cart-details-restaurant-subdetails">
                            <span className="cart-details-restaurant-name">{resData.name}</span>
                            <span className="cart-details-restaurant-locality">
                                {resData.locality}
                            </span>
                        </div>
                    </div>
                    <div className="cart-item-breaker"></div>
                    <div className="cart-bill-container">
                        <span className="cart-bill-title">Bill Details</span>
                        <div className="cart-bill-details">
                            {items.map((item) => {
                                const itemPrice = item.itemData.defaultPrice
                                    ? item.itemData.defaultPrice / 100
                                    : item.itemData.price / 100;
                                const itemTotalPrice = itemPrice * item.count;
                                return (
                                    <div key={item.itemId} className="cart-bill-item">
                                        <span className="cart-bill-item-name">{`${item.itemData.name} x ${item.count}`}</span>
                                        <span className="cart-bill-item-price">
                                            {`₹${itemTotalPrice}`}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="cart-item-breaker"></div>
                    <div className="cart-finalbill-container">
                        <div className="cart-finalbill-details">
                            <div className="cart-bill-item">
                                <span className="cart-bill-item-name bold ">{`Item Total`}</span>
                                <span className="cart-bill-item-price">{`₹${totalPrice}`}</span>
                            </div>

                            {resData.deliveryFee !== null && resData.deliveryFee !== undefined && (
                                <div className="cart-bill-item">
                                    <span className="cart-bill-item-name bold ">{`Delivery fee`}</span>
                                    <span className="cart-bill-item-price">{`₹${
                                        resData.deliveryFee / 100
                                    }`}</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="cart-item-breaker"></div>
                    <div className="cart-topay">
                        <button className="pay-btn">
                            {`Amount : ₹${
                                resData.deliveryFee !== null && resData.deliveryFee !== undefined
                                    ? totalPrice + resData.deliveryFee / 100
                                    : totalPrice
                            }`}
                        </button>
                    </div>
                </div>

                <div className="cart-items-container">
                    {items.map((item, index) => {
                        return (
                            <div key={item.itemData.id}>
                                <AccordionItem
                                    key={item.itemData.id}
                                    data={item.itemData}
                                    restaurantId={resId}
                                />
                                {items.length - 1 !== index && (
                                    <div className="cart-item-separator"></div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
