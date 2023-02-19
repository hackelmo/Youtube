import React from "react";
import { useParams } from "react-router-dom";

export default function Videos() {
  const { search } = useParams();
  console.log(search);
  return <div>핫한 비디오{search ? "🔍" : "🔥"}</div>;
}
