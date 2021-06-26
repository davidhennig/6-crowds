import React from 'react'
import Lottie from "./headshots/lottie.svg";

function lottie(props) {
    return (
        <>
           <h1 className="lottie-header">Lottie</h1> 
           <img src={Lottie} alt="Lottie's headshot"/>
        </>
    )
}


export default lottie

