import React from "react";

function Buttons(props) {
  const numbers = props.label;
  const listOfButtons = numbers.map((number, i) => <button className="button" key={i} onClick={props.clickHandler}>{number}</button>);
  return (
    <div className="button_wrapper">
      {listOfButtons}
    </div>
  );
}

export default Buttons;