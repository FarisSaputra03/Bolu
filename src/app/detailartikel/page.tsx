"use client";
import React from "react";
import Image from "next/image";
export default function Detail_Artikel() {
  const listArtikel = [
    {
      id: 1,
      img: "",
      title: "",
      categori: "",
      date: "",
      description: "",
    },
  ];
  return (
    <div>
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap w-full mt-20">
          <Image
            className="rounded-lg"
            width={1200}
            height={500}
            src="/img/kuliner.jpeg"
            alt=""
          />
        </div>
      </div>
      <div className="container px-5 mx-auto py-5">
        <div className="flex">
          <p className="text-amber-900 font-semibold">culinary</p>
          <p className="text-gray-500 font-semibold">· 09 Aug 2022</p>
        </div>
        <div className="py-2">
          <h2 className="text-black font-bold text-3xl">Carney Co: Keunikan, Harga Menu, dan Lokasi</h2>
        </div>
        <div>
          <p>Carney Co: Keunikan, Harga Menu, dan Lokasi</p>
        </div>
      </div>
    </div>
  );
}
