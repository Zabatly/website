import React from "react";

//INTERNAL IMPORT
import Style from "../styles/collection.module.css";
import images from "../img";
import {
  Banner,
  CollectionProfile,
  NFTCardTwo,
} from "../collectionPage/collectionIndex";
import { Slider, Brand } from "../components/componentsindex";
import Filter from "../components/Filter/Filter";

const collection = () => {
  const collectionArray = [
    images.engagement,
    images.venue,
    images.birthday,
    images.sports,
    images.engagement,
    images.venue,
    images.birthday,
    images.sports,
  ];

  return (
    <div className={Style.collection}>
      <CollectionProfile />
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />
      {/*
      <NFTCardTwo NFTData={collectionArray} />


      <Brand />*/}
    </div>
  );
};

export default collection;