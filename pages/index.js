import React from "react";
import Navbar from "../components/Navbar";
import SplashWave from "../components/SplashWave";
import Overview from "../components/Overview";
import AdditionalInfo from "../components/AdditionalInfo";
import Footer from "../components/Footer";

const BrowsePage = () => {
  return (
    <>
      <Navbar />
      <SplashWave />
      <Overview />
      {/* <AdditionalInfo /> */}
      <Footer />
    </>
  );
};

export default BrowsePage;
