import React, { useState, useEffect } from "react";
import {
  BsFillAlarmFill,
  BsFillCalendarDateFill,
  BsCalendar3,
} from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./Collection.module.css";
import DaysComponent from "./DaysComponents/DaysComponents";
import images from "../../img";

const Collection = () => {
  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const CardArray = [
    {
      background: images.engagement,
      user: images.favicon,
    },
    {
      background: images.venue,
      user: images.favicon,
    },
    {
      background: images.birthday,
      user: images.favicon,
    },
    {
      background: images.sports,
      user: images.favicon,
    },
  ];
  /*const newsArray = [
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
  ];
  const followingArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground7,
      user: images.user7,
    },
    {
      background: images.creatorbackground8,
      user: images.user8,
    },
  ];
  

  const openPopular = () => {
    if (!popular) {
      setPopular(true);
      setFollowing(false);
      setNews(false);
    }
  };

  const openFollower = () => {
    if (!following) {
      setPopular(false);
      setFollowing(true);
      setNews(false);
    }
  };

  const openNews = () => {
    if (!news) {
      setPopular(false);
      setFollowing(false);
      setNews(true);
    }
  };
  */
  return (
    <div className={Style.collection}>
      {popular && (
        <div className={Style.collection_box}>
          {CardArray.map((el, i) => (
            <DaysComponent key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      {following && (
        <div className={Style.collection_box}>
          {followingArray.map((el, i) => (
            <DaysComponent key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      {news && (
        <div className={Style.collection_box}>
          {newsArray.map((el, i) => (
            <DaysComponent key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Collection;