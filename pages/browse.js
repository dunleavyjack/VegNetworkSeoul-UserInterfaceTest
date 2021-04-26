import React from "react";
import Header from "../components/Header";
import FindList from "../components/FindList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BrowsePage = () => {
  return (
    <>
      <Navbar />
      <Header text={"The Latest"} />
      <FindList />
      <Footer />
    </>
  );
};

export default BrowsePage;
