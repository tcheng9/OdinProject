import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";
const Inventory = () => {
    const [inventory, setInventory] = useState(
        [
            {
                id:0,
                name: "lemons",
                picture: "link to image",
                count: 0,
                cost: 5.25
            },

            {
                id:1,
                name: "apples",
                picture: "link to image",
                count: 0,
                cost: 2.25
            },
            {
                id:2,
                name: "bananas",
                picture: "link to image",
                count: 0,
                cost: 1.00
            },
            {
                id:3,
                name: "avocado",
                picture: "link to image",
                count: 0,
                cost: 11.50
            },
        ]);

    function handleSubmit(){
        console.log(inventory);
        console.log(inventory[0].count);
        let finalPrice = 0;
        let currentSum = 0;
        for (let i = 0; i < inventory.length; i++){
            currentSum = inventory[i].count * inventory[i].cost;
            finalPrice += currentSum;
        }
        console.log("Final Price: " + finalPrice);

        
    }
    
    function successfulPage(){
        console.log("success");
    }


    return (
        <div>
            <h1>This is another items page</h1> 
            <ul className = "links">
                <Link to = "/">
                    <li> Home</li>
                </Link>
                <Link to = {{pathname:"/cart",
                    state: {name: "jack", age: 25, city: "antwep"}}}>
                    Cart 
                </Link>
            </ul>

            <div className = "itemsList">
                {
                    inventory.map((item => (
                        <div className = {item.name} key = {item.id}>
                            <p> {item.name} </p>
                            <p> {item.count} </p> 
                            <button onClick={() => setInventory([...inventory], (item.count = item.count + 1))}> + </button> 
                            <button onClick = {() => setInventory([...inventory], (item.count = item.count - 1))}> - </button> 
                           
                            <p> --------------------------------------</p>
                        </div>
                        
                    )))
                }
            </div>
            <button onClick = {handleSubmit}> submit</button>
        </div>
    )
}

export default Inventory;