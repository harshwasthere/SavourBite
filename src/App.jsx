import { createBrowserRouter, Outlet } from "react-router-dom";

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

const App = createBrowserRouter([
    {
        path: "/",
        element: (
            <div className="app">
                <Home />
            </div>
        ),
    },
    {
        path: "/",
        element: (
            <div className="app">
                <Header />
                <Outlet />
            </div>
        ),
        children: [
            {
                path: "/restaurant",
                element: <Restaurants />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
            },
        ],
    },
]);

export default App;
