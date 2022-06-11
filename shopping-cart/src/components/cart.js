import React from "react";
import {Link, useLocation} from "react-router-dom";

const Cart = () => {
    
    function Test(){
        let data = useLocation();
        console.log(data);
    }
   
    
    
    return (
        <div>
            <h1> Cart page</h1>
                 
            <ul className = "links">
                <Link to = "/">
                    <li> Home</li>
                </Link>
            </ul>
                
            <div className = "testingLink">
                {Test()}
            </div>
            
        </div>
    )
}

export default Cart;