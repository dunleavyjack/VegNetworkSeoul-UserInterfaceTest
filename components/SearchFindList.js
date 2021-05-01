import React, { useState, useEffect } from "react";
import FindCard from "./FindCard";

const SearchFindList = ({ finds, param, value }) => {
  // Set initial state
  useEffect(() => {
    const filterFinds = (param, value) => {
      const theFinds = finds.filter((find) => find[param] === value);
      setFindDisplay(theFinds);
    };
    setFindDisplay(filterFinds);
  }, []);

  const buildFinds = (arr) => {
    const allFinds = arr.map((find) => {
      return (
        <FindCard
          key={find._id}
          name={find.name}
          veg={find.veg}
          tag={find.tag}
          price={find.price}
          location={find.location}
        />
      );
    });
    return allFinds;
  };

  return (
    <>
      <section className="container">
        <ul className="find-container">{buildFinds(findDisplay)}</ul>
      </section>
    </>
  );
};

export default SearchFindList;
