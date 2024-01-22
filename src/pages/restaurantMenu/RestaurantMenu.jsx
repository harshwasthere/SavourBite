import { useEffect, useState } from "react";
import "./restaurantmenu.css";
import Accordion from "../../components/accordion/Accordion";

export default function RestaurantMenu() {
    const [restaurantMenu, setRestaurantMenu] = useState([]);
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8947446&lng=75.8301169&restaurantId=44614&catalog_qa=undefined&submitAction=ENTER",
        );

        const json = await response.json();
        console.log(json);
        const data = json.data.cards;
        const menuData = data[2].groupedCard.cardGroupMap.REGULAR.cards;
        setRestaurantMenu(data);
        setMenuData(menuData);
        console.log(menuData);
    };

    return (
        <div className="restaurant-subpage">
            <div></div>
            <div className="menu">
                {menuData.map((cardData, index) => {
                    const card = cardData.card.card;
                    if (!card.title) return;

                    if (card.itemCards) {
                        return (
                            <Accordion key={index} card={card} index={index} isSubCard={false} />
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
                                <div className="menu-separator"></div>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}
