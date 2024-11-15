import React from "react";
import GroupEco from "./GroupEco";
import petani_binaan from "/img/petani_binaan.png";
import pendanaan from "/img/pendanaan.png";
import peningkatan from "/img/peningkatan.png";
import luas_wilayah from "/img/luas_wilayah.png";
import produktivitas from "/img/produktivitas.png";
function Ecosystem() {
  return (
    <div className="flex flex-col items-center space-y-12">
      <div className="text-center">
        <h2 className="text-primary-500 text-2xl font-bold">
          Menuju Ekosistem yang Lebih Kuat Bersama Eratani
        </h2>
        <div className="grid grid-cols-2 gap-8 mt-8">
          <GroupEco icon={petani_binaan} value="500+" label="Petani Binaan" />
          <GroupEco
            icon={pendanaan}
            value="Rp 5 Miliar"
            label="Pendanaan Tersalurkan"
          />
        </div>
        <div className="grid grid-cols-3 gap-8 mt-8">
          <GroupEco
            icon={peningkatan}
            value="15%"
            label="Peningkatan Pendapatan"
          />
          <GroupEco
            icon={luas_wilayah}
            value="750 Ha"
            label="Luas Wilayah Binaan"
          />
          <GroupEco
            icon={produktivitas}
            value="20%"
            label="Peningkatan Produktivitas"
          />
        </div>
      </div>
    </div>
  );
}

export default Ecosystem;
