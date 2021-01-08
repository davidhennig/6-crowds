import React from 'react';
import "./Gallery.css";
import one from "../Images/Gallery/1.jpg";
import two from "../Images/Gallery/2.jpg";
import three from "../Images/Gallery/3.jpg";
import four from "../Images/Gallery/4.png";
import five from "../Images/Gallery/5.jpg";
import six from "../Images/Gallery/6.jpg";
import seven from "../Images/Gallery/7.jpg";
import eight from "../Images/Gallery/8.jpg";
import nine from "../Images/Gallery/9.jpg";

function Gallery(props) {
    return (
        <>
            <h1 className="h1-gallery">The Gallery</h1>
            <img  className="image-gallery" src={one}/>    
            <p className="p-gallery">Ooh so fresh</p>
            <img  className="image-gallery"  src={two}/>
            <p className="p-gallery">Someone dumped water out the window!</p>
            <img  className="image-gallery"  src={three}/>
            <p className="p-gallery">Where’s Sofia?</p>
            <img  className="image-gallery"  src={four}/>
            <p className="p-gallery">Lottie pretending she’s a waitress</p>
            <img  className="image-gallery"  src={five}/>
            <p className="p-gallery">Waiting for lunch</p>
            <img  className="image-gallery"  src={six}/>
            <p className="p-gallery">Chloe T focused on the camera</p>
            <img  className="image-gallery"  src={seven}/>
            <p className="p-gallery">Sofia perfecting the steps</p>
            <img  className="image-gallery"  src={eight}/>
            <p className="p-gallery">Sistahood</p>
            <img  className="image-gallery"  src={nine}/>
            <p className="p-gallery">Fun chilling in LA</p>

        </>
    )
}


export default Gallery

