import React from "react";
import Building1 from "../assets/building-1.png";
import Building2 from "../assets/building-2.png";
import Building3 from "../assets/building-3.png";

const Hero = () => {
  return (
    <main>
      <div className="max-w-[800px] m-auto mt-[150px] px-5">
        <h1 className="text-5xl md:text-7xl text-center">
          Protect Your Property at All Cost
        </h1>
        <p className=" text-gray-500 my-7 text-center">
          We are an insurance company that offers protection and guarantees for
          your amazing property
        </p>
        <div className="flex justify-center gap-10">
          <button className="bg-blue-700 w-[150px] py-3 hover:bg-white hover:text-black transition-all duration-500 ease-in-out ">
            Get Started
          </button>
          <button className="border border-gray-500 w-[150px] py-3 hover:bg-white hover:text-black transition-all duration-500 ease-in-out">
            Contact Us
          </button>
        </div>
      </div>
      <div className="w-full m-auto gap-4 flex justify-around md:mt-20 mt-10 md:px-20 px-10">
        <img
          src={Building1}
          alt="building1"
          className="w-1/3 fill transition transform hover:-translate-y-5 motion-reduce:transition-none motion-reduce:hover:transform-none"
        />
        <img
          src={Building2}
          alt="building1"
          className="w-1/3 fill transition transform hover:-translate-y-5 motion-reduce:transition-none motion-reduce:hover:transform-none"
        />
        <img
          src={Building3}
          alt="building1"
          className="w-1/3 fill transition transform hover:-translate-y-5 motion-reduce:transition-none motion-reduce:hover:transform-none"
        />
      </div>
    </main>
  );
};

export default Hero;
