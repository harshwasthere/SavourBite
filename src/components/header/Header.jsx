import { useState } from "react";
import "./header.css";
import { ChevronUpSquare, MenuSquare } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle);

    return (
        <nav>
            <div className="header-logo">
                <NavLink to="/">KhanaKhoj</NavLink>
            </div>
            <div className="header-hamburger" onClick={handleToggle}>
                {toggle ? (
                    <ChevronUpSquare className="icon-size" />
                ) : (
                    <MenuSquare className="icon-size" />
                )}
            </div>
            <div className={`header-menu ${toggle ? "open" : ""}`}>
                <ul>
                    <li>
                        <NavLink to="/restaurant" onClick={handleToggle}>
                            Restaurants
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" onClick={handleToggle}>
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" onClick={handleToggle}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart" onClick={handleToggle}>
                            Cart
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
