import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaTiktok,
  FaGlobe,
} from "react-icons/fa";
import logo_eratani_white from "/img/logo_eratani_white.png";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-green-600 text-white py-10">
      <div className="container mx-auto flex flex-wrap justify-between items-start px-4 lg:px-0">
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
          <img src={logo_eratani_white} className="w-1/3 mb-4" alt="" />
          <address className="text-sm leading-relaxed">
            Jl. Casablanca Raya No. 88, Rdt. Menteng Dalam, Kec. Tebet, Gedung
            Pakuwon Tower Lantai 16, Jakarta Selatan, DKI Jakarta 12870,
            Indonesia
          </address>
          <p className="text-sm mt-4">
            Email:{" "}
            <a href="mailto:cs.eratani@eratani.co.id" className="underline">
              cs.eratani@eratani.co.id
            </a>
          </p>
          <p className="text-sm">Telepon: +62 813 9309 3277</p>
        </div>
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
          <h2 className="text-lg font-semibold mb-4">Menu</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#team" className="hover:underline">
                Tim Kami
              </a>
            </li>
            <li>
              <a href="#media" className="hover:underline">
                Mitra Eksternal
              </a>
            </li>
            <li>
              <a href="#price" className="hover:underline">
                Topik & Info Pertanian
              </a>
            </li>
            <li>
              <a href="#career" className="hover:underline">
                Karir
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col items-start lg:items-end mb-4">
          <div className="flex space-x-2 items-center">
            <button className="flex items-center space-x-1 border-b-2 border-yellow-400">
              <FaGlobe />
              <span>ID</span>
            </button>
            <button className="flex items-center">
              <span>EN</span>
            </button>
            <div className="bg-yellow-400 rounded-full p-2 ml-4 flex items-center">
              <button aria-label="Scroll to Top">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end gap-3 text-lg">
          <FaTiktok />
          <FaInstagram />
          <FaYoutube />
          <FaLinkedinIn />
          <FaFacebookF />
          <FaWhatsapp />
        </div>
      </div>
      <div className="mt-10 text-center text-sm">
        <p>&copy; {year} PT EraTani Teknologi Nusantara</p>
      </div>
    </footer>
  );
};

export default Footer;
