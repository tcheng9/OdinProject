import {Link} from 'react-router-dom';
import waldo from '../waldo_beach.jpg';
import './WaldoMain.css';
import {useState, useEffect} from 'react';

const WaldoMain = () => {
    const [x, setX] = useState();
    const [y, setY] = useState();
    
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
        checkWaldo(e, e.screenX, e.screenY);
    }

    const checkWaldo = (e,x,y) => {
        //Waldo's coordinates
        let waldoCoords = [100, 100]; 

        //Get coordinates from setCircle/ on trigger. Don't use screen listener
        
        //If x and y are within range of waldo's coordinates, trigger a popup that lets user input their name
        if ((x < waldoCoords[0] + 100 && x > waldoCoords[0] - 100) && (y > waldoCoords[1] - 100 && y < waldoCoords[1] + 100)){
            console.log("correct coordinates")
        }
    }
    

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
            <WaldoTimer/>
        </div>
    )
}

const WaldoTimer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);            
            }, 1000);
            
            return () => clearInterval(interval);
    }, []);
    
    return (
        <div>
            {seconds} second has past
        </div>
    )
}

export default WaldoMain;