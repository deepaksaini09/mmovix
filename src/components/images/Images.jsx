import React, { useState } from "react";

import '../images/style.scss'
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import VideoPopup from "../../components/videoPopup/VideoPopup";
import Img from "../../components/lazyLoadImage/Img";
import {PlayIcon} from "../../pages/details/Playbtn.jsx";
import PosterFallback from "../../assets/no-poster.png";
import {useSelector} from "react-redux";
import ImagesPopUp from "./ImagesPopUp.jsx";

const Images = ({ data, loading }) => {
    console.log(data,'-------data---')

    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);
    const { url } = useSelector((state) => state.home);
    const [imagesDataUrl, setImageUrlData] = useState([]);
    const backdrops = data?.backdrops || []; // Ensure backdrops is an array
    const [bestImage, setBestImage] = useState([]);
        let posterUrlsData = [];

        for (let i = 0; i < backdrops.length; i++) {
          const images = backdrops[i];
          // console.log(images?.file_path,'=====')
          const posterUrl = images?.file_path
            ? url?.poster + images?.file_path
            : PosterFallback;
          console.log(posterUrl,'===-')

          // posterUrls.push({'url':posterUrl});
        }
        // console.log(posterUrls)

    const loadingSkeleton = () => {
        return (
            <div className="skItem">
                <div className="thumb skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };

    return (
        <div className="videosSection">{posterUrlsData} &&
            <ContentWrapper>
                <div className="sectionHeading">Image Gallery</div>
                {!loading ? (
                    <div className="videos">
                        {data?.backdrops?.map((images,value) => {
                            const posterUrl = images.file_path
                                ? url.poster + images.file_path
                                : PosterFallback;

                            return (
                                <div
                                key={value}
                                className="videoItem"
                                onClick={() => {
                                    // setVideoId(posterUrl);
                                    setShow(true);

                                }}
                            >
                                <div className="videoThumbnail">
                                    <Img
                                        src={posterUrl}
                                    />
                                    {/*<PlayIcon />*/}
                                </div>
                                {/*<div className="videoTitle">{video.name}</div>*/}
                            </div>
                            )
                            }

                        )}
                    </div>
                ) : (
                    <div className="videoSkeleton">
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                    </div>
                )}
                </ContentWrapper>
            {/*<ImagesPopUp*/}
            {/*    show={show}*/}
            {/*    setShow={setShow}*/}
            {/*    videoId={videoId}*/}
            {/*    setVideoId={setVideoId}*/}
            {/*    posterUrlData = {posterUrls}*/}
            {/*></ImagesPopUp>*/}
</div>
    );
};

export default Images;
