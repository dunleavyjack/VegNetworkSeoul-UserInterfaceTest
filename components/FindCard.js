import React from "react";
import Image from "next/image";

const FindCard = ({ name, veg, tag, price, location }) => {
  return (
    <>
      <li className="find-body">
        <figure className="find-figure">
          <Image
            src="/veggie.jpeg"
            alt="Vegetarian find"
            className={"find-image"}
            width="1536"
            height="2048"
          />
        </figure>
        <h2 className="find-name">{name}</h2>
        {/* <h3 className="m-3">{tag}</h3> */}
        <h5>
          <span className="find-tag">{veg}</span>
          <span className="gray">{tag}</span>
        </h5>
        <p className="find-detail">
          Vegan burgers I found at Emart in Seongsu. They were really good!
        </p>
        <p className="find-price">{price}</p>
        <p className="find-location">{location}</p>
        {/* <h3 className="m-3">{tag}</h3> */}
      </li>
    </>
  );
};

export default FindCard;
