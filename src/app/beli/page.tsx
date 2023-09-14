import React from "react";
import Image from "next/image";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
export default function Beli() {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              width={400}
              height={400}
              src="/img/coklat mini pack.jpeg"
              alt=""
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 p-2">
              <h2 className="text-sm font-semibold text-amber-700">
                BAKPIA KUKUS
              </h2>
              <h1 className="text-xl font-bold text-amber-900">
                Brownies Cokelat - Travel Pack
              </h1>
              <p className="title-font font-bold text-2xl text-na">
                Rp. 45.000
              </p>
              <div>
                <p>Kategori : Bakpia Kukus</p>
                <p>Berat : 300g</p>
              </div>
              <p className="leading-relaxed">
                Kemasan Travel Pack dengan isi 10 pcs Bagi pecinta cokelat, yuk
                nikmati kelezatan dan kelembutan Bakpia Kukus Tugu Jogja varian
                Brownies Cokelat. Pasta cokelatnya melimpah dan lumer di mulut.
                Pasti bikin kamu ketagihan!
              </p>
              <div className="py-2">
                <p>Daya tahan produk 7 hari</p>
              </div>
            </div>
            <div className="fixed z-10 right-14">
              <div className="py-2 px-5 rounded-lg border-2 bg-white border-amber-500">
                <div>
                  <h1 className="font-semibold text-start text-sm">
                    Pilih Varian
                  </h1>
                </div>
                <div className="rtl">
                  <div className="pe-20 rounded-lg border-2 ">
                  <Image
                    width={100}
                    height={100}
                    src="/img/coklat mini pack.jpeg"
                    alt=""
                  />
                  </div>
                </div>
                <div>
                  <h1 className="font-semibold text-start text-sm py-5">Kuantitas</h1>
                  <div className="flex gap-1 items-center justify-between">
                    <div className="flex gap-5 items-center ">
                    <AiOutlineMinus/>
                    <p>1</p>
                    <AiOutlinePlus/>
                    </div>
                    <div className="flex gap-3">
                      <p>Stok</p>
                      <p>0</p>
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <h1 className="text-na font font-semibold">Tambahkan catatan</h1>
                </div>
                <div className="py-2">
                  <h1 className="font-bold">Sub Total</h1>
                  <p className="font-bold text-black">Rp. 45.000</p>
                </div>
                <div className="flex flex-col space-y-2 justify-center">
                  <button className="bg-na text-white py-2 px-8 rounded-full">Beli Sekarang</button>
                  <button className="bg-white flex text-na border-2 border-na py-2 px-8 rounded-full">Beli Sekarang <AiOutlineShoppingCart size={25}/></button>
                </div>
              </div>
            </div>
          </div>
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
          <div className="justify-center ml-80 hidden space-x-8 sm:flex">
            <div>
              Saran Penyimpanan :
              <li>Hindari suhu panas dan matahari langsung</li>
              <li>Simpan di suhu ruang 25˚C atau lemari pendingin 5˚C</li>
              <li>Jangan letakkan box secara miring/berdiri</li>
              <li>Maksimal tumpukan 5 box</li>
            </div>
          </div>
          <div className="justify-center py-3 ml-96 hidden sm:flex">
            <div>
              Ketentuan Pengiriman :
              <li>Pengiriman dilakukan setiap hari mulai Senin - Minggu</li>
              <li>
                Order masuk sebelum jam 14.00 order akan diproses H+2, order
              </li>
              <li>Hanya berlaku unutk jenis pengiriman Next Day</li>
              <li>Ketidaksesuaian estimasi waktu kirim dari ekspedisi yang</li>
              <li>Harap untuk memvideokan sebelum dan saat membuka paket.</li>
            </div>
          </div>
          <div className="sm:hidden">
            <div>
              Saran Penyimpanan :
              <li>Hindari suhu panas dan matahari langsung</li>
              <li>Simpan di suhu ruang 25˚C atau lemari pendingin 5˚C</li>
              <li>Jangan letakkan box secara miring/berdiri</li>
              <li>Maksimal tumpukan 5 box</li>
            </div>
          </div>
          <div className="sm:hidden">
            <div>
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
