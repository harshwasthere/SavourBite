import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import Restaurants from "./pages/restaurants/Restaurants.jsx";
import Contact from "./pages/contact/Contact.jsx";
import About from "./pages/about/About.jsx";
import Cart from "./pages/cart/Cart.jsx";
import RestaurantMenu from "./pages/restaurantMenu/RestaurantMenu.jsx";
import { ErrorBoundary } from "react-error-boundary";
import ErrorScreen from "./components/ErrorScreen/ErrorScreen.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";

const App = () => (
    <BrowserRouter>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
                path="/"
                element={
                    <ErrorBoundary fallback={<ErrorScreen type={"error"} />}>
                        <div className="app">
                            <Header />
                            <div className="extra-space"></div>
                            <Outlet />
                        </div>
                    </ErrorBoundary>
                }
            >
                <Route path="/restaurant" element={<Restaurants />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </BrowserRouter>
);

export default App;
