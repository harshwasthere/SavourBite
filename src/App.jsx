import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

/*
 * PAGES
 */
import Home from "./pages/home/Home.jsx";
import Header from "./components/header/Header";
import Restaurants from "./pages/restaurants/Restaurants.jsx";
import Contact from "./pages/contact/Contact.jsx";
import About from "./pages/about/About.jsx";
import Cart from "./pages/cart/Cart.jsx";
import RestaurantMenu from "./pages/restaurantMenu/RestaurantMenu.jsx";

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
                path="/home"
                element={
                    <div className="app">
                        <Header />
                        <Outlet />
                    </div>
                }
            >
                <Route path="restaurant" element={<Restaurants />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
                <Route path="cart" element={<Cart />} />
                <Route path="restaurant/:resId" element={<RestaurantMenu />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default App;
