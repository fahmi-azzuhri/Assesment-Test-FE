import React from "react";
import Jumbotron from "../Section/Jumbotron";
import Ecosystem from "../Section/Ecosystem";
import FarmerCare from "../Section/FarmerCare";
import Testimonials from "../Section/Testimonials";
import OurMitra from "../Section/OurMitra";

function Home() {
  return (
    <div className="relative">
      <Jumbotron />
      <div className="p-7 mt-10 bg-white">
        <Ecosystem />
      </div>
      <div className="p-7 mt-10 bg-white">
        <FarmerCare />
      </div>
      <div className="p-7 mt-10 bg-white">
        <Testimonials />
      </div>
      <div className="p-7 mt-10 bg-white">
        <OurMitra />
      </div>
    </div>
  );
}

export default Home;
