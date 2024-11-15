import React from "react";

function JumboWrap({ img }) {
  return (
    <div className="relative w-full overflow-hidden">
      <img
        src={img}
        alt="Jumbotron"
        className="w-full object-fill lg:w-full lg:h-[400px]"
      />
    </div>
  );
}

export default JumboWrap;
