import React from "react";
import Header from "../components/Header";
import FindList from "../components/FindList";
import { connectToDatabase } from "../util/mongodb";

export default function Browse({ finds }) {
  return (
    <>
      <Header text={"The Latest"} />
      <FindList finds={finds} />
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
