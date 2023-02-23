import React, { useEffect } from "react";
import Style from "./Slider.module.css";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import { Title } from "../componentsindex";

const Slider = ({ heading, desc, handleScroll }) => {
  return (
    <div className={Style.slider_box_button_btn}>
      <Title heading={heading}
        paragraph={desc} />
      <div
        className={Style.slider_box_button_btn_icon}
        onClick={() => handleScroll("left")}
      >
        <TiArrowLeftThick />
      </div>
      <div
        className={Style.slider_box_button_btn_icon}
        onClick={() => handleScroll("right")}
      >
        <TiArrowRightThick />
      </div>
    </div>
  )
};

export default Slider;