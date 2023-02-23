import React from "react";
import Style from "./Title.module.css";

const Title = ({ heading, paragraph }) => {
  return (
    <div className={Style.title}>
      <div className={Style.title_box}>
        <h1>{heading}</h1>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default Title;