import {Link} from 'react-router-dom';

const WaldoMain = () => {
    return (
        <div>
            Waldo Picture
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