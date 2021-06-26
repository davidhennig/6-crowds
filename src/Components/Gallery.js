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
            <img  className="image-gallery" src={one} alt="Sofia practing infront of a mirror"/>    
            <p className="p-gallery">Sofia perfecting the steps</p>
            <img  className="image-gallery"  src={two} alt="Lottie in front of a busy street"/>
            <p className="p-gallery">Where's Sofia?</p>
            <img  className="image-gallery"  src={three} alt="Chloe T and Frankie in front of the camera"/>
            <p className="p-gallery">Chloe T focused, Frankie focused on the camera</p>
            <img  className="image-gallery"  src={four} alt="Aggs Chloe T Lottie and Frankie sitting on the grass"/>
            <p className="p-gallery">Fun Chilling in LA</p>
            <img  className="image-gallery"  src={five} alt="Chloe T Aggs Lottie and Frankie in front of a brick wall"/>
            <p className="p-gallery">Someone dumped water out the window!</p>
            <img  className="image-gallery"  src={six} alt="Frankie Chloe T Aggs and Lottie all laughing"/>
            <p className="p-gallery">Sistahood</p>
            <img  className="image-gallery"  src={seven} alt="Frankie Chloe T and Lottie sitting at a diner"/>
            <p className="p-gallery">Waiting for lunch</p>
            <img  className="image-gallery"  src={eight} alt="Frankie Aggs Chloe T and Lottie posing in the street"/>
            <p className="p-gallery">Lottie pretending she’s a waitress</p>
            <img  className="image-gallery"  src={nine} alt="Frankie Sofia Lottie and Chloe T posing in the dance studio"/>
            <p className="p-gallery">"ooh so fresh"</p>

        </>
    )
}


export default Gallery

