import React from "react";
import Style from "./NumberTag.module.css";

const NumberTag = ({ tag, number }) => {
    return (
        <div className={Style.NumberTag_container}>
                <div className={Style.NumberTag_box}>
                <small>{tag}</small>
                <p>{number}</p>
            </div>
        </div>
    );
};

export default NumberTag;