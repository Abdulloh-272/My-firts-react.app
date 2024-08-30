import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export const Header1 = () => {
  return (
    <div className="container mx-auto px-16 ">
      <nav className="flex justify-between items-center py-8 px-8">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-bold text-white uppercase">Nike</h2>
          <img src="../public/logo.svg" alt="" />
        </div>

        <nav className="flex gap-10 justify-center">
          <a className="font-light text-white  hover:text-green-400" href="">
            Home
          </a>
          <a className="font-light text-white hover:text-green-400" href="">
            Catalog
          </a>
          <a className="font-light text-white hover:text-green-400" href="">
            About Us
          </a>
          <a className="font-light text-white hover:text-green-400" href="">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="bg-transparent relative py-3 px-2 w-48 border-2 border-white rounded-xl">
            <form action="#">
              <input
                className=" placeholder:text-white pl-7 w-full text-white  outline-none bg-transparent"
                placeholder="search"
                type="search"
              />
            </form>
            <div className="absolute top-[12px] pl-1">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="x"
                color="white"
              />
            </div>
          </div>
          <FontAwesomeIcon
            className="text-2xl"
            icon={faCartShopping}
            size=""
            color="white"
          />
        </div>
      </nav>
    </div>
  );
};
