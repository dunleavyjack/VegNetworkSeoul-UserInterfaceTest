import React from "react";
import FindCard from "./FindCard";

const FindList = () => {
  return (
    <section className="finds container" id="finds">
      <ul>
        <FindCard name={"Beyond Burger"} tag={"Vegan"} />
        <FindCard name={"Vegan snacks"} tag={"Vegetarian"} />
        <FindCard name={"Beyond Burger"} tag={"Vegan"} />
        <FindCard name={"Beyond Burger"} tag={"Vegan"} />
        <FindCard name={"Not meat"} tag={"Vegan"} />
      </ul>
    </section>
  );
};

export default FindList;
