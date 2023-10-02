import React from "react";
import { useParams } from "react-router-dom";
import "./style.scss";

import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videosSection/VideosSection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";
import Trending from "../home/trending/Trending.jsx";
import Offers from "../../components/offers/Offers.jsx";
// import seasonDetails from "./carousels/SeasonDetails.jsx";
import SeasonDetails from './carousels/SeasonDetails.jsx'
import SeasonEpisode from "./seasonEpisode/SeasonEpisode.jsx";
import Images from "../../components/images/Images.jsx";

const Details = () => {
    const { mediaType, id,seasonID } = useParams();
    let path = `/${mediaType}/${id}`
    if(seasonID && mediaType === 'tv'){
        path+='/season/'+seasonID
    }
    const {data:images, loading:imagesLoading} = useFetch(`/${mediaType}/${id}/images?include_image_language=en,hi,xx,ta`);
    console.log(images,'main')
    const { data, loading } = useFetch(path+'/videos');
    const { data: credits, loading: creditsLoading } = useFetch(path+'/credits');
    console.log(mediaType,id, seasonID,'-----m,i,s')
    return (
        <div>
            <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} seasonNumber={seasonID}/>
            <Cast data={credits?.cast} loading={creditsLoading} />
            <Images data ={images} loading={imagesLoading}></Images>
            <VideosSection data={data} loading={loading} />
            <Similar mediaType={mediaType} id={id} />
            <Recommendation mediaType={mediaType} id={id} />
            <Trending></Trending>


        </div>
    );
};

export default Details;
