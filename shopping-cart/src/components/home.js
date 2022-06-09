import React from "react";



import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <ul className = "links">
                <Link to = "/Cart">
                    <li> Checkout </li>
                </Link>

                <Link to =  "/Inventory">
                    <li> Items - Inventory </li>
                </Link>
            </ul>
        </div>
    )
}

export default Home;