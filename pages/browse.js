import React from "react";
import Header from "../components/Header";
import FindList from "../components/FindList";

const BrowsePage = () => {
  return (
    <>
      <Header text={"The Latest"} />
      <FindList />
    </>
  );
};

export default BrowsePage;
