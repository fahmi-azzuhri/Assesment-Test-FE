import React from "react";
import BULOG from "/img/BULOG.png";
import PI_Pangan from "/img/PI_Pangan.png";
import MDBT from "/img/MDBT.png";
function OurMitra() {
  return (
    <div className="flex mx-auto items-center flex-col">
      <h2 className="text-primary-500 text-2xl text-center font-bold">
        Mitra Kami
      </h2>
      <div className="flex items-center justify-evenly mt-8">
        <img className="w-1/5" src={BULOG} alt="" />
        <img className="w-1/5" src={PI_Pangan} alt="" />
        <img className="w-1/5" src={MDBT} alt="" />
      </div>
    </div>
  );
}

export default OurMitra;
