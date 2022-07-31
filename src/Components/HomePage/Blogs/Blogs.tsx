import React from "react";
import Divider from "../../Hooks/Divider/Divider";

const Blogs = () => {
  return (
    <div className="bg-secondary pt-12">
      <div className="max-w-screen-2xl text-white mx-auto px-6 lg:px-12">
      <h2 className="text-4xl text-center">Latest Blog</h2>
      <Divider w={"w-36"} />
      <p className="font-design text-center text-3xl">
        We love to share our Story & Experience
      </p>

      <div className="flex flex-col md:flex-row justify-between">
        <div className="">
          <div className="flex gap-8">
            <div className="div">
              <h2>hooo</h2>
            </div>
            <div className="div">
              <h2>mnfjgk</h2>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex gap-8">
            <div className="div">
              <h2>hoosdfg</h2>
            </div>
            <div className="div">
              <h2>mnsdfafjgk</h2>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Blogs;
