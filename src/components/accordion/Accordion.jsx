import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import AccordionItem from "../accordionItem/AccordionItem";
import "./accordion.css";

export default function Accordion(props) {
    const { card, index, isSubCard } = props;
    const [toggled, setToggled] = useState(() => []);

    const handleToggle = (index) => {
        const isOpen = toggled.includes(index);
        if (isOpen) {
            setToggled(toggled.filter((i) => i !== index));
        } else {
            setToggled([...toggled, index]);
        }
    };

    return (
        <div className="accordion-subclass">
            <div className="accordion-bar" onClick={() => handleToggle(index)}>
                <span className={isSubCard ? "sub-title" : "accordion-bar-title"}>
                    {`${card.title} (${card.itemCards.length})`}
                </span>
                {toggled.includes(index) ? <ChevronUp /> : <ChevronDown />}
            </div>

            {card.itemCards.map((dish, dishIndex) => {
                const dishData = dish.card.info;
                return (
                    <div
                        key={dishIndex}
                        className={`accordion-dishes ${toggled.includes(index) ? "open" : "close"}`}
                    >
                        <AccordionItem key={dishIndex} data={dishData} />
                        {dishIndex !== card.itemCards.length - 1 && (
                            <div className="accordion-dishes-breaker"></div>
                        )}
                    </div>
                );
            })}

            <div className={isSubCard ? "sub-separator" : "accordion-separator"}></div>
        </div>
    );
}
