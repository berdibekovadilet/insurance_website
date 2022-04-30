import React from "react";
import Villa from "../assets/villa.png";
import Residential from "../assets/residential.png";
import Industrial from "../assets/industrial.png";

const Variety = () => {
  return (
    <div className="md:my-50 my-40 md:px-20 px-10">
      <div>
        <h2 className="text-5xl md:text-6xl text-center">
          We Provide Variety of Insurance
        </h2>
        <p className="text-center text-xl text-gray-400 my-10">
          Here are the steps for choosing an insurance product
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        <div>
          <img src={Villa} alt="villa" />
          <div className="bg-[#EBB59E] p-5">
            <h3 className="py-5 text-2xl">Personal House</h3>
            <button className="bg-white w-[150px] py-3 hover:bg-black text-black hover:text-white transition-all duration-500 ease-in-out ">
              Learn More
            </button>
          </div>
        </div>
        <div>
          <img src={Residential} alt="residential" />
          <div className="bg-[#9BDFE5] p-5">
            <h3 className="py-5 text-2xl">Residential Building</h3>
            <button className="bg-white w-[150px] py-3 hover:bg-black text-black hover:text-white transition-all duration-500 ease-in-out ">
              Learn More
            </button>
          </div>
        </div>
        <div>
          <img src={Industrial} alt="industrial" />
          <div className="bg-[#607091] p-5">
            <h3 className="py-5 text-2xl">Industrial Building</h3>
            <button className="bg-white w-[150px] py-3 hover:bg-black text-black hover:text-white transition-all duration-500 ease-in-out ">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Variety;
