import React from "react";
import NewsWrap from "./NewsWrap";
import news from "/img/news_new.png";
import news2 from "/img/news_new2.png";
import news3 from "/img/news_new3.png";
import popular from "/img/popular_news.png";

function Show() {
  const newsData = [
    {
      img: news,
      title:
        "Si Glowing, Bawang Merah Ramah Lingkungan yang Wanginya Menyengat",
      date: "28/10/2021",
    },
    {
      img: news2,
      title:
        "Panen Cabai Rawit di Temanggung Melimpah, Kebutuhan Idul Adha Aman",
      date: "28/10/2021",
    },
    {
      img: news3,
      title: "Tingkatkan Produktivitas Kapas dengan Teknologi Sambung Pucuk",
      date: "28/10/2021",
    },
    {
      img: popular,
      title:
        "Lebih Menguntungkan, Petani Cirebon Pilih Tanam Bawang Merah Ketimbang Padi",
      date: "29/10/2021",
    },
    {
      img: popular,
      title: "Mengelola Tanah Berkelanjutan untuk Masa Depan",
      date: "30/10/2021",
    },
    {
      img: popular,
      title: "Komunitas Petani Muda Bangkitkan Semangat Agribisnis",
      date: "31/10/2021",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 px-12">
      {newsData.map((newsItem, index) => (
        <NewsWrap
          key={index}
          img={newsItem.img}
          title={newsItem.title}
          date={newsItem.date}
        />
      ))}
    </div>
  );
}

export default Show;
