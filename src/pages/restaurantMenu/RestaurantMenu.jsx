import { useEffect, useState } from "react";
import "./restaurantmenu.css";
import Accordion from "../../components/accordion/Accordion";
import MenuHeader from "../../components/menu-header/MenuHeader";
import { useParams } from "react-router-dom";
import RestaurantShimmer from "../../components/shimmer/RestaurantShimmer";

export default function RestaurantMenu() {
    const { resId } = useParams();
    const [restaurantMenu, setRestaurantMenu] = useState([]);
    const [headerData, setHeaderData] = useState([]);
    const [menuData, setMenuData] = useState([]);
    console.log(resId);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8947446&lng=75.8301169&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`,
        );

        const json = await response.json();
        console.log(json);
        const data = json.data.cards;
        const header = data[0].card.card.info;
        const menu = data[2].groupedCard.cardGroupMap.REGULAR.cards;
        setRestaurantMenu(data);
        setHeaderData(header);
        setMenuData(menu);

        console.log(menuData);
    };

    return menuData.length === 0 ? (
        <RestaurantShimmer />
    ) : (
        <div className="restaurant-menu">
            <div className="restaurant-subpage">
                <div className="restaurant-subpage-header">
                    <MenuHeader data={headerData} />
                </div>
                <div className="menu">
                    <div className="menu-main-title">
                        <span>෴ M E N U ෴</span>
                    </div>
                    {menuData.map((cardData, index) => {
                        const card = cardData.card.card;
                        if (!card.title) return;

                        if (card.itemCards) {
                            return (
                                <Accordion
                                    key={index}
                                    card={card}
                                    index={index}
                                    isSubCard={false}
                                />
                            );
                        } else {
                            console.log(card.categories);
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
                                            />
                                        );
                                    })}
                                    {index !== menuData.length - 1 && (
                                        <div className="menu-separator"></div>
                                    )}
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
}
