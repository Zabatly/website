import React, { useState, useEffect, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  Title,
  Filter,
  VenueCard,
  Category,
  Collection,
  Slider,
  TopVenues,
  HostBrand
} from "../components/componentsindex";
import { NFTCardTwo } from "../collectionPage/collectionIndex";
import images from "..//img"

const Home = () => {
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
  <div className={Style.homePage}>
    <HeroSection />
    <Service />
    {/*<Filter />
    <Service />*/}
    {/*<NFTCardTwo NFTData={collectionArray} /> */}
    {/*<VenueCard />*/}
    {/*<Title
      heading="Browse by category"
      paragraph="Explore venues in the most featured categories."
    />
    <Category/>
    <Collection/>*/}
    <TopVenues />
    <Slider/>
    <HostBrand />
    
  </div>
  )
};

export default Home;
