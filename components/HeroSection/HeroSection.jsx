import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button, NumberTag } from "../componentsindex";
import images from "../../img";
import { TbListSearch, TbPictureInPicture, TbSearch } from "react-icons/tb";
import { FaFunnelDollar } from "react-icons/fa";
import { CgSearchFound } from "react-icons/cg";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
//SMART CONTRACT IMPORT
//import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const HeroSection = () => {
  //const { titleData } = useContext(NFTMarketplaceContext);
  const handleSelect = () => {

  };
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
              handleClick={() => router.push("/collection")}
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
        <div className={Style.heroSection_search_container}>
          <div className={Style.heroSection_search_box}>
            <div className={Style.heroSection_search_box_btn}>
              <div className={Style.heroSection_search_box_btn_icon}>
                <TbListSearch />
              </div>
              <div className={Style.heroSection_search_box_btn_text}>
                <input placeholder="Search Venues" onSelect={handleSelect()} className={Style.heroSection_search_box_btn_input} type="search" />
                <p>What are you looking for?</p>
              </div>
              <div className={Style.heroSection_search_box_btn_dropdown}>
                <div className={Style.dropdown_title}>Search Results</div>
                <ul className={Style.dropdown_ul}>
                  <li><CgSearchFound /> Venue#1</li>
                  <li><CgSearchFound /> Venue#2</li>
                  <li>Venue#1</li>
                  <li><CgSearchFound /> Venue#4</li>
                  <li><CgSearchFound /> Venue#4</li>
                  <li><CgSearchFound /> Venue#4</li>
                </ul>
              </div>
            </div>
            <div className={Style.heroSection_search_box_btn}>
              <div className={Style.heroSection_search_box_btn_icon}>
                <TbPictureInPicture />
              </div>
              <div className={Style.heroSection_search_box_btn_text}>
                <input placeholder="Select Category" onSelect={handleSelect()} className={Style.heroSection_search_box_btn_input} type="text" readOnly />
                <p>Venue Category</p>
              </div>
              <div className={Style.heroSection_search_box_btn_dropdown}>
                <div className={Style.dropdown_title}>Categories</div>
                <ul className={Style.dropdown_ul}>
                  <li><label className={Style.container}>
                    <input type="checkbox" />
                    <span className={Style.checkmark}></span>
                  </label>Entertainment</li>
                  <li><label className={Style.container}>
                    <input type="checkbox" />
                    <span className={Style.checkmark}></span>
                  </label>Wedding</li>
                  <li><label className={Style.container}>
                    <input type="checkbox" />
                    <span className={Style.checkmark}></span>
                  </label>Sports</li>
                  <li><label className={Style.container}>
                    <input type="checkbox" />
                    <span className={Style.checkmark}></span>
                  </label>whatever</li>
                  <li><label className={Style.container}>
                    <input type="checkbox" />
                    <span className={Style.checkmark}></span>
                  </label>whatever</li>
                </ul>
              </div>
            </div>
            <div className={Style.heroSection_search_box_btn}>
              <div className={Style.heroSection_search_box_btn_icon}>
                <FaFunnelDollar />
              </div>
              <div className={Style.heroSection_search_box_btn_text}>
                <input placeholder="100EGP ~ 1000EGP" onSelect={handleSelect()} className={Style.heroSection_search_box_btn_input} type="text" readOnly />
                <p>Price Range</p>
              </div>
              <div className={Style.heroSection_search_box_btn_dropdown}>
                <div className={Style.dropdown_title}>Price Settings</div>
                <div style={{padding: "1rem"}}>
                  <RangeSlider
                    min={100}
                    max={1000}
                    step={50}
                    defaultValue={[1000, 100]}
                  />
                </div>
                <div className={Style.dropdown_prices}>
                  <NumberTag tag="Min. Price" number={"123455 EGP"}/>
                  <NumberTag tag="Max Price" number={"123455 EGP"}/>
                </div>
              </div>
            </div>
            <div className={Style.heroSection_search_box_btn_iconSubmit}>
              <TbSearch />
            </div>
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