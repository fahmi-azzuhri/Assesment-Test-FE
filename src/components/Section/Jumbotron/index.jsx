import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import jumbotron from "/img/jumbotron.png";
import { useLocation } from "react-router-dom";
import farming from "/img/farming.png";

function Jumbotron() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";

  const slides = [
    {
      title: "#SelaluAdaUntukPetani",
      description: `Eratani adalah perusahaan startup Agri-tech yang fokus membangun 
      sebuah ekosistem pertanian yang kuat dengan mendigitalisasi proses 
      pertanian dari hulu hingga ke hilir. Eratani berupaya memberikan 
      kemudahan akses kepada petani melalui teknologi yang kami miliki 
      untuk meningkatkan produktivitas dan kesejahteraan ekosistem pertanian.`,
    },
    {
      title: "#SelaluAdaUntukPetani Slide 2",
      description: `Eratani adalah perusahaan startup Agri-tech yang fokus membangun 
      sebuah ekosistem pertanian yang kuat dengan mendigitalisasi proses 
      pertanian dari hulu hingga ke hilir. Eratani berupaya memberikan 
      kemudahan akses kepada petani melalui teknologi yang kami miliki 
      untuk meningkatkan produktivitas dan kesejahteraan ekosistem pertanian.`,
    },
  ];

  return (
    <div
      className={`relative w-full overflow-hidden ${!isHome ? "" : "h-screen"}`}
    >
      {isHome ? (
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                src={jumbotron}
                alt="Jumbotron"
                className="w-full h-full object-cover lg:w-full lg:h-full"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white px-4 py-6 sm:py-8 md:py-10 text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium my-3 sm:my-5">
                  {slide.title}
                </h1>
                <p className="max-w-xs sm:max-w-md md:max-w-lg leading-relaxed text-sm sm:text-base md:text-lg">
                  {slide.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="relative w-full overflow-hidden">
          <img
            src={farming}
            alt="Jumbotron"
            className="w-full object-fill lg:w-full lg:h-[400px]"
          />
        </div>
      )}
    </div>
  );
}

export default Jumbotron;
