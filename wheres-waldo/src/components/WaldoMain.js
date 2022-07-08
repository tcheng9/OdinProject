import {Link} from 'react-router-dom';
import waldo from '../waldo_beach.jpg';
import './WaldoMain.css';

const WaldoMain = () => {
    return (
        <div>
            
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