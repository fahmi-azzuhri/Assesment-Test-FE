import React from "react";
import news from "/img/news_new.png";
import news2 from "/img/news_new2.png";
import news3 from "/img/news_new3.png";
function RelatedArticle() {
  return (
    <div className="w-full flex justify-evenly">
      <div className="min-w-[200px] rounded-lg">
        <img
          src={news}
          alt="Related article"
          className="w-full h-32 object-cover rounded-lg"
        />
        <h3 className="font-semibold mt-2">Article Title 1</h3>
        <button className="text-yellow-600 mt-2">Baca Selengkapnya</button>
      </div>
      <div className="min-w-[200px] rounded-lg">
        <img
          src={news2}
          alt="Related article"
          className="w-full h-32 object-cover rounded-lg"
        />
        <h3 className="font-semibold mt-2">Article Title 2</h3>
        <button className="text-yellow-600 mt-2">Baca Selengkapnya</button>
      </div>
      <div className="min-w-[200px] rounded-lg">
        <img
          src={news3}
          alt="Related article"
          className="w-full h-32 object-cover rounded-lg"
        />
        <h3 className="font-semibold mt-2">Article Title 3</h3>
        <button className="text-yellow-600 mt-2">Baca Selengkapnya</button>
      </div>
    </div>
  );
}

export default RelatedArticle;
