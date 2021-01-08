import React, {useState} from 'react';
import "./Merch.css";
import shirt from "../Images/shirt.JPG"

function Merch(props) {
    let [color,setColor] = useState("")
    return (
        <>
            <div className="top-merch">
                <h1 className="h1-merch">Merch</h1>
                <h4 className="h4-merch">The OFFICIAL <br/> 6-Crowd T-Shirt</h4>
            </div>
            <img className="image-merch" src={shirt}/>
            <div className="bottom-merch">
                <button className="merch-button" onClick={() => {
                    setColor("color-text")
                }}>Buy Now</button>
                <p className={`p-merch ${color}`}>Restock on demand. <br/> Ask for availability</p>
                <p className="at">@</p> 
                <p className="email-merch">test@email.com</p>
            </div>
        </>
    )
}


export default Merch

