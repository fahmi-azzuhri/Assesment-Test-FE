import React from "react";
import Jumbotron from "../Jumbotron";
import Ecosystem from "../Ecosystem";

function Home() {
  return (
    <div className="relative">
      <Jumbotron />
      <div className="p-7 mt-10 bg-white">
        <Ecosystem />
      </div>
    </div>
  );
}

export default Home;
