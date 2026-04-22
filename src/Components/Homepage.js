import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import "./Homepage.css";
import albumCover from "../Images/albumCover.svg";
import RetroHitCounter from 'react-retro-hit-counter';
import countapi from 'countapi-js';


function Homepage(props) {
    let [counter,setCounter] = useState(0)
    useEffect(() => {
        countapi.hit("localhost", "test")
            .then((result) => {
                setCounter(result.value)
            })
            .catch((err) => {
                console.error("CountAPI failed:", err)
            });
    }, [])
    return (
        <>
            <div className='page'>
                <div className="top-text">
                    <div className="top-banner">
                        <div className="banner-track">
                            <span>★ 6-CROWD IS LIVE APRIL 28TH ★</span>
                            <span>★ NEW TRAILER OUT NOW ★</span>
                            <span>★ STREAM ON TUBI ★</span>
                            <span>★ 6-CROWD IS LIVE APRIL 28TH ★</span>
                            <span>★ NEW TRAILER OUT NOW ★</span>
                            <span>★ STREAM ON TUBI ★</span>
                        </div>
                    </div>
                    <div className="hero-block">
                        <div className="hero-header">
                            <h1 className="hero-title">
                                <span className="hero-top">Welcome to the Official</span>
                                <span className="hero-brand">6-Crowd</span>
                                <span className="hero-bottom">Website!</span>
                            </h1>

                            <p className="hero-sub">
                                <a 
                                    href="https://m.youtube.com/watch?v=veRCGuoorao"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ▶ Watch our NEW trailer
                                </a>
                            </p>
                        </div>

                        <p className="promo-homepage">
                            <strong>Stream 6-Crowd on Tubi on April 28th!</strong><br/>
                            Wanna learn more? Email us at:
                            <a href="mailto:brockhallsistahood@gmail.com">
                                brockhallsistahood@gmail.com
                            </a>
                        </p>
                    </div>
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
            </div>
            
        </>
    )
}


export default Homepage

