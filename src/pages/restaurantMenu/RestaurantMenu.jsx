import { useEffect, useState } from "react";
import "./Restaurantmenu.css";
import Accordion from "../../components/Accordion/Accordion";
import MenuHeader from "../../components/MenuHeader/MenuHeader";
import { useParams } from "react-router-dom";
import RestaurantShimmer from "../../components/Shimmer/RestaurantShimmer";
import MenuFooter from "../../components/MenuFooter/MenuFooter";
import useOnlineStatus from "../../hooks/useOnlineStatus";
import ErrorScreen from "../../components/ErrorScreen/ErrorScreen";
import { Toaster } from "sonner";

const RestaurantMenu = () => {
    const onlineStatus = useOnlineStatus();
    const { resId } = useParams();
    const [loading, setLoading] = useState(true);
    const [headerData, setHeaderData] = useState({});
    const [menuData, setMenuData] = useState([]);
    const [footerData, setFooterData] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8947446&lng=75.8301169&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;
            const main_url = "https://thingproxy-760k.onrender.com/fetch/" + url;
            const response = await fetch(main_url);
            const json = await response.json();
            const data = json?.data?.cards;

            const headerFinder = data.find(
                (card) =>
                    card.card &&
                    card.card.card &&
                    card.card.card["@type"] ===
                        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            );
            const header = headerFinder?.card?.card?.info;

            const menuFinder = data.find((card) => "groupedCard" in card);
            const menu = menuFinder.groupedCard?.cardGroupMap?.REGULAR?.cards;

            const { imageId, text } = menu[menu.length - 2]?.card?.card || {};
            const { name, area, completeAddress } = menu[menu.length - 1]?.card?.card || {};
            const footer = { imageId, text, name, area, completeAddress };

            setHeaderData(header || {});
            setMenuData(menu || []);
            setFooterData(footer || {});
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    if (!onlineStatus) return <ErrorScreen />;

    if (loading) {
        return <RestaurantShimmer />;
    }

    return (
        <div className="restaurant-menu">
            <Toaster richColors position="bottom-right" expand={true} />
            <div className="restaurant-subpage">
                <div className="restaurant-subpage-header">
                    <MenuHeader data={headerData} />
                </div>
                <div className="menu">
                    <div className="menu-main-title">
                        <span>෴ M E N U ෴</span>
                    </div>
                    {menuData.map((cardData, index) => {
                        const card = cardData.card?.card;
                        if (!card?.title) return null;

                        if (card?.itemCards) {
                            return (
                                <Accordion
                                    key={index}
                                    card={card}
                                    index={index}
                                    isSubCard={false}
                                    restaurantId={resId}
                                    restaurantData={{
                                        cloudinaryImageId: headerData.cloudinaryImageId,
                                        name: headerData.name,
                                        locality: headerData.locality,
                                        deliveryFee: headerData?.feeDetails?.totalFee,
                                    }}
                                />
                            );
                        } else {
                            return (
                                <div key={index}>
                                    <div className="menu-heading">
                                        <span className="menu-heading-title">{card.title}</span>
                                    </div>
                                    {card?.categories?.map((subCardData, subIndex) => {
                                        return (
                                            <Accordion
                                                key={subIndex}
                                                card={subCardData}
                                                index={subIndex}
                                                isSubCard={true}
                                                restaurantId={resId}
                                                restaurantData={{
                                                    cloudinaryImageId: headerData.cloudinaryImageId,
                                                    name: headerData.name,
                                                    locality: headerData.locality,
                                                    deliveryFee: headerData?.feeDetails?.totalFee,
                                                }}
                                            />
                                        );
                                    })}
                                    {index !== menuData.length - 3 && (
                                        <div className="menu-separator"></div>
                                    )}
                                </div>
                            );
                        }
                    })}
                </div>
                <div>
                    <MenuFooter data={footerData} />
                </div>
            </div>
        </div>
    );
};

export default RestaurantMenu;
