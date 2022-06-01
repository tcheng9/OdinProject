import React from "react";
import cat from "./images/cat.jpg"
import bunny from "./images/bunny.jpg"
import deer from "./images/deer.jpg"
import dogs from "./images/dogs.jpg"
import dolphin from "./images/dolphin.jpg"
import hedgehog from "./images/hedgehog.jpg"
import jellyfish from "./images/jellyfish.jpg"
import lion from "./images/lion.jpg"
import panda from "./images/panda.jpg"
import parrot from "./images/parrot.jpg"
import penguin from "./images/penguin.jpg"
import squirrel from "./images/squirrel.jpg"

const Pictures = () => {
    const picturesArr = [
    {
        id: 1,
        photo: {cat},
        text: "Cat",
    },
    {
        id: 2,
        photo: {bunny},
        text: "bunny"
    }, 
    {
        id: 3, 
        photo: {deer},
        text: "deer"
    }
    ]

    return (
        // <div>
        // {/* <img src = {squirrel} width = "200px" height = "200px" alt = "Bunny" /> */}
        //     {picturesArr.map((picture) => (
        //         <img src = {picture.photo} key = {picture.id}></img> 
        //     ))}
        // </div>
    )
}

export default Pictures