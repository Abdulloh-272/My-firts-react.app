import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import {
  faGoogle,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const Section = () => {
  return (
    <section className=" pt-6">
      <div className="container max-auto px-16">
        <div className="flex items-center justify-center">
          <div className="">
            <div className="">
              <h2
                className="uppercase leading-tight max-w-[108px] text-8xl  font-bold
               text-white"
              >
                Just do it
              </h2>
              <p className="max-w-[345px] text-lg text-white mt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisi odio sit eu, ultrices duis platea blandit. Sagittis
                purus sit sagittis
              </p>

              <button
                className="text-white bg-gradient-to-r mt-10 from-[#A8E910] to-[#1C7227] py-3 px-10
              rounded-xl active:scale-[0.9] hover:opacity-80 "
              >
                Shop Now
              </button>
            </div>
            <div className="flex items-center mt-[228px] gap-3 justify-center w-64 p-2  bg-gradient-to-r from-[#0c3c6b1e] via-[#0a305e5f] to-[#081f4981]">
              <h6 className="text-lg text-white font-light">Social</h6>
              <FontAwesomeIcon
                className="bg-white rounded-full p-2 active:scale-[0.9] hover:opacity-70    "
                icon={faGoogle}
              />
              <FontAwesomeIcon
                className="bg-white rounded-full p-2 active:scale-[0.9] hover:opacity-70"
                icon={faTwitter}
              />
              <FontAwesomeIcon
                className="bg-white rounded-full p-2 active:scale-[0.9] hover:opacity-70"
                icon={faYoutube}
              />
              <FontAwesomeIcon
                className="bg-white rounded-full p-2 active:scale-[0.9] hover:opacity-70"
                icon={faInstagram}
              />
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="relative">
                <div className="absolute bg-gradient-to-r py-3 px-5 top-64 -z-10  left-56 flex flex-col justify-center w-96 h-36 rounded-2xl from-[#A8E910] from-5%  to-[#1C7227]">
                  <h4 className="text-xl font-bold text-white">
                    Nike Phantom <span className="font-light">Gt Elite</span>
                  </h4>
                  <h5 className="text-3xl font-bold text-white">$460.23</h5>
                </div>
                <img
                  className="hover:-rotate-6 ease-in transition-all"
                  src="../public/phantom.boots.png"
                  alt="boots"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <div className=" relative">
                <div className="bg-gradient-to-br to-[#368822] from-[#A8E910] w-36 h-28 rounded-t-3xl bottom-28 left-16 shadow-md absolute -z-10 shadow-[#368822]"></div>
                <img
                  className="hover:-rotate-6 ease-in transition-all"
                  src="../public/phantom.boots2.png"
                  alt="boots"
                />
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br to-[#368822] from-[#A8E910] w-36 h-28 rounded-tl-3xl bottom-[108px] left-20 shadow-md absolute -z-10 shadow-[#368822]"></div>

                <img
                  className="hover:-rotate-6 ease-in transition-all"
                  src="../public/mercurial.boots.png"
                  alt="boots"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
