import React from "react";
import Title from "./title";
import Button from "./buttons";

const dataPackage = ['1GB','6GB','15GB','40GB','60GB','100GB'];
function Simdetails() {
    return(
        <div className="sim_details">
        <Title Title='How much data would you like per SIM?'/>
        <Button clickHandler={buttonClick} label={dataPackage}/>
      </div>
    );
}

function buttonClick(e) {
    console.log("button click : ", e.target.innerText);
  }

export default Simdetails;