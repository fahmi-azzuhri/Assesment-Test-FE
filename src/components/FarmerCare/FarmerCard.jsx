import React from "react";

function FarmerCard({ icon, title, desc }) {
  return (
    <div className="flex items-start bg-gray-50 p-4 rounded-lg shadow-md gap-3">
      <img className="w-1/5" src={icon} />
      <div>
        <h3 className="text-yellow-600 font-bold text-lg"> {title} </h3>
        <p className="text-gray-700">{desc}</p>
      </div>
    </div>
  );
}

export default FarmerCard;
