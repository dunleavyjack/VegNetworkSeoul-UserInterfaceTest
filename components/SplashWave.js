import React from "react";
import Image from "next/image";
import Link from "next/link";

const SplashWave = () => {
  return (
    <>
      <div
        className={"testcover d-flex align-items-center justify-content-center"}
      >
        <div className={"text-center"}>
          <h1 className={"bold gray"}>
            Veg Network <span className="yellow">|</span> Seoul
          </h1>
          <h5>The best vegan and vegetarian finds in the city.</h5>

          <br />
          <Link href="/browse">
            <button type={"button"} className={"btn btn-dark m-2 gray"}>
              Browse finds
            </button>
          </Link>
        </div>
      </div>
      <Image
        className={"wave"}
        alt="Green wave"
        src="/greenwave.png"
        width="4320"
        height="468"
        priority={true}
      />
    </>
  );
};

export default SplashWave;
