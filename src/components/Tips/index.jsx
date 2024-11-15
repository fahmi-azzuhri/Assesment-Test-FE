import React from "react";
import { useNavigate } from "react-router-dom";
import JumboWrap from "../Section/Jumbotron/JumboWrap";
import farming_tips from "/img/eratani_4.png";
import NewsWrap from "./NewsWrap";
import popular from "/img/popular_news.png";
import news from "/img/news_new.png";
import news2 from "/img/news_new2.png";
import news3 from "/img/news_new3.png";

function Tips() {
  const navigate = useNavigate();
  const handleDetails = () => {
    navigate("/tips/details");
  };
  const handleShowAllNews = () => {
    navigate("/tips/show-all");
  };

  return (
    <div>
      <JumboWrap img={farming_tips} />
      <div className="container mx-auto my-8 px-4 md:px-0">
        <div className="flex justify-center mb-5">
          <h2 className="text-primary-500 text-2xl font-bold text-center">
            Tips & Berita Pertanian
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Berita Populer</h2>
            <div className="relative">
              <img
                src={popular}
                alt="Popular News"
                className="w-full h-64 object-cover rounded cursor-pointer"
                onClick={handleDetails}
              />
              <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                BERITA
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold">
                  Lebih Menguntungkan, Petani Cirebon Pilih Tanam Bawang Merah
                  Ketimbang Padi
                </h3>
                <p className="text-sm">Oleh Muhammad Gilang 28 Oktober 2021</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Berita Terbaru</h2>
            <div className="space-y-4">
              <NewsWrap
                img={news}
                title="Si Glowing, Bawang Merah Ramah Lingkungan yang Wanginya Menyengat"
                date="28/10/2021"
              />
              <NewsWrap
                img={news2}
                title="Panen Cabai Rawit di Temanggung Melimpah, Kebutuhan Idul Adha Aman"
                date="28/10/2021"
              />
              <NewsWrap
                img={news3}
                title="Tingkatkan Produktivitas Kapas dengan Teknologi Sambung Pucuk"
                date="28/10/2021"
              />
            </div>

            <div className="flex justify-center mb-5">
              <button
                onClick={handleShowAllNews}
                className="mt-4 px-4 py-2 bg-secondary-500 text-white rounded-lg font-semibold"
              >
                Lihat Semua
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tips;
