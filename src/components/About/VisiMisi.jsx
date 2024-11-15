import React from "react";
import { GoDotFill } from "react-icons/go";
function VisiMisi() {
  const Misi = [
    "Membangun dan memajukan ekosistem pertanian dengan digitalisasi dan transparansi di setiap prosesnya.",
    "Menjadi platform dan mitra bagi petani dalam mendukung segala proses pertanian.",
    "Menjadi mitra bagi para kreditor, supplier, dan distributor guna meningkatkan kinerja rantai pasok di dunia pertanian.",
    "Berkolaborasi dengan badan usaha pangan guna meningkatkan ketahanan pangan nasional.",
    "Memberikan dampak sosial yang positif dan membangun bagi ekosistem pertanian di Indonesia.",
  ];
  return (
    <div className="flex flex-col py-5">
      <div className="w-full md:w-1/2 text-center mx-auto">
        <h2 className="text-primary-500 text-2xl font-bold">Visi Eratani</h2>
        <p className="text-lg leading-relaxed">
          Menjadi platform Agri-Tech no.1 di Indonesia dengan membangun
          ekosistem pertanian yang kuat dari hulu ke hilir, mulai dari
          pembiayaan, pengadaan barang, edukasi, sampai distribusi hasil panen
          dan memberikan kemudahan bagi petani untuk mendapatkan akses dengan
          dukungan teknologi untuk mensejahterahkan kehidupan petani di
          Indonesia kedepannya.
        </p>
      </div>
      <div className="w-full md:w-1/2 mx-auto">
        <h2 className="text-primary-500 text-2xl font-bold mt-4 p-4 text-center">
          Misi Eratani
        </h2>
        <ul className="text-lg leading-relaxed">
          {Misi.map((item, index) => (
            <li className="flex flex-row" key={index}>
              <span className="pt-2">
                <GoDotFill className="text-secondary-500" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default VisiMisi;
