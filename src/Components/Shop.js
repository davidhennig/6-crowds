import React, {useState} from 'react';
import "./Shop.css";
import shirt from "../Images/shirt.JPG"

function Shop(props) {
    let [color,setColor] = useState("")
    return (
        <>
            <div className="top-shop">
                <h1 className="h1-shop">Shop</h1>
                <h4 className="h4-shop">The OFFICIAL <br/> 6-Crowd T-Shirt</h4>
            </div>
            <img className="image-shop" src={shirt}/>
            <div className="bottom-shop">
                <button className="shop-button" onClick={() => {
                    setColor("color-text")
                }}>Buy Now</button>
                <p className={`p-shop ${color}`}>Restock on demand. <br/> Ask for availability</p>
                <p className="at">@</p> 
                <p className="email-shop">brockhallsistahood@gmail.com</p>
            </div>
        </>
    )
}


export default Shop

