import React from "react";
import Andrew from "/img/Andrew_Soeherman.png";
import Kevin from "/img/Kevin_Juan.png";
import Angels from "/img/Angels_Gani.png";
import Bharat from "/img/pak_bharat.png";
import Riswanto from "/img/pak_riswanto.png";
import TeamCard from "./TeamCard";

function Team() {
  return (
    <div className="flex flex-col items-center py-8">
      <h2 className="text-primary-500 text-2xl text-center font-bold">
        Tim Kami
      </h2>
      <div className="grid grid-cols-3 gap-5 mt-5">
        <TeamCard img={Andrew} name="Andrew Soeherman" role="CEO of Eratani" />
        <TeamCard
          img={Kevin}
          name="Kevin Juan"
          role="SVP Business & Operation"
        />
        <TeamCard img={Angels} name="Angel Gani" role="SVP Sales" />
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <TeamCard img={Bharat} name="Bharat Ongso" role="Advisor" />
        <TeamCard img={Riswanto} name="Riswanto" role="Advisor" />
      </div>
    </div>
  );
}

export default Team;
