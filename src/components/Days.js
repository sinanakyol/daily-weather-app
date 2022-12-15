import React from "react";

function Days() {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const day = weekday[new Date().getDay()];

  return <div>{day}</div>;
}

export default Days;
