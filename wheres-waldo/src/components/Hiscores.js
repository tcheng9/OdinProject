import {Link, useResolvedPath} from 'react-router-dom';
import {useState, useEffect, useRef} from 'react';
import {firestore} from "../firebase";
import {addDoc, collection, getDocs} from "firebase/firestore";

import firebase from 'firebase/app';
import 'firebase/firestore';

const Hiscores = () => {
    const [winners, setWinners] = useState([]);
    const userCollectionsRef = collection(firestore, "winnerNames");


    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionsRef);
            setWinners(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };

        getUsers();
    }, []);
        

    
   
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
                <thead>
                <tr>
                    <td> Name </td>
                    <td> Time </td>
                </tr>
                </thead>
            </table>

            {winners.map((user) => {
                return (
                    <table>
                        <thead>
                        <tr>
                            <td> {user.name} </td>
                            <td> {user.time} </td>
                        </tr>
                        </thead>
                    </table>        
            )})}
        
        </div>
        
    )
}

export default Hiscores;
//Table styling
//https://www.tutorialrepublic.com/html-tutorial/html-tables.php#:~:text=Creating%20Tables%20in%20HTML&text=You%20can%20create%20a%20table,using%20the%20element.
