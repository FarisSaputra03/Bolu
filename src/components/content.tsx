"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
const Content = () => {
  const [selectedTitle, setSelectedTitle] = useState("Bakpia Kukus");
  const [bakpiaKukus, setBakpiaKukus] = useState<boolean>(false);
  const [boluKukus, setBoluKukus] = useState<boolean>(false);
  const listBolu = [
    {
      img: "/img/bolu kukus.png",
      title: "Ampyang Kacang - Regular",
    },
    {
      img: "/img/bolu kukus2.png",
      title: "Black Forest - Regular Pack",
    },
    {
      img: "/img/bolu kukus3.png",
      title: "Coklat - Regular Pack",
    },
    {
      img: "/img/bolu kukus4.png",
      title: "Gambang - Regular Pack",
    },
    {
      img: "/img/bolu kukus5.png",
      title: "Ketan Pandan - Regular Pack",
    },
  ];
  const listFoto = [
    {
      img: "/img/kukus1.jpeg",
      title: "Mini Pack Brownis Coklat",
      href: "/beli",
    },
    {
      img: "/img/kukus2.jpeg",
      title: "Travel Pack Brownis Coklat",
      href: "/beli",
    },
    {
      img: "/img/kukus3.jpeg",
      title: "Travel Klepon Pack",
      href: "/beli",
    },
    {
      img: "/img/kukus4.jpeg",
      title: "Travel Kacang Hijau Pack",
      href: "/beli",
    },
    {
      img: "/img/kukus5.jpeg",
      title: "Travel Originla Pack",
      href: "/beli",
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
                setBakpiaKukus(false);
                setBoluKukus(false);
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
                setBoluKukus(true);
                setBakpiaKukus(true);
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
        {bakpiaKukus == false ? (
          <div>
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
              <div>
                {listFoto.map((data: any, index) => (
                  
                  <SwiperSlide
                    key={index + 1}
                    className="card hover:shadow flex "
                  >
                    <Image
                      width={720}
                      height={400}
                      src={data.img}
                      alt="Bolu Kukus"
                    />
                    <div className="flex justify-center">
                      <button 
                      onClick={() => {
                        window.location.href = data.href
                      }}
                      className="font-bold text-amber-900 py-2 px-5">
                        {data.title}
                      </button>
                    </div>
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
        ) : null}
      </div>
      {bakpiaKukus !== null && boluKukus == true ? (
        <div>
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
            <div>
              {listBolu.map((data: any, index) => (
                <SwiperSlide
                  key={index + 1}
                  className="card hover:shadow flex "
                >
                  <Image width={720} height={400} src={data.img} alt="bakpia" />
                  <div className="flex justify-center">
                    <h1 className="font-bold text-amber-900 py-2 px-5">
                      {data.title}
                    </h1>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      ) : null}
    </section>
  );
};

export default Content;
