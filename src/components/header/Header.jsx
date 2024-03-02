import { useState } from "react";
import "./header.css";
import { ChevronUpSquare, MenuSquare } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav>
            <div className="header-logo">
                <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                    SavourBite
                </NavLink>
            </div>
            <div className="header-hamburger" onClick={toggleMenu}>
                {isMenuOpen ? (
                    <ChevronUpSquare className="icon-size" />
                ) : (
                    <MenuSquare className="icon-size" />
                )}
            </div>
            <div className={`header-menu ${isMenuOpen ? "open" : ""}`}>
                <ul>
                    <li>
                        <NavLink to="/home/restaurant" onClick={toggleMenu}>
                            Restaurants
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/home/contact" onClick={toggleMenu}>
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/home/about" onClick={toggleMenu}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/home/cart" onClick={toggleMenu}>
                            Cart
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
