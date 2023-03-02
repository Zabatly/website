import React, { useState, useEffect } from "react";
import {
    BsFillAlarmFill,
    BsFillCalendarDateFill,
    BsCalendar3,
} from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./TopVenues.module.css";
import images from "../../img";
import { NFTCardTwo } from "../../collectionPage/collectionIndex";

const venueCards = {
    "recommended": [
        images.engagement,
        images.venue,
        images.birthday,
        images.sports,
        images.engagement,
        images.venue,
        images.birthday,
        images.sports,
      ],
    "trending": [],
    "top": []
};

const TopVenues = () => {
    const [Recommended, setRecommended] = useState(true);
    const [Trending, setTrending] = useState(false);
    const [Top, setTop] = useState(false);

    const openRecommended = () => {
        if (!Recommended) {
            setRecommended(true);
            setTrending(false);
            setTop(false);
        }
    };

    const openTrending = () => {
        if (!Trending) {
            setRecommended(false);
            setTrending(true);
            setTop(false);
        }
    };

    const openTop = () => {
        if (!Top) {
            setRecommended(false);
            setTrending(false);
            setTop(true);
        }
    };

    return (
        <div className={Style.collection}>
            <div className={Style.collection_title}>
                <h2>Check Our Top Venues</h2>
                <div className={Style.collection_collections}>
                    <div className={Style.collection_collections_btn}>
                        <button onClick={() => openRecommended()}>
                            <BsFillAlarmFill /> Recommended
                        </button>
                        <button onClick={() => openTrending()}>
                            <BsCalendar3 /> Trending
                        </button>
                        <button onClick={() => openTop()}>
                            <BsFillCalendarDateFill /> Top
                        </button>
                    </div>
                </div>
            </div>
            {
                Recommended && <NFTCardTwo NFTData={venueCards['recommended']} />
            }
        </div>
    );
};

export default TopVenues;