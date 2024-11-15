import React from "react";
import FarmerCard from "./FarmerCard";
import pembiayaan from "/img/pembiayaan.png";
import manajemen from "/img/manajemen.png";
import distribusi from "/img/distribusi.png";
function FarmerCare() {
  return (
    <div className="flex flex-col items-center space-y-12 p-6">
      <h2 className="flex text-primary-500 text-2xl text-center font-bold sm:text-left">
        Peduli Petani Bersama Eratani
      </h2>
      <div className="space-y-6 w-full max-w-xl">
        <FarmerCard
          icon={pembiayaan}
          title="Pembiayaan"
          desc="Eratani menyalurkan dukungan dan edukasi finansial berbasis teknologi bagi para petani yang mengalami kesulitan permodalan untuk meningkatkan produktivitas pertanian."
        />
        <FarmerCard
          icon={manajemen}
          title="Manajemen Rantai Pasok"
          desc="Eratani memfasilitasi akses kebutuhan petani melalui mitra penyedia sarana kebutuhan di bidang pertanian secara transparan dan terstandarisasi."
        />
        <FarmerCard
          icon={distribusi}
          title="Distribusi & Penjualan"
          desc="Eratani memfasilitasi petani untuk menjual dan mendistribusikan hasil panen secara langsung dan mudah dengan harga yang terstandarisasi."
        />
      </div>
    </div>
  );
}

export default FarmerCare;
