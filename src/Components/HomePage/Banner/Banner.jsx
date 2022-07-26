import React from "react";
import bannerPhoto from "../../../image/Image/banner-photo.png";

const Banner = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-12">
      <div className="mx-auto z-[-0] p-4">
        <h1 className="text-5xl font-bold">BEAUTY SALON</h1>
        <h1 className="text-5xl font-bold">FOR EVERY WOMEN</h1>
        <p className="py-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br /> Purus commodo ipsum duis laoreet maecenas. Feugiat{" "}
        </p>
        <button className="btn btn-primary">Get an Appointment</button>
      </div>

      <div className="">
        <img src={bannerPhoto} className="max-w-sm mx-auto rounded-lg shadow-2xl z-40" alt="" />
      </div>
    </div>
  );
};

export default Banner;
