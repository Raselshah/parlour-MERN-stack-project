import React from "react";

const Testimonial = () => {
  return (
    <div className="bg-base-100 py-12">
      <h2 className="text-4xl text-center font-bold">Testimonials</h2>

      <div className="cards mt-12">
        <div className="card w-96 bg-base-100">
          <div className="flex flex-row gap-x-3 items-center justify-start m-6">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
            <div className="div">
              <h4>Nash Patrik</h4>
              <p>CEO, Manpol</p>
            </div>
          </div>
          <div className="mx-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat{" "}
            </p>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
