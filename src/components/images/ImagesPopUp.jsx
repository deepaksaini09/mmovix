import React from "react";
import ReactPlayer from "react-player/youtube";

import '../videoPopup/style.scss'

const ImagesPopUp = ({ show, setShow, videoId, setVideoId, posterUrlData }) => {
    const hidePopup = () => {
        setShow(false);
        setVideoId(null);
    };
    return (
        <div className={`videoPopup ${show ? "visible" : ""}`}>
            <div className="opacityLayer" onClick={hidePopup}></div>
            <div className="videoPlayer">
                <span className="closeBtn" onClick={hidePopup}>
                    Close
                </span>
                {/*<img src={videoId} alt="Images" width='100%' />*/}


            </div>
        </div>
    );
};

export default ImagesPopUp;
