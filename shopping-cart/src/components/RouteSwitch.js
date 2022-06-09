import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./home";
import Cart from "./cart";
import Inventory from "./inventory";
import {Link} from "react-router-dom";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "/cart" element = {<Cart />} />
                <Route path = "/Inventory" element = {<Inventory />} />
            
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;