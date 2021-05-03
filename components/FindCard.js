import React from "react";
import Image from "next/image";
import RoomIcon from "@material-ui/icons/Room";

const FindCard = ({ name, veg, tag, price, location }) => {
  return (
    <>
      <li className="find-body">
        <figure className="find-figure">
          <Image
            src="/snack.jpeg"
            alt="Vegetarian find"
            className={"find-image"}
            width="1200"
            height="1200"
          />
        </figure>
        <div className={"find-content"}>
          <h1 className="find-name">{name}</h1>
          <h5 className={"green find-tag"}>
            <span className="green">{veg}</span>
            {" | "}
            <span className="green">{tag}</span>
          </h5>
          <p className="find-detail">
            Found these at Emart in Seongsu. They were a little pricey but
            really good!
          </p>
          <div className="find-location">
            {location} <RoomIcon />
            {/* <span className={"find-price"}>{"  " + price}</span> */}
          </div>
        </div>
      </li>
    </>
  );
};

export default FindCard;
