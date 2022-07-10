import {Link} from 'react-router-dom';
import waldo from '../waldo_beach.jpg';
import './WaldoMain.css';
import {useState, useEffect} from 'react';

const WaldoMain = () => {
    const [x, setX] = useState();
    const [y, setY] = useState();
    
    function setXY() {
        let circleDiv = document.getElementById('CursorCircle');
        circleDiv.style.positoin = "absolute";
        circleDiv.style.left = {x} + 'px';
        circleDiv.style.top = {y} + 'px';
        console.log('setting circle coords');
    }
    // const setXY = (x,y) => {
    //     var x = 0;
    //     var y = 0;
    //     let circleDiv = document.getElementById('CursorCircle');
    //     circleDiv.style.positoin = "absolute";
    //     circleDiv.style.left = x + 'px';
    //     circleDiv.style.top = y + 'px';
    //     console.log('setting circle coords');
    // }

    useEffect( () => {
        const update = (e) => {
            setX(e.x);
            setY(e.y);

        }
        // window.addEventListener('click', setXY(x,y));
        window.addEventListener('click', update);
       
    },
        [setX,setY]
        
    )

    

    return (
        <div>
            <div>
                {x}-----------{y}
            </div>
            <img src = {waldo} /> 
            <ul>
                <li>
                <Link to = "/"> App Main Page </Link>
                </li>
                <li>
                <Link to = "/Hiscores"> Hiscores </Link>
                </li>
            </ul>
            <div id = "CursorCircle">

                <div id = "InnerCircle"></div>
            </div>
        </div>
    )
}

export default WaldoMain;