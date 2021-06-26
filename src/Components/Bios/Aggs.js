import React from 'react';
import Aggs from "./headshots/aggs.svg";

function aggs(props) {
    return (
        <div>
            <h1 className="aggs-header" alt="Aggs' headshot">Aggs</h1> 
           <img src={Aggs}/>
        </div>
    )
}


export default aggs

