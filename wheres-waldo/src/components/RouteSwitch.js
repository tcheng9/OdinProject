
import './WaldoMain.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "../App";
import Home from './Home';
import Hiscores from './Hiscores';
import WaldoMain from "./WaldoMain";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = '/' element = {<App />} />
                <Route path = '/Home' element = {<Home />} />
                <Route path = '/Hiscores' element = {<Hiscores />} />
                <Route path = '/WaldoMain' element = {<WaldoMain /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch