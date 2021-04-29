import React from "react";
import Image from "next/image";
import Link from "next/link";
import FacebookLogin from "../components/FacebookLogin";
import LoginModal from "../components/LoginModal";
import SearchBar from "../components/SearchBar";

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
          <h5 className={"thin"}>Vegan and vegetarian finds in your city.</h5>

          <br />
          <SearchBar />
          <p>Type in an area or a type of food you're looking for</p>
          <div className="home-buttons">
            <Link href="/browse">
              <button
                type={"button"}
                className={"btn btn-dark m-2 gray home-button"}
              >
                Browse
              </button>
            </Link>
            <button
              type={"button"}
              className={"btn btn-dark m-2 gray home-button"}
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Join{" "}
              <Image
                alt="facebook login"
                src="/facebook-icon.png"
                width="16"
                height="16"
                objectPosition="0px, 5px"
              />
            </button>
          </div>
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
      {/* ###### Modal is here ####### */}
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <LoginModal />
      </div>
    </>
  );
};

export default SplashWave;
