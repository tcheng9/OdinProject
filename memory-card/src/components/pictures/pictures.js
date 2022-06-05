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
import { useEffect, useState } from "react";

const picturesArr = [
    {
        id: 1,
        src: cat,
        text: "Cat",
    },
    {
        id: 2,
        src: bunny,
        text: "bunny"
    }, 
    {
        id: 3, 
        src: deer,
        text: "deer"
    },
    {
        id: 4, 
        src: dogs,
        text: "dogs"
    },
    {
        id: 5, 
        src: dolphin,
        text: "dolphin"
    },
    {
        id: 6, 
        src: hedgehog,
        text: "hedgehog"
    },
    {
        id: 7, 
        src: jellyfish,
        text: "jellyfish"
    },
    {
        id: 8, 
        src: lion,
        text: "lion"
    },
    {
        id: 9, 
        src: panda,
        text: "panda"
    },
    {
        id: 10, 
        src: parrot,
        text: "parrot"
    },
    {
        id: 11, 
        src: penguin,
        text: "penguin"
    },
    {
        id: 12, 
        src: squirrel,
        text: "squirrel"
    }
    ]

const Pictures = () => {
    const [list, setList] = useState(picturesArr);
    const [score, setScore] = useState(0);
    const [memoryArr, setMemoryArr] = useState([]);
    const [maxScore, setMaxScore] = useState(0);
    
    function shuffle(arr){
        var ctr = arr.length,
            temp,
            index;

        while (ctr > 0){
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = arr[ctr];
            arr[ctr] = arr[index];
            arr[index] = temp;
        }
        return arr;
    }

    function handleSubmit(){
        const changes = shuffle([...list]);
        setList(changes);
        console.log("shuffled");
        console.log("-------------------------------------------");
    }

    const increase = () => {
        setScore(score => score + 1);
    }

    const reset = () => {
        setScore(score => 0);
    }


    function getBtnID(e){
        //Set title to the picture's title to make it easier
        let title = e.target.title;
        
        

        if (memoryArr.includes(title) > 0){
            //if picture is in the array, do the necessary updates    
            setMemoryArr([]);
            setScore(memoryArr.length);
            checkMaxScore(score, maxScore);
        } else {
            setMemoryArr(memoryArr => ([...memoryArr, title]));
            setScore(memoryArr.length);
            console.log(memoryArr);
        }
        
    }
   
    function checkMaxScore(currentScore, maxScore){
        if (currentScore > maxScore){
            setMaxScore(memoryArr.length);
        } 
    }

    
    function mergedOnClick(e){
        handleSubmit()
        getBtnID(e)
    }



    return (
       
        <div className = "picturesContainer">
            {list.map((index) => 
            <div key = {index.id}>    
            <img onClick = {mergedOnClick} src = {index.src} title = {index.text} alt = "Images" height = "200px" width = "200px"/>
            <p>{index.text}</p> 
            </div>
            )}
            <p> Score: {score}</p>
            <p> Max Score: {maxScore} </p>
           
        </div>
    )
}

export default Pictures