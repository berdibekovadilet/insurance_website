import React from "react";
import Arrow from "../assets/arrow.svg";
import {
  RiCheckboxCircleLine,
  Ri24HoursLine,
  RiSecurePaymentLine,
  RiMoneyDollarCircleLine,
} from "react-icons/ri";

const Offer = () => {
  return (
    <div className="w-full grid md:grid-cols-[1.5fr_1fr_1fr] gap-10 md:mt-20 mt-10 md:px-20 px-10">
      <div className="grid gap-y-10">
        <h2 className="text-5xl md:text-6xl">
          We're Ready To Protect Your Props.
        </h2>
        <img src={Arrow} alt="arrow" />
      </div>
      <div>
        <div className="min-h-[220px]">
          <RiCheckboxCircleLine size={24} />
          <h3 className="py-5 text-2xl">Certified platform</h3>
          <p className=" text-sm text-gray-400">
            Then it's time to get your beak wet tonight playa! Awww, it's you
            guys! You're missing the point Morty. Why would he drive a smaller
            toaster with wheels? 
          </p>
        </div>
        <div className="min-h-[220px]">
          <RiSecurePaymentLine size={24} />
          <h3 className="py-5 text-2xl">Customer support</h3>
          <p className=" text-sm text-gray-400">
            Nice, Mrs Pancakes. Real nice. Whose kidneys are these? Full
            disclosure, Morty - it's not. Temporary superintelligence is just a
            side effect of the Megaseeds dissolving in your rectal cavity. It's
            called carpe diem Morty. Look it up.
          </p>
        </div>
      </div>
      <div>
        <div className="min-h-[220px]">
          <Ri24HoursLine size={24} />
          <h3 className="py-5 text-2xl">High Security</h3>
          <p className=" text-sm text-gray-400">
            You are the master of your universe, and yet you are dripping with
            rat blood and feces. It's fine, everythings is fine. theres an
            infinite number of realities Morty.
          </p>
        </div>
        <div className="min-h-[220px]">
          <RiMoneyDollarCircleLine size={24} />
          <h3 className="py-5 text-2xl">Friedly Budget</h3>
          <p className=" text-sm text-gray-400">
            Rick, the only connection between your unquestionable intelligence
            and the sickness destroying your family is that everyone in your
            family,
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
