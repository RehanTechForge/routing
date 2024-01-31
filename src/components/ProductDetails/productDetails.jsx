import React from "react";
import { useLocation } from "react-router-dom";

const productDetails = ({ index }) => {
  console.log(useLocation().pathname);
  console.log(index);
  return <div>details page</div>;
};

export default productDetails;
