import React from "react";
import {Link, useLocation} from "react-router-dom";

const Cart = () => {
    
    
    return (
        <div>
            <h1> Cart page</h1>
                 
            <ul className = "links">
                <Link to = "/">
                    <li> Home</li>
                </Link>
            </ul>
                
            <div className = "testingLink">
                
            </div>
            
        </div>
    )
}

export default Cart;