import React from "react";
import face from '../../../image/Icon/Group 1372.png'

const Services = () => {
  return (
    <div className="bg-base-100 mx-auto">
      <h2 className="text-center text-4xl font-bold pt-12">
        Our Awesome <span className="text-primary">Services</span>{" "}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto p-12 mt-6">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body text-center">
            <img className="w-16 mx-auto" src={face} alt="" />
            <h2 className="">Anti Age Face Treatment</h2>
            <p className="text-red-500">$199</p>
            <div className="card-actions justify-center">
              <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body text-center">
            <img className="w-16 mx-auto" src={face} alt="" />
            <h2 className="">Anti Age Face Treatment</h2>
            <p className="text-red-500">$199</p>
            <div className="card-actions justify-center">
              <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body text-center">
            <img className="w-16 mx-auto" src={face} alt="" />
            <h2 className="">Anti Age Face Treatment</h2>
            <p className="text-red-500">$199</p>
            <div className="card-actions justify-center">
              <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
            </div>
          </div>
        </div>
      </div>

      <button className="btn btn-primary flex justify-center mx-auto w-26 px-6 mb-4">Explore more</button>
    </div>
  );
};

export default Services;
