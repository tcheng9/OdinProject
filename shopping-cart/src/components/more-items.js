import React from "react";
import {Link} from "react-router-dom";

const Items = () => {
    return (
        <div>
            <h1>This is another items page</h1> 
            <ul className = "links">
                <Link to = "/">
                    <li> Home</li>
                </Link>
            </ul>
        </div>
    )
}

export default Items;