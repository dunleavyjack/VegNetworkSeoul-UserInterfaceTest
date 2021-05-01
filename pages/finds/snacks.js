import React from "react";
import Header from "/components/Header";
import SearchFindList from "/components/SearchFindList";
import { connectToDatabase } from "/./util/mongodb";

export default function Snacks({ finds }) {
  return (
    <>
      <Header text={"The Latest"} />
      <SearchFindList finds={finds} param={"tag"} value={"snack"} />
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
