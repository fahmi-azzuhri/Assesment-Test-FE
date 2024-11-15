import React from "react";
import { FaWhatsapp } from "react-icons/fa";
function Part() {
  return (
    <div className="flex mx-auto items-center flex-col">
      <h2 className="text-primary-500 text-2xl text-center font-bold">
        Ingin Menjadi Bagian dari Kami?
      </h2>
      <div className="flex flex-col justify-center">
        <p className="p-8">
          Bersama kami membangun pertanian Indonesia karena Eratani{" "}
          <span className="bg-secondary-500 font-bold text-neutral-700 ">
            #SelaluAdaUntukPetani
          </span>
        </p>
        <button className="bg-primary-500 hover:bg-primary-600 flex items-center mx-auto gap-2 py-2 px-4 rounded-lg text-white">
          <FaWhatsapp />
          Hubungi Kami
        </button>
      </div>
    </div>
  );
}

export default Part;
