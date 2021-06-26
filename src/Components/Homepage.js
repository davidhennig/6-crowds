import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import "./Homepage.css";
import albumCover from "../Images/albumCover.svg";
import RetroHitCounter from 'react-retro-hit-counter';
import countapi from 'countapi-js';


function Homepage(props) {
    let [counter,setCounter] = useState(0)
    useEffect(() => {
        countapi.hit("localhost", "test").then((result) => {
            setCounter(result.value)
            // console.log(counter)
        });
    },[]) 
    return (
        <>
            <div className="top-text">
                <p className="welcome-homepage">Welcome to the offical</p>
                <h1 className="header-homepage">6-Crowd</h1>
                <p className="website-homepage">website!<a href="https://www.youtube.com/watch?v=9yGXktR43z8&t=15s">Check out our new trailer HERE!</a></p>
            </div>
            <div className="bottom-text">
                <div className="left">
                    <p> 
                        <span className="left-header-homepage">Who we are!</span><br/>
                        <span>We’re a girl group from all different parts of England, and we’re excited to bring our songs to the world. Sneak a listen to our single “Wannabe”, the new single from our debut album on the media page!</span> 
                    </p>
                    <Link to="/shop"><button className="shop-homepage">Shop</button></Link>
                </div>
                <div className="middle">
                    <div className="names-homepage">
                        <p>
                            <span className="frankie-homepage">Frankie </span>
                            <span className="aggs-homepage">Aggs </span>
                            <span className="chloet-homepage">Chloe T </span>
                            <span className="sofia-homepage">Sofia </span>
                            <span>and </span>
                            <span className="lottie-homepage">Lottie </span>
                            <span>are glad to see you here!</span> 
                        </p>
                    </div>
                    <img src={albumCover} alt="The offical 6-crowd album cover"/>
                    <p>
                        <span className="cheers-homepage">Cheers</span>
                        , and 
                        <span className="cheers-homepage"> Sistahood </span> 
                        <br/>as always!</p>
                    <RetroHitCounter
                        hits={counter+3429}
                        /* The following are all default values: */
                        withBorder={true}
                        withGlow={false}
                        minLength={5}
                        size={40}
                        padding={4}
                        digitSpacing={3}
                        segmentThickness={4}
                        segmentSpacing={0.5}
                        segmentActiveColor="#76FF03"
                        segmentInactiveColor="#315324"
                        backgroundColor="#222222"
                        borderThickness={7}
                        glowStrength={0.01}
                    />
                    <footer><span>Copyright *Brock Hall 1998</span><span><a href="https://www.vecteezy.com/free-vector/vector">Vector Vectors by Vecteezy</a></span></footer>
                </div>
                <div className="right">
                    <Link to="/gallery" className="gallery-homepage">The Gallery</Link>
                    <Link to="/bios" className="bios-homepage">Bio's</Link>
                    <Link to="/multi" className="multimedia-homepage">Multimedia</Link>
                </div>
            </div>
        </>
    )
}


export default Homepage

