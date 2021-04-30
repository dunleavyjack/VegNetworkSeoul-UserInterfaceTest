import React from "react";
import Header from "../components/Header";
import FindList from "../components/FindList";
import { connectToDatabase } from "../util/mongodb";

export default function Browse({ finds }) {
  return (
    <>
      {/* <div className={"browse-background"}> */}
      <Header text={"The Latest"} />
      <FindList finds={finds} />
      {/* </div> */}
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
