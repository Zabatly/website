import React from "react";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";

//INTERNAL IMPORT
import Style from "./collectionProfile.module.css";
import images from "../../img";

const collectionProfile = () => {
  const cardArray = [1, 2, 3, 4];
  return (
    <div className={Style.collectionProfile}>
      <div className={Style.collectionProfile_box}>
        <div className={Style.collectionProfile_box_left}>
          <Image
            src={images.engagement}
            alt="engagement image"
            width={800}
            height={800}
            className={Style.collectionProfile_box_left_img}
          />
        </div>

        <div className={Style.collectionProfile_box_middle}>
          <h1>Venues Collection</h1>
          <p>
            Browse Various Engagement Venues among 10000+ Venues available at Zabatly
          </p>
        </div>
      </div>
    </div>
  );
};

export default collectionProfile;