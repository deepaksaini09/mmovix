import React from "react";
import useFetch from "../../../hooks/useFetch.jsx";
import './style.scss'
import dayjs from "dayjs";
import {useSelector} from "react-redux";
function SeasonEpisode({mediaType,id,seasonNumber}){
    const {currentSeason} = useSelector((state)=>state.home)
    const { data, loading } = useFetch(`/${mediaType}/${id}/season/${seasonNumber}`);
    return(
        <div>{ data?.episodes &&

        <div className={'margin-left-offers'}>
            <div className={'item-color'}>EPISODE DETAILS and current season is {currentSeason}</div>
            {data?.episodes.map((index, value)=>{
                return(
                    <div key={value} className={'episodes-item__heading'}>
                        <h4 className={'episodes-item__heading--title'}><span >Season {data?.season_number} E{index?.episode_number}: {index?.name}
                        <div className={'episodes-item__heading--title fontSize'} >Release Date : {dayjs(index?.release_date || index?.air_date).format(
                                                "MMM D, YYYY"
                                            )}</div>
                        </span></h4>
                        {/*<span style={{color:'red'}}>S{data?.season_number}E{index?.episode_number}: {index?.name}|</span>*/}
                        {/*<span style={{color:'red'}}>{index?.name}| </span>*/}

                        <br/>

                        {/*<span style={{color:'black'}}><hr/></span>*/}
                    </div>
                )
            })}
            </div>
        }</div>
    )

}
export default SeasonEpisode;