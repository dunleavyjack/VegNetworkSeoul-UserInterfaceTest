import React from "react";
import Header from "../components/Header";
import FindList from "../components/FindList";
import Navbar from "../components/Navbar";

const BrowsePage = () => {
  return (
    <>
      <Navbar />
      <Header text={"The Latest"} />
      <FindList />
    </>
  );
};

export default BrowsePage;
