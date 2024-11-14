import React from "react";

function FarmerCard({ icon, title, desc }) {
  return (
    <div className="flex items-center items-start bg-gray-300 p-4 rounded-lg shadow-md gap-3">
      <img className="w-1/5" src={icon} />
      <div className="mt-3">
        <h3 className="text-green-500 font-bold text-lg"> {title} </h3>
        <p className="text-neutral-500">{desc}</p>
      </div>
    </div>
  );
}

export default FarmerCard;
