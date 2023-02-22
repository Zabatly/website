import React, { useState, useEffect, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import { VenueCard } from "../components/componentsindex";

const Home = () => {
  return (
  <div className={Style.homePage}>
    <VenueCard />
  </div>
  )
};

export default Home;
