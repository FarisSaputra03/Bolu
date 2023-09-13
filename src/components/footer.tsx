import React from "react";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto  md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="flex w-full pb-10 justify-between">
          <div className=" w-full mb-5  divide-y gap-y-5  divide-dashed md:pl-20 text-center">
            <Image
              className="mb-3"
              width={116}
              height={48}
              src="/img/jogja.jpeg"
              alt=""
            />
            <hr className="w-full" />
          </div>
          <Image
            className="pb-6 hidden space-x-8 sm:flex"
            width={200}
            height={48}
            src="/img/tugu.jpeg"
            alt=""
          />
        </div>
        <div className="w-64 md:mx-0 mx-auto text-center md:text-left">
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <nav className="list-none mb-10">
              <li>
                <a className="flex items-center  text-amber-900 font-bold gap-1">
                  <FaLocationDot size="2rem" />
                  PT Agrinesia Raya Sleman - 55282 Indonesia
                </a>
              </li>
              <li>
                <a className="flex items-center gap-1  text-amber-900">
                  <BsFillTelephoneFill />
                  0811 1500 526
                </a>
              </li>
              <li>
                <a className="flex items-center gap-1  text-amber-900">
                  <FiMail />
                  consumer.care@bakpiakukustugu.co.id
                </a>
              </li>
            </nav>
          </div>
        </div>
        <div className="flex-grow pt-10 flex  justify-around ">
          <nav className="list-none mb-10">
            <li>
              <a className="text-gray-600 hover:text-gray-800">Tentang</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Toko</a>
            </li>
          </nav>
          <nav className="list-none mb-10">
            <li>
              <a className="text-gray-600 hover:text-gray-800">Produk</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Promo</a>
            </li>
          </nav>
          <nav className="list-none mb-10">
            <li>
              <a className="text-gray-600 hover:text-gray-800">Artikel</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">FAQ</a>
            </li>
          </nav>
          <div className="">
            <div className="flex pt-5 space-x-4 text-amber-800 justify-center my-0">
              <FiFacebook size="2rem" /> <BsInstagram size="2rem" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container flex mx-auto min-w-[70%] justify-evenly py-4 px-8  ">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            Copyright 2023 © PT Agrinesia Raya
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <p className="text-gray-500 text-xs text-center sm:text-left">
              Kebijakan Privasi · Syarat dan Kondisi
            </p>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
