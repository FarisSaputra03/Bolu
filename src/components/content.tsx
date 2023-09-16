"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
const Content = () => {
  const [selectedTitle, setSelectedTitle] = useState("Bakpia Kukus");
  const [bakpiaKukus, setBakpiaKukus] = useState<boolean>(false);
  const [boluKukus, setBoluKukus] = useState<boolean>(false);
  const [listFiltered, setListFiltered] = useState<any[]>([]);
  const listFoto = [
    {
      id: 1,
      title: "Brownies Cokelat - Mini Pack",
      img: "/img/kukus1.jpeg",
      price: "24500",
      berat: "250g",
      description:
        "Kemasan Mini Pack dengan isi 5 pcs Bagi pecinta cokelat, yuk nikmati kelezatan dan kelembutan Bakpia Kukus Tugu Jogja varian Brownies Coklat. Pasta cokelatnya melimpah dan lumer di mulut. Pasti bikin kamu ketagihan!",
      categori: "Bakpia Kukus",
      stock: "97",
    },
    {
      id: 2,
      img: "/img/kukus2.jpeg",
      title: "Brownies Cokelat - Travel Pack",
      price: "45000",
      berat: "300g",
      description:
        "Kemasan Travel Pack dengan isi 10 pcs Bagi pecinta cokelat, yuk nikmati kelezatan dan kelembutan Bakpia Kukus Tugu Jogja varian Brownies Cokelat. Pasta cokelatnya melimpah dan lumer di mulut. Pasti bikin kamu ketagihan!",
      categori: "Bakpia Kukus",
      stock: "98",
      href: "/beli",
    },
    {
      id: 3,
      img: "/img/kukus3.jpeg",
      title: "Klepon - Travel Pack",
      price: "45000",
      berat: "300g",
      description:
        "Kemasan Travel Pack dengan isi 10 pcs Sing paling terbaru dan paling lokasl dari Bakpia Tugu Jogja, Bakpia Kukus Tugu Jogja Original Klepon. Dengan perpaduan bolu pandan dan manisnya gula merah bikin ngemil jajan lokal makin seru, lurr!.",
      categori: "Bakpia Kukus",
      stock: "98",
      href: "/beli",
    },
    {
      id: 4,
      img: "/img/kukus4.jpeg",
      title: "Original Kacang Hijau - Travel Pack",
      price: "45000",
      berat: "300g",
      description:
        "Kemasan Travel Pack dengan isi 10 pcs Bagi pecinta Kacang Hijau, yuk nikmati kelezatan dan kelembutan Bakpia Kukus Tugu Jogja varian Original Kacang Hijau. Pasta kacang hijaunya melimpah dan lumer di mulut. Pasti bikin kamu ketagihan!",
      categori: "Bakpia Kukus",
      stock: "98",
      href: "/beli",
    },
    {
      id: 5,
      img: "/img/kukus5.jpeg",
      title: "Original Cokelat - Travel Pack",
      price: "45000",
      berat: "300g",
      description:
        "Kemasan Travel Pack dengan isi 10 pcs Bagi pecinta cokelat, yuk nikmati kelezatan dan kelembutan Bakpia Kukus Tugu Jogja varian Original Cokelat. Pasta cokelatnya melimpah dan lumer di mulut. Pasti bikin kamu ketagihan!",
      categori: "Bakpia Kukus",
      stock: "98",
      href: "/beli",
    },
    {
      id: 6,
      img: "/img/bolu kukus.png",
      title: "Ampyang Kacang - Reguler Pack",
      price: "30000",
      berat: "550g",
      description:
        "Bolu Kukus Tugu Jogja Ampyang Kacang - 550gr Tekstur lembut bolu susu berpadu dengan aroma gula jawa ditambah topping kacang caramel dan cream gula jawa melimpah bikin makin sempurna. Sangat cocok untuk dinikmati bersama keluarga dan sahabat tersayang :)",
      categori: "Bolu Kukus",
      stock: "98",
      href: "/beli",
    },
    {
      id: 7,
      img: "/img/bolu kukus2.png",
      title: "Black Forest - Reguler Pack",
      price: "32000",
      berat: "550g",
      description:
        "Bolu Kukus Tugu Jogja Blackforest 550gr Paling terbaru dari Tugu Jogja~ Bolu Kukus Tugu Jogja Blackforest! Dengan perpaduan bolu yang lembut ditambah taburan cokelat yang mewah, bikin kamu merasakan sensasi kemewahan sultan lurr!",
      categori: "Bolu Kukus",
      stock: "98",
      href: "/beli",
    },
    {
      id: 8,
      img: "/img/bolu kukus3.png",
      title: "Cokelat - Reguler Pack",
      price: "30000",
      berat: "550g",
      description:
        "Rasa cokelat premium yang pas tidak kemanisan dan tekstur bolu yang moist dengan cream dan taburan keju bikin bolu cokelat kian nikmat. Sangat cocok untuk dinikmati bersama keluarga dan sahabat tersayang :)",
      categori: "Bolu Kukus",
      stock: "98",
      href: "/beli",
    },
    {
      id: 9,
      img: "/img/bolu kukus4.png",
      title: "Gambang - Reguler Pack",
      price: "30000",
      berat: "550g",
      description:
        "Bolu Kukus Tugu Jogja Gambang 550gr Daya tahan produk 4 hari.",
      categori: "Bolu Kukus",
      stock: "98",
      href: "/beli",
    },
    {
      id: 10,
      img: "/img/bolu kukus5.png",
      title: "Ketan Pandan - Reguler Pack",
      price: "30000",
      berat: "550g",
      description:
        "Kemasan Mini Pack dengan isi 5 pcs Bagi pecinta cokelat, yuk nikmati kelezatan dan kelembutan Bakpia Kukus Tugu Jogja varian Brownies Coklat. Pasta cokelatnya melimpah dan lumer di mulut. Pasti bikin kamu ketagihan!",
      categori: "Bolu Kukus",
      stock: "98",
      href: "/beli",
    },
    {
      id: 11,
      img: "/img/bolu.png",
      title: "Chiffon Pandan",
      price: "30000",
      berat: "350g",
      description:
        "Chiffon Keju yang lembut dengan rasa pandan yang meresap di setiap gigitan. Rasanya yang lezat dan bentuknya yang cantik nan elegan cocok untuk menjadi sajian event penting, souvenir maupun snack bersama keluarga tercinta :)",
      categori: "Chiffon Cake",
      stock: "98",
      href: "/beli",
    },
  ];
  const filterProduk = (title: string) => {
    const filtered = listFoto.filter((item) => item.categori === title);
    setListFiltered(filtered);
  };
  useEffect(() => {
    filterProduk(selectedTitle);
  }, []);

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
                filterProduk("Bakpia Kukus");
                // setBakpiaKukus(false);
                // setBoluKukus(false);
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
                filterProduk("Bolu Kukus");
                // setBoluKukus(true);
                // setBakpiaKukus(true);
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
                setSelectedTitle("Chiffon Cake");
                filterProduk("Chiffon Cake");
              }}
              type="button"
              className={`font-bold px-3 py-2 rounded-full items-center gap-2 text-xs ${
                selectedTitle == "Chiffon Cake"
                  ? "bg-amber-900 text-amber-100"
                  : "bg-amber-100 text-amber-900"
              }`}
              id="horizontal-alignment-item-3"
              data-hs-tab="#horizontal-alignment-3"
              aria-controls="horizontal-alignment-3"
              role="tab"
            >
              Chiffon Cake
            </button>
          </nav>
        </div>

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
              {listFiltered.map((data: any, index) => (
                <SwiperSlide
                  key={index + 1}
                  className="card hover:shadow flex "
                >
                  <Link href={`/beli/${data.id}`}>
                    <Image
                      width={720}
                      height={400}
                      src={data.img}
                      alt="Bolu Kukus"
                    />
                    <div className="flex justify-center">
                      <button
                        onClick={() => {
                          window.location.href = data.href;
                        }}
                        className="font-bold text-amber-900 py-2 px-5"
                      >
                        {data.title}
                      </button>
                    </div>
                  </Link>
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
      </div>
      {/* {bakpiaKukus !== null && boluKukus == true ? (
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
      ) : null} */}
    </section>
  );
};

export default Content;
