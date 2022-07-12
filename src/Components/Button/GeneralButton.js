import React from "react";

//Button layout that can be imported to all buttons used for this project
const GeneralButton = ({
  btnStyle,
  extraStyles = "",
  icon,
  text,
  action = () => {},
}) => {
  return (
    <div className={extraStyles}>
      <button className={`btn btn-${btnStyle} m-2`} onClick={action}>
        <span className={`oi oi-${icon}`} /> {text}{" "}
      </button>
    </div>
  );
};

export default GeneralButton;
