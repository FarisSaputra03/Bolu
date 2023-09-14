"use client";
import React, { useState } from "react";
import Image from "next/image";
const Page = () => {
  const [selectedTitle, setSelectedTitle] = useState("Official Store");
  const listToko = [
    {
      img: "/img/raya_solo.jpg",
      title: "Store Raya Solo",
      jln: "Jl. Solo KM.9 No.3, Karangploso, Maguwoharjo, Depok, Sleman, Yogyakarta",
      tel: "+628111500625",
      kerja: "6 AM - 10 PM",
      pekan: "6 AM - 10 PM",
      nasional: "6 AM - 10 PM",
    },
    {
      img: "/img/kaliurnag.jpg",
      title: "Store Kaliurang",
      jln: "Jl. Kaliurang Km 5,5 No 10A Manggung, Caturtunggal, Depok, Sleman, Yogyakarta.",
      tel: " +62211500625",
      kerja: "6 AM - 10 PM",
      pekan: "5.45 AM - 10 PM",
      nasional: "6 AM - 10 PM",
    },
    {
      img: "/img/st_tugu.jpg",
      title: "Store Stasiun Tugu",
      jln: "Stasiun Tugu Yogyakarta (Pintu Selatan), Jl. Pringgokusuman, Gedong Tengen, Sosromenduran Yogyakarta.",
      tel: "+621500625",
      kerja: "6 AM - 9 PM",
      pekan: "6 AM - 9 PM",
      nasional: "6 AM - 9 PM",
    },
    {
      img: "/img/store_lempuyangan.jpg",
      title: "Store Stasiun Lempuyangan",
      jln: "Jl. Lempuyangan, Bausasran, Danurejan, Yogyakarta.",
      tel: " +628111500625",
      kerja: "6 AM - 10 PM",
      pekan: "6 AM - 10 PM",
      nasional: "6 AM - 10 PM",
    },
    {
      img: "/img/store_yia.jpg",
      title: "Store YIA",
      jln: "Bandara Yogyakarta International Airport , Pintu zona kedatangan Kulonprogo Yogyakarta.",
      tel: " +628111500625",
      kerja: "24 Hours",
      pekan: "24 Hours",
      nasional: "24 Hours",
    },
    {
      img: "/img/store_resta.jpg",
      title: "Resta PENDOPO 456 (Rest Area) A&B",
      jln: "Jl. Tol Bawen - Salatiga, Baok, Ujung-Ujung, Kec. Pabelan, Semarang, Jawa Tengah 50771.",
      tel: " +6282138209955",
      kerja: "24 Hours",
      pekan: "24 Hours",
      nasional: "24 Hours",
    },
    {
      img: "/img/yia.jpg",
      title: "Bandara YIA Selasar",
      jln: "Bandara Yogyakarta International Airport , Pintu zona kedatangan Kulonprogo Yogyakarta.",
      tel: " +62211500625",
      kerja: "06:00-22:00",
      pekan: "06:00-22:00",
      nasional: "06:00-22:00",
    },
    {
      img: "/img/borobudur2_thumb.jpg",
      title: "Borobudur",
      jln: "Jl. Mayor Kusen Pabelan KM 2, Kelurahan Pabelan, Kecamatan Mungkid, Kab. Magelang, Jawa Tengah.",
      tel: " +628111500625",
      kerja: "06:00-22:00",
      pekan: "06:00-22:00",
      nasional: "06:00-17:00",
    },
    {
      img: "/img/wonosari_thumb.jpg",
      title: "Wonosari",
      jln: "Jl. Wonosari KM 6, Wiyoro Lor RT 003, Kelurahan Baturetno, Kecamatan Banguntapan, Bantul.",
      tel: "+628111500625",
      kerja: "06:00-22:00",
      pekan: "06:00-22:00",
      nasional: "06:00-17:00",
    },
    {
      img: "/img/wonosari_thumb.jpg",
      title: "Gondomanan",
      jln: "Jl. Mayor Suryotomo 25, Kelurahan Ngupasan, Kemantren, Kecamatan Gondomanan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55121.",
      tel: "+628111500625",
      kerja: "06:00-22:00",
      pekan: "06:00-22:00",
      nasional: "06:00-17:00",
    },
  ];
  return (
    <div>
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="text-[30px] font-bold title-font py-5 text-amber-900">
              Store Bakpia Tugu
            </h1>
          </div>
          <Image
            className="rounded-lg"
            width={1000}
            height={1000}
            src="/img/bakpia tugu.jpeg"
            alt=""
          />
        </div>
      </div>
      <div className="">
        <nav
          className="flex justify-center space-x-6"
          aria-label="Tabs"
          role="tablist"
        >
          <button
            onClick={() => {
              setSelectedTitle("Official Store");
            }}
            type="button"
            className={`font-bold px-3 py-2 rounded-full items-center gap-2 text-sm ${
              selectedTitle == "Official Store"
                ? "bg-amber-900 text-amber-100"
                : "bg-amber-100 text-amber-900"
            }  active`}
            id="horizontal-alignment-item-1"
            data-hs-tab="#horizontal-alignment-1"
            aria-controls="horizontal-alignment-1"
            role="tab"
          >
            Official Store
          </button>
          <button
            onClick={() => {
              setSelectedTitle("Store Mitra");
            }}
            type="button"
            className={`font-bold px-3 py-2 rounded-full items-center gap-2 text-sm ${
              selectedTitle == "Store Mitra"
                ? "bg-amber-900 text-amber-100"
                : "bg-amber-100 text-amber-900"
            }`}
            id="horizontal-alignment-item-2"
            data-hs-tab="#horizontal-alignment-2"
            aria-controls="horizontal-alignment-2"
            role="tab"
          >
            Store Mitra
          </button>
        </nav>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 p-3">
        {listToko.map((data: any, index) => (
          <div className="py-5" key={index + 1}>
            <div className="hidden space-x-8 sm:flex">
              <div className="p-4">
                <div className="h-full flex sm:text-left">
                  <Image
                    width={200}
                    height={200}
                    src={data.img}
                    alt=""
                  />
                  <div className="flex-grow sm:pl-4">
                    <h1 className="text-amber-900 text-sm font-semibold">
                      {data.title}
                    </h1>
                    <h2 className="text-sm py-2 text-black">
                      {data.jln}
                    </h2>
                    <div className="flex">
                      <p className="mb-2 text-sm font-semibold">Tel:</p>
                      <p className="text-sm">{data.tel}</p>
                    </div>
                    <h3 className="text-sm font-semibold">Jam Operasional:</h3>
                    <p className="text-sm">Hari Kerja:{data.kerja}</p>
                    <p className="text-sm">Akhir Pekan:{data.pekan}</p>
                    <p className="text-sm">Libur Nasional:{data.nasional}</p>
                    <div>
                      <h1 className="text-amber-700 text-sm">Klik disini untuk melihat di Google Map</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 p-3">
        {listToko.map((data: any, index) => (
          <div className="py-5" key={index + 1}>
            <div className="sm:hidden">
              <div className="p-4">
                <div className="h-full flex-wrap flex sm:text-left">
                  <Image
                    width={200}
                    height={200}
                    src={data.img}
                    alt=""
                  />
                  <div className="flex-grow sm:pl-4">
                    <h1 className="text-amber-900 text-sm font-semibold">
                      {data.title}
                    </h1>
                    <h2 className="text-sm py-2 text-black">
                      {data.jln}
                    </h2>
                    <div className="flex">
                      <p className="mb-2 text-sm font-semibold">Tel:</p>
                      <p className="text-sm">{data.tel}</p>
                    </div>
                    <h3 className="text-sm font-semibold">Jam Operasional:</h3>
                    <p className="text-sm">Hari Kerja:{data.kerja}</p>
                    <p className="text-sm">Akhir Pekan:{data.pekan}</p>
                    <p className="text-sm">Libur Nasional:{data.nasional}</p>
                    <div>
                      <h1 className="text-amber-700 text-sm">Klik disini untuk melihat di Google Map</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
