import React from "react";
import Image from "next/image";
import Link from "next/link";
import FacebookLogin from "../components/FacebookLogin";

const SplashWave = () => {
  return (
    <>
      <div
        className={"testcover d-flex align-items-center justify-content-center"}
      >
        <div className={"text-center"}>
          <h1 className={"bold gray"}>
            Veg Network <span className="yellow">|</span> SEOUL
          </h1>
          <h5>The best vegan and vegetarian finds in the city.</h5>

          <br />
          <div className="home-buttons">
            <Link href="/browse">
              <button
                type={"button"}
                className={"btn btn-dark m-2 gray home-button"}
              >
                Browse Finds
              </button>
            </Link>
            <button
              type={"button"}
              className={"btn btn-dark m-2 gray home-button"}
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Join
              {/* <Image
                  alt="facebook login"
                  src="/facebook-icon.png"
                  width="16"
                  height="16"
                  className={"fb-icon"}
                /> */}
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
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SplashWave;
