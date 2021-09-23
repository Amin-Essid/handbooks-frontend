import React from "react";
import "./Steps.scss";
import Step from "./Step/Step";

const Steps = ({ items }) => {
  console.log(items);
  const steps = items.map((item, i) => {
    return <Step item={item} index={i} key={i} />;
  });
  return (
    <div className="steps_container">
      {/* <div className="menu_title">{title}</div> */}
      {/* <div className="menu_items">{steps}</div> */}
      {steps}
    </div>
  );
};

export default Steps;
