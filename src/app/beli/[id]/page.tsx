"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useParams } from "next/navigation";
export default function Beli() {
  const params = useParams();
  const [jumlahBeli, setJumlahBeli] = useState<number>(1);
  const [selectProduk, setSelectProduk] = useState<any>(null);
  const listProduct = [
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
  const filterProduk = (title: any) => {
    const filtered = listProduct.filter((item) => item.id.toString() === title);
    setSelectProduk(filtered[0]);
    console.log("chek");
    console.log(filtered);
  };
  useEffect(() => {
    filterProduk(params.id);
  }, []);
  console.log("check");
  console.log(params.id);
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          {/* <div>
            {listProduct.map((data: any, index) => (
            ))}
          </div> */}
          {selectProduk !== null ? 
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <Image width={400} height={400} src={selectProduk.img} alt="" />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 p-2">
                <h2 className="text-sm font-semibold text-amber-700">
                  BAKPIA KUKUS
                </h2>
                <h1 className="text-xl font-bold text-amber-900">{selectProduk.title}</h1>
                <p className="title-font font-bold text-2xl text-na">
                  Rp.{selectProduk.price}
                </p>
                <div>
                  <p>Kategori :{selectProduk.categori}</p>
                  <p>Berat : {selectProduk.berat}</p>
                </div>
                <p className="leading-relaxed text-sm w-80">{selectProduk.description}</p>
                <div className="py-2">
                  <p>Daya tahan produk 7 hari</p>
                </div>
              </div>
              <div className="fixed z-10 right-14 hidden space-x-8 sm:flex">
                <div className="py-2 px-5 rounded-lg border-2 bg-white border-amber-500">
                  <div>
                    <h1 className="font-semibold text-start text-sm">
                      Pilih Varian
                    </h1>
                  </div>
                  <div className="rtl">
                    <div className="pe-20 rounded-lg border-2 ">
                      <Image width={100} height={100} src={selectProduk.img} alt="" />
                    </div>
                  </div>
                  <div>
                    <h1 className="font-semibold text-start text-sm py-5">
                      Kuantitas
                    </h1>
                    <div className="flex gap-1 items-center justify-between">
                      <div className="flex gap-5 items-center ">
                        <div
                          onClick={() => {
                            if (jumlahBeli > 0) {
                              setJumlahBeli(jumlahBeli - 1);
                            }
                          }}
                        >
                          <AiOutlineMinus />
                        </div>
                        <p>{jumlahBeli}</p>
                        <div
                          onClick={() => {
                            setJumlahBeli(jumlahBeli + 1);
                          }}
                        >
                          <AiOutlinePlus />
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <p>Stok:</p>
                        <p>{selectProduk.stock - jumlahBeli}</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-2">
                    <h1 className="text-na font font-semibold">
                      Tambahkan catatan
                    </h1>
                  </div>
                  <div className="py-2">
                    <h1 className="font-bold">Sub Total</h1>
                    <p className="font-bold text-na">
                      Rp. {jumlahBeli * selectProduk.price}
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2 justify-center">
                    <button className="bg-na text-white py-2 px-8 rounded-full">
                      Beli Sekarang
                    </button>
                    <button className="bg-white flex text-na border-2 border-na py-2 px-8 rounded-full">
                      Beli Sekarang <AiOutlineShoppingCart size={25} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            : null
          }
          

          <div className="hidden space-x-8 sm:flex">
            <div className="lg:w-4/5 mx-auto flex flex-wrap py-5 font-bold">
              <div className="flex">
                <h1>Share:</h1>
                <div className="flex space-x-3">
                  <BsFacebook size={30} />
                  <AiFillTwitterCircle size={30} />
                  <AiFillInstagram size={30} />
                </div>
              </div>
            </div>
          </div>
          <div className="justify-center ml-72 hidden space-x-8 sm:flex">
            <div className="w-96">
              Saran Penyimpanan :
              <li>Hindari suhu panas dan matahari langsung</li>
              <li>Simpan di suhu ruang 25˚C atau lemari pendingin 5˚C</li>
              <li>Jangan letakkan box secara miring/berdiri</li>
              <li>Maksimal tumpukan 5 box</li>
            </div>
          </div>
          <div className="justify-center ml-72 hidden py-3 sm:flex">
            <div className="w-96">
              Ketentuan Pengiriman :
              <li>Pengiriman dilakukan setiap hari mulai Senin - Minggu</li>
              <li>
                Order masuk sebelum jam 14.00 order akan diproses H+2, order
                masuk setelahnya waktu pre order menjadi H+3
              </li>
              <li>Hanya berlaku unutk jenis pengiriman Next Day</li>
              <li>
                Ketidaksesuaian estimasi waktu kirim dari ekspedisi yang
                dipilih, bukan merupakan tanggung jawab penjual. Silahkan
                hubungi Customer Service dari Ekspedisi yang Anda pilih untuk
                mengetahui keberadaan paket.
              </li>
              <li>
                Harap untuk memvideokan sebelum dan saat membuka paket. Video
                digunakan sebagai bukti jika ada barang kurang/salah. Jika tidak
                ada bukti video maka tidak bisa kami proses pengembaliannya.
              </li>
            </div>
          </div>
          <div className="sm:hidden">
            <div className="text-sm">
              Saran Penyimpanan :
              <li>Hindari suhu panas dan matahari langsung</li>
              <li>Simpan di suhu ruang 25˚C atau lemari pendingin 5˚C</li>
              <li>Jangan letakkan box secara miring/berdiri</li>
              <li>Maksimal tumpukan 5 box</li>
            </div>
          </div>
          <div className="sm:hidden">
            <div className="text-sm">
              Ketentuan Pengiriman :
              <li>Pengiriman dilakukan setiap hari mulai Senin - Minggu</li>
              <li>
                Order masuk sebelum jam 14.00 order akan diproses H+2, order
                masuk setelahnya waktu pre order menjadi H+3
              </li>
              <li>Hanya berlaku unutk jenis pengiriman Next Day</li>
              <li>
                Ketidaksesuaian estimasi waktu kirim dari ekspedisi yang
                dipilih, bukan merupakan tanggung jawab penjual. Silahkan
                hubungi Customer Service dari Ekspedisi yang Anda pilih untuk
                mengetahui keberadaan paket.
              </li>
              <li>
                Harap untuk memvideokan sebelum dan saat membuka paket. Video
                digunakan sebagai bukti jika ada barang kurang/salah. Jika tidak
                ada bukti video maka tidak bisa kami proses pengembaliannya.
              </li>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
