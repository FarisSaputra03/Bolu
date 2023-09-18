"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
export default function Detail_Artikel() {
  const params = useParams();
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectArtikel, setSelectArtikel] = useState<any>(null  );
  const listBlog = [
    {
      id: 1,
      categori: "Culinary",
      listContent: [
        {
          id: 1,
          img2: "/img/kuliner.jpeg",
          date2: "· 09 Aug 2022",
          categori: "Culinary",
          desc: "Carney Co: Keunikan, Harga Menu, dan Lokasi",
        },
        {
          id: 2,
          img2: "/img/kuliner2.jpeg",
          date2: "· 09 Aug 2022",
          categori: "Culinary",
          desc: "Suwatu by Mil and Bay: Lebih dari Sekadar Wiasata Kuliner",
        },
      ],
    },
    {
      id: 2,
      categori: "Travel",
      listContent: [
        {
          id: 3,
          img2: "/img/travel.jpeg",
          date2: "· 09 Aug 2022",
          categori: "Travel",
          desc: " Monumen Jogja Kembali: Daya Tarik, Sejarah, dan Harga Tiket",
        },
        {
          id: 4,
          img2: "/img/travel2.jpeg",
          date2: "· 03 Aug 2022",
          categori: "Travel",
          desc: " The Lost Word Castle, Wisata Negeri Dongeng di Yogyakarta",
        },
      ],
    },
    {
      id: 3,
      categori: "Experience",
      listContent: [
        {
          id: 5,
          img2: "/img/experience.jpeg",
          date2: "· 28 Jun 2022",
          categori: "Experience",
          desc: " 4 Tempat Dinner Romantis di Jogja yang Syahdu",
        },
        {
          id: 6,
          img2: "/img/experience2.jpeg",
          date2: "· 19 May 2022",
          categori: "Experience",
          desc: "7 Rekomendasi Board Game untuk Mengisi Liburan di Rumah",
        },
      ],
    },
    {
      id: 4,
      categori: " Shopping",
      listContent: [
        {
          id: 7,
          img2: "/img/shoping.jpeg",
          date2: " · 24 Jun 2022",
          categori: " Shopping",
          desc: "Bakpia Kukus Tugu Buka di PRJ 2022, Jangan Sampai Kelewatan!",
        },
        {
          id: 8,
          img2: "/img/shoping2.jpeg",
          date2: "· 01 Jun 2022",
          categori: " Shopping",
          desc: " 8 Toko Kosmetik dengan Harga Terjangkau di Yogyakarta",
        },
      ],
    },
    {
      id: 5,
      categori: "Lifestyle",
      listContent: [
        {
          id: 9,
          img2: "/img/life.jpeg",
          date2: " · 13 Jul 2022",
          categori: "Lifestyle",
          desc: "7 Tips dan Cara Program Hamil Agar Punya Momongan",
        },
        {
          id: 10,
          img2: "/img/life2.jpeg",
          date2: " · 13 Jul 2022",
          categori: "Lifestyle",
          desc: "  Bikin Bugar, Simak 7 Manfaat Bersepeda Bagi Kesehatan",
        },
      ],
    },
    {
      id: 6,
      categori: " Family",
      listContent: [
        {
          id: 11,
          img2: "/img/family.jpeg",
          date2: "· 19 May 2022",
          categori: " Family",
          desc: " Lebaran Anti Bosan, Walaupun di Rumah Saja",
        },
        {
          id: 12,
          img2: "/img/family2.jpeg",
          date2: " · 09 Mar 2022",
          categori: " Family",
          desc: " Apa Itu Montessori? Kenali Manfaat dan Prinsipnya",
        },
      ],
    },
  ];
  const filterArtikel = (id: any) => {
    // const filtered = listBlog.filter((item) => item.categori === title);
    // setListFiltered(filtered);
    let newBlog = [];
    for (let index = 0; index < listBlog.length; index++) {
      const element = listBlog[index];
      for (let index1 = 0; index1 < element.listContent.length; index1++) {
        const element1 = element.listContent[index1];
        newBlog.push(element1);
      }
    }
    const filtered = newBlog.filter((item) => item.id.toString() === id);
    setSelectArtikel(filtered[0]);
    console.log("chek");
    console.log(filtered);
  };
  useEffect(() => {
    filterArtikel(params.id);
  }, []);
  console.log("check");
  console.log(params.id);
  return (
    <div>
      {selectArtikel !== null ? (
        <div>
          <div className="container px-5 mx-auto">
            <div className="flex flex-wrap w-full mt-20">
              <Image
                className="rounded-lg"
                width={1200}
                height={500}
                src={selectArtikel.img2}
                alt=""
              />
            </div>
          </div>
          <div className="container px-5 mx-auto py-5">
            <div className="flex">
              <p className="text-amber-900 font-semibold">
                {selectArtikel.categori}
              </p>
              <p className="text-gray-500 font-semibold">
                {selectArtikel.date2}
              </p>
            </div>
            <div className="py-2">
              <h2 className="text-black font-bold text-3xl">
                {selectArtikel.desc}
              </h2>
            </div>
            <div>
              <p>{selectArtikel.desc}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
