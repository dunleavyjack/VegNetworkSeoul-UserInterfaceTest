import React from "react";
import SplashWave from "../components/SplashWave";
import Overview from "../components/Overview";
import AdditionalInfo from "../components/AdditionalInfo";
import { connectToDatabase } from "../util/mongodb";

export default function HomePage({ finds }) {
  console.log(finds);
  return (
    <>
      <SplashWave />
      <Overview />
      {/* <AdditionalInfo /> */}
    </>
  );
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();

  const data = await db.collection("finds").find({}).limit(20).toArray();

  const finds = JSON.parse(JSON.stringify(data));

  return {
    props: { finds: finds },
  };
}
