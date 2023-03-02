import React from "react";
import Image from "next/image";
import { DiJqueryLogo } from "react-icons/di";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "./HostBrand.module.css";
import images from "../../img";
import { Button } from "../../components/componentsindex.js";

const HostBrand = () => {
  const router = useRouter();
  return (
    <div className={Style.HostBrand}>
      <div className={Style.HostBrand_box}>
        <div className={Style.HostBrand_box_left}>
          {/* <Image src={images.logo} alt="HostBrand logo" width={100} height={100} /> */}
          <h1>Earn money by becoming a Host</h1>
          <p>List venues on our evergrowing platform</p>

          <div className={Style.HostBrand_box_left_btn}>
            <Button
              btnName="Host Now"
              handleClick={() => router.push("/venueHost")}
            />
          </div>
        </div>
        <div className={Style.HostBrand_box_right}>
          <Image src={images.hostBrand} alt="Venue hosting logo" width={800} height={500} />
        </div>
      </div>
    </div>
  );
};

export default HostBrand;