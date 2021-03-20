import React from "react";
import ReactLoading from "react-loading";

const Loader = ({ type, color }) => (
  <ReactLoading type={'cubes'} color={"red"} height={50} width={50} />
);

export default Loader;
