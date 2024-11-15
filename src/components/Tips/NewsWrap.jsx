import React from "react";

function NewsWrap({ img, title, date }) {
  return (
    <div className="flex items-center space-x-4">
      <img
        src={img}
        alt="Latest News"
        className="w-24 h-16 object-cover rounded"
      />
      <div>
        <h3 className="text-md font-medium">{title}</h3>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
  );
}

export default NewsWrap;
