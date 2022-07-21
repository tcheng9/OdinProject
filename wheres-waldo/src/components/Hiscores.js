import {Link} from 'react-router-dom';
import {useState, useEffect, useRef} from 'react';
import {firestore} from "../firebase";
import {addDoc, collection} from "@firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import firebase from 'firebase/app';
import 'firebase/firestore';

const Hiscores = () => {
    const [winners, setWinners] = useState([]);

    // useEffect(() => {
    //     firebase.firestore.collection('winnerNames').onSnapshot(snapshot => 
    //     {
    //         setWinners(snapshot.docs.map(doc => ({
    //             id: doc.data().name,
    //             time: doc.data().time

    //         })))
    //     })
    // })

    useEffect(() => {
        firestore
        .firestore()
        .collection("winnerNames")
        .onSnapshot(snapshot => {
            const winners = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }))
            setWinners(winners);
        })
    },[])
        

    
   
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
        <div>
            {winners}
        </div>
        </div>
    )
}

export default Hiscores;
//Table styling
//https://www.tutorialrepublic.com/html-tutorial/html-tables.php#:~:text=Creating%20Tables%20in%20HTML&text=You%20can%20create%20a%20table,using%20the%20element.
