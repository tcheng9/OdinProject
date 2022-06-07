import React from "react";
import {Link} from "react-router-dom";

const Cart = () => {
    return (
        <div>
            <h1> Cart page</h1>
            <ul className = "links">
                <Link to = "/">
                    <li> Home</li>
                </Link>
            </ul>
                
            
        </div>
    )
}

export default Cart;