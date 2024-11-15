import React from "react";
import Jumbotron from "../Section/Jumbotron";
import about from "/img/about.png";
import VisiMisi from "./VisiMisi";
import Team from "./Team";

function About() {
  return (
    <div>
      <Jumbotron />
      <h2 className="text-primary-500 text-2xl text-center font-bold mt-4">
        Tentang Kami
      </h2>
      <div className="flex flex-col md:flex-row items-center px-8 md:px-12 py-7 gap-6 justify-center">
        <div className="w-1/5">
          <img
            src={about}
            alt="About"
            className="w-full h-full rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-lg text-justify leading-relaxed">
            <strong>Eratani</strong> adalah perusahaan Agri-tech yang didirikan
            oleh anak bangsa. Berangkat dari mimpi dan semangat yang besar,
            Eratani memiliki misi untuk menyejahterakan petani nusantara dengan
            mempermudah jalannya proses pertanian dari hulu sampai hilir.
            Melalui digitalisasi proses hulu (pendanaan petani, pengelolaan
            rantai pasokan) hingga proses hilir (distribusi & penyaluran hasil
            panen), Eratani berfokus membangun ekosistem pertanian yang kuat dan
            berusaha memberikan kemudahan akses kepada petani dengan teknologi
            untuk meningkatkan produktivitas dan kesejahteraan ekosistem
            pertanian.
          </p>
        </div>
      </div>
      <VisiMisi />
      <Team />
    </div>
  );
}

export default About;
