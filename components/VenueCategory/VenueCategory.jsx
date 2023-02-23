import React, { useState, useEffect, useRef } from "react";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import { BsCircleFill } from "react-icons/bs";
import Image from "next/image";
import Style from "./VenueCategory.module.css";
import { motion } from "framer-motion";
import { Title } from "../componentsindex";

const categoryColors = ['red', 'purple', 'green', 'orange']
const venueActivities = [
    {
        id: "0",
        name: "Engagement",
        src: "/user-1.png",
        capacity: 99,
        soon: false
    },
    {
        id: "1",
        name: "Catering",
        src: "/user-2.png",
        capacity: 99,
        soon: false
    },
    {
        id: "2",
        name: "Wedding",
        src: "/user-3.png",
        capacity: 10,
        soon: false
    },
    {
        id: "3",
        name: "Sports venue",
        src: "/user-4.png",
        capacity: 0,
        soon: true
    },
    {
        id: "4",
        name: "??",
        src: "/user-4.png",
        capacity: 0,
        soon: true
    },
    {
        id: "5",
        name: "?",
        src: "/user-4.png",
        capacity: 0,
        soon: true
    },
];

const VenueCategory = () => {
    const [width, setWidth] = useState(0);
    const dragSlider = useRef();

    useEffect(() => {
        setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
    });

    const handleScroll = (direction) => {
        const { current } = dragSlider;
        const scrollAmount = 300
        console.log(current.scrollLeft);
        if (direction == "left") {
            current.scrollLeft -= scrollAmount;
        } else {
            current.scrollLeft += scrollAmount;
        }
    };


    return (
        <div className={Style.slider}>
            <div className={Style.slider_box}>
                <div className={Style.slider_box_button_btn}>
                    <Title
                        heading="Browse by category"
                        paragraph="Explore the Venues in the most featured categories."
                    />
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
                <motion.div className={Style.slider_box_items} ref={dragSlider}>
                    <motion.div
                        ref={dragSlider}
                        className={Style.slider_box_item}
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                    >
                        {venueActivities.map(venue => {
                            return (
                                // Todo: Transform into Seperate component
                                <div className={Style.category_box} key={venue.id}>
                                    <Image
                                        src={'/img' + venue.src}
                                        className={Style.category_box_img}
                                        alt="Background image"
                                        width={300}
                                        height={200}
                                        objectFit="cover"
                                    />

                                    <div className={Style.category_box_title}>
                                        <span>
                                            <BsCircleFill style={{color: categoryColors[parseInt(venue.id)]}} />
                                        </span>
                                        <div className={Style.category_box_title_info}>
                                            <h4>{venue.name}</h4>
                                            <small>{venue.capacity}</small>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        {/*FollowingArray.map((el, i) => (
                            <SliderCard key={i + 1} el={el} i={i} />
                        ))*/}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
};

export default VenueCategory;