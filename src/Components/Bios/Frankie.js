import React from 'react'
import Frankie from "./headshots/frankie.svg";

function frankie(props) {
    return (
        <div>
            <h1 className="frankie-header" >Frankie</h1> 
           <img src={Frankie} alt="Frankie's headshot"/>
        </div>
    )
}


export default frankie

