import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    name: "Wasroni",
    title: "Petani",
    message:
      "Harapan saya Eratani semakin meluas karena petani sangat amat dibantu dengan adanya Eratani. Terima kasih Eratani!",
    videoUrl: "https://www.youtube.com",

    imageUrl: "/img/Wasroni.png",
  },
  {
    id: 2,
    name: "Wasroni",
    title: "Petani",
    message:
      "Harapan saya Eratani semakin meluas karena petani sangat amat dibantu dengan adanya Eratani. Terima kasih Eratani!",
    videoUrl: "https://www.youtube.com",

    imageUrl: "/img/Wasroni.png",
  },
  {
    id: 3,
    name: "Wasroni",
    title: "Petani",
    message:
      "Harapan saya Eratani semakin meluas karena petani sangat amat dibantu dengan adanya Eratani. Terima kasih Eratani!",
    videoUrl: "https://www.youtube.com",
    imageUrl: "/img/Wasroni.png",
  },
];

const Testimonials = () => {
  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-green-500 text-2xl font-bold mb-6 text-center">
        Kata Mereka
      </h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop
        className="w-full"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col md:flex-row items-center bg-neutral-300 rounded-lg shadow-lg border border-gray-200 gap-3">
              {/* Foto Profil */}
              <div className="md:w-1/3 w-full flex justify-center md:justify-start mb-4 md:mb-0">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 w-full">
                <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{item.title}</p>
                <p className="text-sm text-gray-700 mb-4">{item.message}</p>
                <button
                  onClick={() => window.open(item.videoUrl, "_blank")}
                  className="flex items-end px-4 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 ml-auto"
                >
                  Putar Video
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
