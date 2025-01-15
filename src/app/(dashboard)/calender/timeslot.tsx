import "./customslot.css";
import moment from "moment";
import React from "react";

function TimeSlot(props, step, day, isRender) {
  const differenceMs = +moment() - +moment(props.value);
  const isCurrentTimeSlot =
    differenceMs / (60 * 1000) > 0 && differenceMs / (60 * 1000) < step;

  let timeIndicator = {};
  let addStyle = {};

  // if (isCurrentTimeSlot && isRender) {
  //   timeIndicator.children = (

  //   )
  //   addStyle = { zIndex: 'inherit' }
  // }

  return React.cloneElement(props.children, {
    style: { ...addStyle },
    "data-time": moment(props.value).format("HH:mm"),
    ...timeIndicator,
  });
}

export default TimeSlot;
