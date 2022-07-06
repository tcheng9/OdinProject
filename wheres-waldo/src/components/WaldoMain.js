import {Link} from 'react-router-dom';
import waldo from '../waldo_beach.jpg';

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
        </div>
    )
}

export default WaldoMain;