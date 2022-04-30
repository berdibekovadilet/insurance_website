import React from "react";
import { Disclosure } from "@headlessui/react";
import Contruction from "../assets/contruction.png";
import { RiArrowDownSLine } from "react-icons/ri";

const Plan = () => {
  return (
    <div className="md:my-50 my-40 md:px-20 px-10 grid md:grid-cols-2 gap-10">
      <div>
        <img src={Contruction} alt="Contruction" />
      </div>
      <div className=" max-w-xl">
        <h2 className="text-5xl md:text-6xl pb-5">
          Plan For The Safety of Your Property
        </h2>
        <div className="py-5 border-b border-gray-700">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="w-full flex justify-between">
                  <h3 className=" text-xl">Property All Risk</h3>
                  <RiArrowDownSLine
                    size={26}
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } transition ease-in-out duration-300`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel>
                  <p className="pt-5">
                    Get off the high road Summer. We all got pink eye because
                    you wouldn't stop texting on the toilet. Holy crap, Morty,
                    run! Run for your life, Morty, run!
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="py-5 border-b border-gray-700">
          <Disclosure className="pt-10">
            {({ open }) => (
              <>
                <Disclosure.Button className="w-full flex justify-between">
                  <h3 className=" text-xl">Earthquake</h3>
                  <RiArrowDownSLine
                    size={26}
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } transition ease-in-out duration-300`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel>
                  <p className="pt-5">
                    Get off the high road Summer. We all got pink eye because
                    you wouldn't stop texting on the toilet. Holy crap, Morty,
                    run! Run for your life, Morty, run!
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="py-5 border-b border-gray-700">
          <Disclosure className="pt-10">
            {({ open }) => (
              <>
                <Disclosure.Button className="w-full flex justify-between">
                  <h3 className=" text-xl">Wildfire</h3>
                  <RiArrowDownSLine
                    size={26}
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } transition ease-in-out duration-300`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel>
                  <p className="pt-5">
                    Get off the high road Summer. We all got pink eye because
                    you wouldn't stop texting on the toilet. Holy crap, Morty,
                    run! Run for your life, Morty, run!
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default Plan;
