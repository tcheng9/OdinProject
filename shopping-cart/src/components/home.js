import React from "react";


import Items from "./more-items";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <ul className = "links">
                <Link to = "/Cart">
                    <li> Checkout </li>
                </Link>

                <Link to =  "/items">
                    <li> Items - Inventory </li>
                </Link>
            </ul>
        </div>
    )
}

export default Home;