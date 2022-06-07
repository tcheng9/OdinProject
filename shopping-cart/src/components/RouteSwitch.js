import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./home";
import Cart from "./cart";
import Items from "./more-items";
import {Link} from "react-router-dom";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "/cart" element = {<Cart />} />
                <Route path = "/items" element = {<Items />} />
            
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;