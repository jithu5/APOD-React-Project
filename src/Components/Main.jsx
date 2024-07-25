import React from "react";
import Mars from "../assets/mars.png";

function Main({data}) {
  return (
    <>
      <img
        className="w-full h-screen object-cover flex-1"
        src={data?.url}
        alt={data?.title}
      />
    </>
  );
}

export default Main;
