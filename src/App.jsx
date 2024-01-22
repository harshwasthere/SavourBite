import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

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
import Accordion from "./components/accordion/Accordion.jsx";

/*
 * APP COMPONENTS
 */

const App = () => {
    return (
        <div className="app">
            <RestaurantMenu/>
        </div>
    );
};

const Other = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/",
        element: <Other />,
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

/*
 *  RENDERING
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
