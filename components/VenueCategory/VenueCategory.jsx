import React, { useState, useEffect, useRef } from "react";
import Style from "./VenueCategory.module.css";
import { motion } from "framer-motion";
import { Title } from "../componentsindex";
import Slider from "../Slider/Slider";
import CategoryCard from "./CategoryCard";

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
        console.log(dragSlider.current)

        // setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
    }, [dragSlider]);

    const handleScroll = (direction) => {
        const { current } = dragSlider;
        const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

        if (direction == "left") {
            current.scrollLeft -= scrollAmount;
        } else {
            current.scrollLeft += scrollAmount;
        }
    };


    return (
        <div className={Style.slider}>
            <div className={Style.slider_box}>
                <Slider heading="Browse by category" desc="Explore the Venues in the most featured categories." handleScroll={handleScroll} />
                <motion.div className={Style.slider_box_items} ref={dragSlider}>
                    <motion.div
                        ref={dragSlider}
                        className={Style.slider_box_item}
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                    >
                        {venueActivities.map(venue =>
                            <CategoryCard key={venue.id} title={venue.name} capacity={venue.capacity} imgSrc={'/img' + venue.src} color={categoryColors[parseInt(venue.id)]} />
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
};

export default VenueCategory;