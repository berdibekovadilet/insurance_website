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
        <div className="pb-10">
          <RiCheckboxCircleLine size={24} />
          <h3>Certificed platform</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            harum quos repellendus maxime dolor excepturi, voluptas obcaecati
            explicabo ab, totam rerum cum neque quasi qui fugit velit impedit ex
            voluptates!
          </p>
        </div>
        <div>
          <RiSecurePaymentLine size={24} />
          <h3>Certificed platform</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            harum quos repellendus maxime dolor excepturi, voluptas obcaecati
            explicabo ab, totam rerum cum neque quasi qui fugit velit impedit ex
            voluptates!
          </p>
        </div>
      </div>
      <div>
        <div className="pb-10">
          <Ri24HoursLine size={24} />
          <h3>Certificed platform</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            harum quos repellendus maxime dolor excepturi, voluptas obcaecati
            explicabo ab, totam rerum cum neque quasi qui fugit velit impedit ex
            voluptates!
          </p>
        </div>
        <div>
          <RiMoneyDollarCircleLine size={24} />
          <h3>Certificed platform</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            harum quos repellendus maxime dolor excepturi, voluptas obcaecati
            explicabo ab, totam rerum cum neque quasi qui fugit velit impedit ex
            voluptates!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
