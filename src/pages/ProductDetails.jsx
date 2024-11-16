import React from "react";
import { useLocation } from "react-router-dom";

export default function ProductDetails() {
  const loction = useLocation();
  console.log(loction);

  return (
    <div>
      <p>{loction.state?.id}</p>
      <p>{location.state && location.state.title}</p>
      <p>{location.state ? location.state.id : "data not found"}</p>
    </div>
  );
}
