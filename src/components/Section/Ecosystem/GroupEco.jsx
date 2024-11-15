import React from "react";

function GroupEco({ icon, value, label }) {
  return (
    <div className="text-center">
      <img src={icon} alt={label} className="h-12 mx-auto" />
      <p className="text-primary-500 font-bold text-lg mt-2">{value}</p>
      <p className="text-secondary-500">{label}</p>
    </div>
  );
}

export default GroupEco;
