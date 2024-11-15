import React from "react";
import BULOG from "/img/BULOG.png";
import PI_Pangan from "/img/PI_Pangan.png";
import MDBT from "/img/MDBT.png";
function OurMitra() {
  return (
    <div className="flex items-center justify-evenly">
      <img className="w-1/5" src={BULOG} alt="" />
      <img className="w-1/5" src={PI_Pangan} alt="" />
      <img className="w-1/5" src={MDBT} alt="" />
    </div>
  );
}

export default OurMitra;
