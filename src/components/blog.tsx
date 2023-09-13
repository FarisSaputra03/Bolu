import React from "react";
import Image from "next/image";
import "swiper/css";
const Blog = () => {
  const listBlog = [
    {
      img: "/img/hotel.jpeg",
      title: "Lifestyle . 09 Jul 2023",
      description:
        "7 Rekomendasi Apartemen di Jogja, Hunian Nyaman untuk Mahasiswa dan Wisatawan",
    },
    {
      img: "/img/wisata.jpeg",
      title: " Travel . 09 Jul 2023",
      description:
        " Wisata Panti Kesirat Jogja: Daya Tarik, Harga Tiket dan Fasilitas",
    },
    {
      img: "/img/perpus.jpeg",
      title: " Shopping . 09 Jul 2023",
      description:
        "10 Toko Buku di Yogyakarta yang hits dan Koleksi Terlengkap",
    },
    {
      img: "/img/hotel.jpeg",
      title: "Lifestyle . 09 Jul 2023",
      description:
        "7 Rekomendasi Apartemen di Jogja, Hunian Nyaman untuk Mahasiswa dan Wisatawan",
    },
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-yellow-600">
            Selalu Kangen Dengan Jogja
          </h1>
        </div>
        <div className="flex flex-wrap -m-4 ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {listBlog.map((data: any, index) => (
              <div
                key={index + 1}
                className="h-full border-2 group-hover:scale-110  card hover:shadow border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
              >
                <div className="w-full ">
                  <Image
                    width={0}
                    height={0}
                    src={data.img}
                    alt=""
                    sizes="1000vw"
                    style={{
                      objectPosition: "center",
                      objectFit: "cover",
                      height: "auto",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-xs title-font font-medium text-gray-400 mb-1">
                    {data.title}
                  </h2>
                  <h1 className="title-font text-sm font-medium text-gray-900 mb-3 ">
                    {data.description}
                  </h1>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="p-4  w-72">
            <div className="h-full border-2 card hover:shadow border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image width={720} height={400} src="/img/wisata.jpeg" alt="" />

              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Travel . 09 Jul 2023
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Wisata Panti Kesirat Jogja: Daya Tarik, Harga Tiket dan
                  Fasilitas
                </h1>
                <div className="flex items-center flex-wrap">
                  <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.2K
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="p-4 w-72 ">
            <div className="h-full border-2 border-gray-200 card hover:shadow border-opacity-60 rounded-lg overflow-hidden">
              <Image width={720} height={400} src="/img/perpus.jpeg" alt="" />

              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Shopping . 09 Jul 2023
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  10 Toko Buku di Yogyakarta yang hits dan Koleksi Terlengkap
                </h1>
                <div className="flex items-center flex-wrap ">
                  <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.2K
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <button className="flex mx-auto mt-20 rounded-full text-white font-bold bg-amber-950 border-0 py-2 px-8 focus:outline-none hover:bg-amber-900 text-lg">
          Lihat Semua Artikel
        </button>
      </div>
    </section>
  );
};

export default Blog;
