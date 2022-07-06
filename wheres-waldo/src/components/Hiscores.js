import {Link} from 'react-router-dom';

const Hiscores = () => {
    return (
        <div>
            Hiscores page
            <ul>
                <li>
                <Link to = "/WaldoMain"> Waldo Page </Link>
                </li>
                <li>
                <Link to = "/"> App main page </Link>
                </li>
            </ul>

            <table>
                <tr>
                    <th> Name </th>
                    <th> Time </th>
                </tr>

                <tr>
                    <td> Tommy </td>
                    <td> 1:00 </td>
    
                </tr>
            </table>
        </div>
    )
}

export default Hiscores;
//Table styling
//https://www.tutorialrepublic.com/html-tutorial/html-tables.php#:~:text=Creating%20Tables%20in%20HTML&text=You%20can%20create%20a%20table,using%20the%20element.
