import React from "react";
import Image from "next/image";

const AdditionalInfo = () => {
  return (
    <div className={"container text-center"}>
      <hr />
      {/* <h1 className="green bold">Getting Started?</h1> */}
      <Image alt="Find things" src="/saly-find.png" width="300" height="300" />
      {/* <Image alt="Find things" src="/saly-read.png" width="300" height="300" /> */}
      {/* <Image alt="Find things" src="/Saly-17.png" width="300" height="300" /> */}
      <Image alt="Find things" src="/arm.png" width="300" height="300" />
      {/* <Image alt="Help others" src="/saly-help.png" width="150" height="300" /> */}
    </div>
  );
};

export default AdditionalInfo;
