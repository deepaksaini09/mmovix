import React, {memo} from "react";

import useFetch from "../../../hooks/useFetch";
import CarouselSeason from "../../../components/carousel/CarouselSeason.jsx";
import Carousel from "../../../components/carousel/Carousel.jsx";

const SeasonDetails = ({ mediaType, id ,data, loading, seasonNumber}) => {
    const title = mediaType === "tv" ? seasonNumber+" SEASONS" : "Similar Movies";
    return (
        <CarouselSeason
            title={title}
            data={data}
            loading={loading}
            endpoint={mediaType}
            id = {id}
        />
    );
};

export default memo(SeasonDetails);
