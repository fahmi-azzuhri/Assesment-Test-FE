import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
function TeamCard({ img, name, role }) {
  return (
    <div className="relative max-w-xs rounded overflow-hidden shadow-lg bg-neutral-200 inline-block mx-auto w-[250px]">
      <button className="absolute top-4 right-4 w-10 h-10 bg-secondary-500 text-white rounded-full flex items-center justify-center shadow-lg w-1/5">
        <FaLinkedinIn className="text-neutral-700" />
      </button>
      <img className="h-[250px] mx-auto" src={img} alt={name} />
      <div className="flex flex-col px-6 py-4 bg-secondary-500 text-center">
        <p className="text-neutral-700 text-xl font-medium">{name}</p>
        <p className="text-neutral-700 text-sm">{role}</p>
      </div>
    </div>
  );
}

export default TeamCard;
