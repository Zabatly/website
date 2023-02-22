import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./VenueCard.module.css";
import images from "../../img";

const VenueCard = () => {
  const featureArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [like, setLike] = useState(true);

  const likeVenue = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  return (
    <div className={Style.VenueCard}>
      {featureArray.map((el, i) => (
        <div className={Style.VenueCard_box} key={i + 1}>
          <div className={Style.VenueCard_box_img}>
            <Image
              src={images.venue}
              alt="Venue Image"
              width={600}
              height={600}
              className={Style.VenueCard_box_img_img}
            />
          </div>

          <div className={Style.VenueCard_box_update}>
            <div className={Style.VenueCard_box_update_left}>
              <div
                className={Style.VenueCard_box_update_left_like}
                onClick={() => likeVenue()}
              >
                {like ? (
                  <AiFillStar />
                ) : (
                  <AiFillStar
                    className={Style.VenueCard_box_update_left_like_icon}
                  />
                )}
                {""} 4.8
              </div>
            </div>

            {/*<div className={Style.VenueCard_box_update_right}>
              <div className={Style.VenueCard_box_update_right_info}>
                <AiFillStar />
                <AiFillStar/>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <small>Remaining time</small>
                <p>3h : 15m : 20s</p>
              </div>
            </div>
            */}
          </div>

          <div className={Style.VenueCard_box_update_details}>
            <div className={Style.VenueCard_box_update_details_price}>
              <div className={Style.VenueCard_box_update_details_price_box}>
                <h4>Al Masa Hall</h4>

                <div className={Style.VenueCard_box_update_details_price_box_box}>
                  <div
                    className={Style.VenueCard_box_update_details_price_box_bid}
                  >
                    <small>Price</small>
                    <p>1000 EGP</p>
                  </div>
                  {/*<div
                    className={Style.VenueCard_box_update_details_price_box_stock}
                  >
                    <small>61 in stock</small>
                  </div>*/}
                </div>
              </div>
            </div>
            <div className={Style.VenueCard_box_update_details_category}>
              <BsImages />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VenueCard;