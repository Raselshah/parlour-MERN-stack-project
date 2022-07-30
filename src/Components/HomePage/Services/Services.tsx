import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Products from "../../../types/model";
const axios = require("axios").default;

const Services = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const navigate = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get("Data.json");
      setProducts(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>loading....</p>;
  }
  const handleBooking = (id:number):void => {
    navigate(`/booking/book/${id}`)
  }
  return (
    <div className="bg-base-100 mx-auto pb-6">
      <h2 className="text-center text-4xl font-bold pt-12">
        Our Awesome <span className="text-primary">Services</span>{" "}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto p-12 mt-6">
        {products.slice(0,6).map((product) => (
          <>
            <div
             data-aos="fade-up"
             data-aos-anchor-placement="center-center"
             data-aos-duration="2000"
             className="card bg-base-100 shadow-lg hover:drop-shadow-2xl hover:shadow-red-500/60 cursor-pointer"
             >
              <div
              onClick={() => handleBooking(product.userId)}
               className="card-body text-center">
                <img className="w-16 mx-auto" src={product.photo} alt="" />
                <h2 className="">{product.name}</h2>
                <p className="text-red-500">{product.price}</p>
                <div className="card-actions justify-center">
                  <p>
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>

      <button className="btn btn-primary flex justify-center mx-auto w-26 px-6 mb-4">
        Explore more
      </button>
    </div>
  );
};

export default Services;
