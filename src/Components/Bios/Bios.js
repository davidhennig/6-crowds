import React from 'react';
import {Link} from 'react-router-dom';
import "./Bios.css";
import Lottie from "./headshots/lottie.svg";
import ChloeT from "./headshots/chloet.svg";
import Sophia from "./headshots/sophia.svg";
import Aggs from "./headshots/aggs.svg";
import Frankie from "./headshots/frankie.svg";

function Bios(props) {
    return (
        <>
            <h1 className="bio-header">Bio's Page</h1>
            <div className="headshots">
                <div className="top-bios">
                    <Link to="/lottie"><img className="image-bios" src={Lottie}/></Link>
                    <Link to="/chloet"><img className="image-bios" src={ChloeT}/></Link>
                </div>
                <div className="middle-bios">
                    <Link to="/sophia"><img className="image-bios" src={Sophia}/></Link>
                    <Link to="/aggs"><img className="image-bios" src={Aggs}/></Link>
                </div>
                <div className="bottom-bios">
                    <Link to="/frankie"><img className="image-bios" src={Frankie}/></Link>
                </div>
            </div>
        </>
    )
}


export default Bios

