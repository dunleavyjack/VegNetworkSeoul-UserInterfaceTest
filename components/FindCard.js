import React from "react";
import Image from "next/image";

const FindCard = ({ name, tag }) => {
  return (
    <>
      <li className="find-body">
        <figure>
          <Image
            src="/veggie.jpeg"
            alt="Vegetarian find"
            className={"image-border"}
            width="1536"
            height="2048"
          />
        </figure>
        <h2>{name}</h2>
        {/* <h3 className="m-3">{tag}</h3> */}
        <h5>
          <span className="find-tag">{tag}</span>
          <span className="gray">#cosmetics</span>
        </h5>
        <p className="find-detail">
          Vegan burgers I found at Emart in Seongsu. They were really good!
        </p>
        <p className="find-price">3000₩</p>
        <p className="find-location">Yongsan / Itaewon</p>
        {/* <h3 className="m-3">{tag}</h3> */}
      </li>
    </>
  );
};

export default FindCard;
