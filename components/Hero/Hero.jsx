import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "./Hero.module.css";
import { Button } from "../componentsindex";
import images from "../../img";
import { TbListSearch, TbPictureInPicture, TbSearch } from "react-icons/tb";
import { FaFunnelDollar, FaSearch } from "react-icons/fa";

//SMART CONTRACT IMPORT
//import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const HeroSection = () => {
  //const { titleData } = useContext(NFTMarketplaceContext);
  const router = useRouter();
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Welcome To Zabatly <Image src={images.favicon} width={50} height={50} /> </h1>
          <p>
            Zabatly offers a sustainable solution for the events industry and
            deliver both unique and value-driven technologies for the user using
            latest AI supported technology.
          </p>
          <div className={Style.heroSection_buttons}>
            <Button
              btnName="Start your search"
              handleClick={() => { }}
            />
            <Button
              btnName="Discover"
              handleClick={() => router.push("/searchPage")}
            />
          </div>
        </div>
        <div className={Style.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="Hero section"
            width={600}
            height={400}
          />
        </div>
        <div className={Style.heroSection_search_box}>
          <div className={Style.heroSection_search_box_btn}>
            <div className={Style.heroSection_search_box_btn_icon}>
              <TbListSearch />
            </div>
            <div className={Style.heroSection_search_box_btn_text}>
              <input className={Style.heroSection_search_box_btn_input} type="search" />
              <p>Search Venues</p>
            </div>
          </div>
          <div className={Style.heroSection_search_box_btn}>
            <div className={Style.heroSection_search_box_btn_icon}>
              <TbPictureInPicture />
            </div>
            <div className={Style.heroSection_search_box_btn_text}>
            <select className={Style.heroSection_search_box_btn_input}></select>
              <p>Venue Category</p>
            </div>
          </div>
          <div className={Style.heroSection_search_box_btn}>
            <div className={Style.heroSection_search_box_btn_icon}>
              <FaFunnelDollar />
            </div>
            <div className={Style.heroSection_search_box_btn_text}>
            <select className={Style.heroSection_search_box_btn_input}></select>
              <p>Price Range</p>
            </div>
          </div>
          <div className={Style.heroSection_search_box_btn_iconSubmit}>
            <TbSearch />
          </div>

        </div>
      </div>
      <div className={Style.wavesDiv}>
        <svg className={Style.wave} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g>
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="#1363ff" />
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="#1363ff" />
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="#1363ff" />
          </g>
        </svg>
      </div>

    </div>
  );
};

export default HeroSection;