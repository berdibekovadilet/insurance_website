import React from "react";
import Clients from "../assets/clients.png";
import { RiUserLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="md:my-50 my-40 md:px-20 px-10 grid md:grid-cols-2 gap-10 ">
      <div className=" max-w-xl">
        <h2 className="text-4xl md:text-5xl pb-5">
          What Our Belover Customers Say
        </h2>
        <div className="bg-gray-700 p-10 grid gap-5 text-gray-500">
          <div>
            <p className="text-sm">
              Hey listen, you know, if we're all bored over here, wouldn't the
              common denominator be you? It's like the N word and the C word had
              a baby, and it was raised by all the bad words for Jews. Your
              failures are your own, old man!
            </p>
            <div className="flex mt-5">
              <RiUserLine size={20} />
              <span className="px-3">Johny Sins</span>
              <span>CEO of Brazzers</span>
            </div>
          </div>
          <hr />
          <div>
            <p className="text-sm">
              We all wanna die, we're meeseeks! This is it, Morty! It's full
              circle from the pilot! Full circle! Get off the high road Summer.
            </p>
            <div className="flex mt-5">
              <RiUserLine size={20} />
              <span className="px-3">Rick Sanchez</span>
              <span>Scientist</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={Clients} alt="clients" />
      </div>
    </div>
  );
};

export default Footer;
