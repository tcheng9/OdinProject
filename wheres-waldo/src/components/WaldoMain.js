import {Link} from 'react-router-dom';
import waldo from '../waldo_beach.jpg';
import './WaldoMain.css';
import {useState, useEffect, useRef} from 'react';
import {firestore} from "../firebase";
import {addDoc, collection} from "@firebase/firestore";
import { FirebaseError } from 'firebase/app';

const WaldoMain = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [userName, setUserName] = useState();
    // const database = getDatabase();
    
    const messageRef = useRef();
    const ref = collection(firestore, "messages");

    // const handleSave = async (e) => {
    //     console.log(userName);
    //     await addDoc(collection(firestore, "winnerNames"), {
    //         name:userName,
    //     }).then(function(res){
    //         alert("data is successfuly added")
    //     }).catch(function(err){
    //         alert("data cannot be added");
    //     })
    // };

    function submitName(text, seconds){
        addDoc(collection(firestore, "winnerNames"), {
            name:text,
            time: seconds,
        }).then(function(res){
            alert("data is successfuly added")
        }).catch(function(err){
            alert("data cannot be added");
        })
    }
  
    function setXY() {
        
        let circleDiv = document.getElementById('CursorCircle');
        circleDiv.style.position = "absolute";
        circleDiv.style.left = {x} + 'px';
        circleDiv.style.top = {y} + 'px';
        console.log('setting circle coords');
    }

    const setCircle = (e) =>  {
        let circleDiv = document.getElementById('CursorCircle');
        circleDiv.style.position = "absolute";
        circleDiv.style.left = (e.screenX - 50) + 'px';
        circleDiv.style.top = (e.screenY - 150) + 'px';
        console.log("Original" + e.screenX + ' ----------' + e.screenY);
        console.log("X coordinate: " + (e.screenX - 50));
        console.log("Y coordinate: " + (e.screenY - 150));
        setX(e.screenX - 50);
        setY(e.screenY - 150);
        console.log(seconds);

        if (x > 50 && y > 50 && x < 300 && y < 300){
            var name = prompt("please enter your name");
            setUserName(name);
            submitName(name, seconds);
        }

    }

    // const checkWaldo = (e,x,y) => {
    //     //Waldo's coordinates
    //     let waldoCoords = [100, 100]; 

    //     //Get coordinates from setCircle/ on trigger. Don't use screen listener
        
    //     //If x and y are within range of waldo's coordinates, trigger a popup that lets user input their name
    //     if ((x < waldoCoords[0] + 100 && x > waldoCoords[0] - 100) && (y > waldoCoords[1] - 100 && y < waldoCoords[1] + 100)){
    //         console.log("correct coordinates")
    //     }
    // }
    



    useEffect(() => {

        
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);  
            

        }, 1000);

        if (x > 50 && y > 50){
            
        }

        return () => clearInterval(interval);

    }, [seconds]);

  
    return (
        <div>
            
            <img src = {waldo} onClick = {setCircle}/> 
            <ul>
                <li>
                <Link to = "/"> App Main Page </Link>
                </li>
                <li>
                <Link to = "/Hiscores"> Hiscores </Link>
                </li>
            </ul>
            <div id = "moveCircle" onClick = {setXY}>
                move circle clicking this text
            </div>
            <div id = "CursorCircle">

                <div id = "InnerCircle"></div>
            </div>
            
            <div>
                {seconds} second has past
            </div>

            <div>
                {/* <button id = "btnAddName" onClick = {handleSave}>Add name to firebase DB</button> */}
            </div>
        </div>
    )
}



export default WaldoMain;