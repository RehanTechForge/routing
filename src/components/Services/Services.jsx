import React, { useEffect } from "react";
import serviceOne from "../../assets/service1.png";
import serviceTwo from "../../assets/services2.png";
import serviceThree from "../../assets/services3.png";

const Services = () => {
  return (
    <>
      <div className=" py-10">
        <h3 className="text-center text-[#30957f] uppercase text-xl tracking-widest	">
          features
        </h3>
        <h1 className="tracking-widest mb-5 font-semibold text-center text-[#2e937a] text-[40px] capitalize">
          our features & services
        </h1>
        <div className="flex px-[50px] gap-20">
          <div className="bg-stone-50 rounded-[40px] px-5 mb-10">
            <img className="w-[300px]" src={`${serviceOne}`} alt="" />
            <h3 className="text-3xl mt-3 capitalize font-semibold text-center text-[#2e937a]">
              communications
            </h3>
            <p className="my-3 text-center">
              Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id
              nibh tortor id.
            </p>
            <div className="mx-auto w-[100px] mb-5">
              <button className="bg-orange-600 text-white rounded-full px-5 py-1 text-center">
                More
              </button>
            </div>
          </div>
          <div className="bg-stone-50 rounded-[40px] px-5 mb-10">
            <img className="w-[300px]" src={`${serviceThree}`} alt="" />
            <h3 className="text-3xl mt-3 capitalize font-semibold text-center text-[#2e937a]">
              Happy Customers
            </h3>
            <p className="my-3 text-center">
              Nisl purus in mollis nunc sed id semper. Rhoncus aenean vel elit
              scelerisque mauris.
            </p>
            <div className="mx-auto w-[100px] mb-5">
              <button className="bg-orange-600 text-white rounded-full px-5 py-1 text-center">
                More
              </button>
            </div>
          </div>
          <div className="bg-stone-50 rounded-[40px] px-5 mb-10">
            <img className="w-[300px]" src={`${serviceTwo}`} alt="" />
            <h3 className="text-3xl mt-3 capitalize font-semibold text-center text-[#2e937a]">
              Inspired Design
            </h3>
            <p className="my-3 text-center">
              Nunc consequat interdum varius sit amet mattis vulputate enim
              nulla. Risus feugiat.
            </p>
            <div className="mx-auto w-[100px] mb-5">
              <button className="bg-orange-600 text-white rounded-full px-5 py-1 text-center">
                More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
