import React from "react";
import Style from "./VenueCategory.module.css";
import { BsCircleFill } from "react-icons/bs";
import Image from "next/image";
const CategoryCard = ({title, capacity, color, imgSrc}) => {
    return (
        <div className={Style.category_box}>
        <Image
            src={imgSrc}
            className={Style.category_box_img}
            alt="Background image"
            width={300}
            height={200}
            objectFit="cover"
        />

        <div className={Style.category_box_title}>
            <span>
                <BsCircleFill style={{ color: color }} />
            </span>
            <div className={Style.category_box_title_info}>
                <h4>{title}</h4>
                <small>{capacity}</small>
            </div>
        </div>
    </div>
    )
};

export default CategoryCard;