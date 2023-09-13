"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
const Content = () => {
  const [selectedTitle, setSelectedTitle] = useState("");
  const listFoto = [
    {
      img: "/img/kukus1.jpeg",
    },
    {
      img: "/img/kukus2.jpeg",
    },
    {
      img: "/img/kukus3.jpeg",
    },
    {
      img: "/img/kukus4.jpeg",
    },
    {
      img: "/img/kukus5.jpeg",
    },
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex  flex-col text-center w-full mb-20">
          <h1 className=" text-1xl font-bold title-font mb-4 text-yellow-600">
            OUR SIGNATURE BAKPIA KUKUS
          </h1>
        </div>
        <div className="border-b pb-5 border-gray-200 dark:border-gray-700">
          <nav
            className="-mb-0.5 flex justify-center  space-x-6"
            aria-label="Tabs"
            role="tablist"
          >
            <button
              onClick={() => {
                setSelectedTitle("Bakpia Kukus");
              }}
              type="button"
              className={`font-bold px-3 py-2 rounded-full items-center gap-2 text-xs  ${
                selectedTitle == "Bakpia Kukus"
                  ? "bg-amber-900 text-amber-100"
                  : "bg-amber-100 text-amber-900"
              }  active`}
              id="horizontal-alignment-item-1"
              data-hs-tab="#horizontal-alignment-1"
              aria-controls="horizontal-alignment-1"
              role="tab"
            >
              Bakpia Kukus
            </button>
            <button
              onClick={() => {
                setSelectedTitle("Bolu Kukus");
              }}
              type="button"
              className={`font-bold px-3 py-2 rounded-full items-center gap-2 text-xs ${
                selectedTitle == "Bolu Kukus"
                  ? "bg-amber-900 text-amber-100"
                  : "bg-amber-100 text-amber-900"
              }`}
              id="horizontal-alignment-item-2"
              data-hs-tab="#horizontal-alignment-2"
              aria-controls="horizontal-alignment-2"
              role="tab"
            >
              Bolu Kukus
            </button>
            <button
              onClick={() => {
                setSelectedTitle("Paper Bag");
              }}
              type="button"
              className={`font-bold px-3 py-2 rounded-full items-center gap-2 text-xs ${
                selectedTitle == "Paper Bag"
                  ? "bg-amber-900 text-amber-100"
                  : "bg-amber-100 text-amber-900"
              }`}
              id="horizontal-alignment-item-3"
              data-hs-tab="#horizontal-alignment-3"
              aria-controls="horizontal-alignment-3"
              role="tab"
            >
              Paper Bag
            </button>
          </nav>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <div className="">
            {listFoto.map((data: any, index) => (
              <SwiperSlide 
              key={index+1}
              className="card hover:shadow flex ">
                <Image width={720} height={400} src={data.img} alt="" />
              </SwiperSlide>
            ))}
          </div>
          {/* <SwiperSlide>
            <div className="card hover:shadow ">
              <Image width={720} height={400} src="/img/kukus2.jpeg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card hover:shadow">
              <Image width={720} height={400} src="/img/kukus3.jpeg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card hover:shadow">
              <Image width={720} height={400} src="/img/kukus4.jpeg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card hover:shadow">
              <Image width={720} height={400} src="/img/kukus5.jpeg" alt="" />
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </section>
  );
};

export default Content;
