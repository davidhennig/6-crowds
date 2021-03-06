import React from 'react';
import "./Multi.css"
import Wannabe from "../Images/Wannabe.mp3"
import ReactAudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function Multi(props) {
    return (
        <>
            <div className="media-wrapper">
                <h1 className="h1-multi">Multimedia</h1>
                <ReactAudioPlayer
                    autoPlay
                    controls
                    src={Wannabe}
                />
                <a className="demo" href="https://www.youtube.com/watch?v=UxNXWWKi8mE&t=18s">demo *remove from final version</a>
        </div>
        </>
    )
}


export default Multi

