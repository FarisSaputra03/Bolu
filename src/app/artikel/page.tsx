import React from 'react';
import Image from 'next/image';
const Page = () => {
  return (
    <div>
      <section className='text-gray-600 body-font' />
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap w-full mb-20'>
          <div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
            <h1 className='sm:text-3xl text-2xl font-bold title-font mb-2 text-amber-900'>
              Article
            </h1>
          </div>
        </div>
        <div className=' pb-5 border-gray-200 dark:border-gray-700'>
          <nav
            className='-mb-0.5 flex space-x-6'
            aria-label='Tabs'
            role='tablist'
          >
            <button
              type='button'
              className='font-bold px-5 rounded-full hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap hover:text-amber-800 bg-amber-100 text-amber-900 active'
              id='horizontal-alignment-item-1'
              data-hs-tab='#horizontal-alignment-1'
              aria-controls='horizontal-alignment-1'
              role='tab'
            >
              All
            </button>
            <button
              type='button'
              className='font-bold px-5 rounded-full hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap hover:text-amber-800 bg-amber-100 text-amber-900 active'
              id='horizontal-alignment-item-2'
              data-hs-tab='#horizontal-alignment-2'
              aria-controls='horizontal-alignment-2'
              role='tab'
            >
              Culinary
            </button>
            <button
              type='button'
              className='font-bold px-5 rounded-full hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4  inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap hover:text-amber-800 bg-amber-100 text-amber-900 active'
              id='horizontal-alignment-item-3'
              data-hs-tab='#horizontal-alignment-3'
              aria-controls='horizontal-alignment-3'
              role='tab'
            >
              Travel
            </button>
            <button
              type='button'
              className='font-bold px-5 rounded-full hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4  inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap hover:text-amber-800 bg-amber-100 text-amber-900 active'
              id='horizontal-alignment-item-3'
              data-hs-tab='#horizontal-alignment-3'
              aria-controls='horizontal-alignment-3'
              role='tab'
            >
              Experience
            </button>
            <button
              type='button'
              className='font-bold px-5 rounded-full hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4  inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap hover:text-amber-800 bg-amber-100 text-amber-900 active'
              id='horizontal-alignment-item-3'
              data-hs-tab='#horizontal-alignment-3'
              aria-controls='horizontal-alignment-3'
              role='tab'
            >
              Shopping
            </button>
            <button
              type='button'
              className='font-bold px-5 rounded-full hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4  inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap hover:text-amber-800 bg-amber-100 text-amber-900 active'
              id='horizontal-alignment-item-3'
              data-hs-tab='#horizontal-alignment-3'
              aria-controls='horizontal-alignment-3'
              role='tab'
            >
              Lifestyle
            </button>
            <button
              type='button'
              className='font-bold px-5 rounded-full hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4  inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap hover:text-amber-800 bg-amber-100 text-amber-900 active'
              id='horizontal-alignment-item-3'
              data-hs-tab='#horizontal-alignment-3'
              aria-controls='horizontal-alignment-3'
              role='tab'
            >
              Family
            </button>
          </nav>
        </div>
        <section className='text-gray-600 body-font overflow-hidden'>
          <div className='container px-5 py-24 mx-auto'>
            <div className='lg:w-4/5 mx-auto flex flex-wrap'>
              <Image width={400} height={400} src='/img/nyanyi.jpeg' alt='' />
              <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
                <h2 className='text-sm title-font text-gray-500 tracking-widest'>
                  Experience · 09 Jul 2023
                </h2>
                <h1 className='text-gray-900 text-3xl title-font font-bold mb-1'>
                  12 Tempat Karaoke Popular di Jogja, Beserta Info Fasilitas dan
                  Tarif
                </h1>
                <div className='flex mb-4'></div>
              </div>
            </div>
          </div>
        </section>
        <div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
          <h1 className='sm:text-3xl text-2xl font-bold title-font mb-2 text-amber-900'>
            Berita Terpopuler
          </h1>
        </div>
        <section className='text-gray-600 body-font'>
          <div className='container px-5 py-24 mx-auto'>
            <div className='flex flex-wrap -m-4'>
              <div className='p-4 card hover:shadow  md:w-1/3'>
                <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                  <Image
                    width={720}
                    height={400}
                    src='/img/makanan.jpeg'
                    alt=''
                  />
                  <div className='p-6'>
                    <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
                      . 09 Aug 2022
                    </h2>
                    <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                      13 Oleh-Oleh Khas Jogja Yang Banyak Direkomendasikan
                    </h1>
                  </div>
                </div>
              </div>
              <div className='p-4 card hover:shadow  md:w-1/3'>
                <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                  <Image
                    width={720}
                    height={400}
                    src='/img/makanan2.png'
                    alt=''
                  />
                  <div className='p-6'>
                    <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
                      . 01 Jun 2022
                    </h2>
                    <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                      10 Jajanan Tradisional Yogyakarta yang Legendaris
                    </h1>
                  </div>
                </div>
              </div>
              <div className='p-4 card hover:shadow  md:w-1/3'>
                <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                  <Image
                    width={720}
                    height={400}
                    src='/img/pemandangan.png'
                    alt=''
                  />
                  <div className='p-6'>
                    <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
                      . 31 Aug 2021
                    </h2>
                    <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                      10 Pantai Keren di Jogja Selain Parangtritis
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
          <h1 className='sm:text-3xl text-2xl font-bold title-font mb-2 text-amber-900'>
            Article Inspirational
          </h1>
        </div>
        <section className='text-gray-600 body-font'>
          <div className='container px-5 py-24 mx-auto'>
            <div className='flex flex-wrap -m-4'>
              <div className='p-4 card hover:shadow  md:w-1/3'>
                <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                  <Image
                    width={720}
                    height={400}
                    src='/img/menara.jpeg'
                    alt=''
                  />
                  <div className='p-6'>
                    <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
                      . 09 Aug 2022
                    </h2>
                    <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                      13 Oleh-Oleh Khas Jogja Yang Banyak Direkomendasikan
                    </h1>
                  </div>
                </div>
              </div>
              <div className='p-4 card hover:shadow  md:w-1/3'>
                <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                  <Image
                    width={720}
                    height={400}
                    src='/img/hormat.jpeg'
                    alt=''
                  />
                  <div className='p-6'>
                    <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
                      . 01 Jun 2022
                    </h2>
                    <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                      10 Jajanan Tradisional Yogyakarta yang Legendaris
                    </h1>
                  </div>
                </div>
              </div>
              <div className='p-4 card hover:shadow  md:w-1/3'>
                <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                  <Image
                    width={720}
                    height={400}
                    src='/img/rumah.jpeg'
                    alt=''
                  />
                  <div className='p-6'>
                    <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
                      . 31 Aug 2021
                    </h2>
                    <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                      10 Pantai Keren di Jogja Selain Parangtritis
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
          <h1 className='sm:text-3xl text-2xl font-bold title-font mb-2 text-amber-900'>
            Culinary
          </h1>
        </div>
        <div className='flex flex-wrap -m-4'>
          <div className='p-4 lg:w-1/2'>
            <div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
              <Image width={200} height={200} src='/img/kuliner.jpeg' alt='' />
              <div className='flex-grow sm:pl-8'>
                <h2 className='title-font font-medium text-lg text-gray-500'>
                  · 09 Aug 2022
                </h2>
                <p className='mb-4'>
                  Carney Co: Keunikan, Harga Menu, dan Lokasi
                </p>
              </div>
            </div>
          </div>
          <div className='p-4 lg:w-1/2'>
            <div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
              <Image width={200} height={200} src='/img/kuliner2.jpeg' alt='' />
              <div className='flex-grow sm:pl-8'>
                <h2 className='title-font font-medium text-lg text-gray-500'>
                  · 09 Aug 2022
                </h2>
                <p className='mb-4'>
                  Suwatu by Mil and Bay: Lebih dari Sekadar Wiasata Kuliner
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
          <h1 className='sm:text-3xl text-2xl font-bold title-font mb-2 text-amber-900'>
            Travel
          </h1>
        </div>
        <div className='flex flex-wrap -m-4'>
          <div className='p-4 lg:w-1/2'>
            <div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
              <Image width={200} height={200} src='/img/travel.jpeg' alt='' />
              <div className='flex-grow sm:pl-8'>
                <h2 className='title-font font-medium text-lg text-gray-500'>
                  · 09 Aug 2022
                </h2>
                <p className='mb-4'>
                  Monumen Jogja Kembali: Daya Tarik, Sejarah, dan Harga Tiket
                </p>
              </div>
            </div>
          </div>
          <div className='p-4 lg:w-1/2'>
            <div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
              <Image width={200} height={200} src='/img/travel2.jpeg' alt='' />
              <div className='flex-grow sm:pl-8'>
                <h2 className='title-font font-medium text-lg text-gray-500'>
                  · 03 Aug 2022
                </h2>
                <p className='mb-4'>
                  The Lost Word Castle, Wisata Negeri Dongeng di Yogyakarta
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:w-1/2 w-full pt-6 lg:mb-0'>
          <h1 className='sm:text-3xl text-2xl font-bold title-font mb-2 text-amber-900'>
            Experience
          </h1>
        </div>
        <div className='flex flex-wrap -m-4'>
          <div className='p-4 lg:w-1/2'>
            <div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
              <Image
                width={200}
                height={200}
                src='/img/experience.jpeg'
                alt=''
              />
              <div className='flex-grow sm:pl-8'>
                <h2 className='title-font font-medium text-lg text-gray-500'>
                  · 28 Jun 2022
                </h2>
                <p className='mb-4'>
                  4 Tempat Dinner Romantis di Jogja yang Syahdu
                </p>
              </div>
            </div>
          </div>
          <div className='p-4 lg:w-1/2'>
            <div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
              <Image
                width={200}
                height={200}
                src='/img/experience2.jpeg'
                alt=''
              />
              <div className='flex-grow sm:pl-8'>
                <h2 className='title-font font-medium text-lg text-gray-500'>
                  · 19 May 2022
                </h2>
                <p className='mb-4'>
                  7 Rekomendasi Board Game untuk Mengisi Liburan di Rumah
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:w-1/2 w-full pt-6 lg:mb-0'>
          <h1 className='sm:text-3xl text-2xl font-bold title-font mb-2 text-amber-900'>
            Shopping
          </h1>
        </div>
        <div className='flex flex-wrap -m-4'>
          <div className='p-4 lg:w-1/2'>
            <div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
              <Image width={200} height={200} src='/img/shoping.jpeg' alt='' />
              <div className='flex-grow sm:pl-8'>
                <h2 className='title-font font-medium text-lg text-gray-500'>
                  · 24 Jun 2022
                </h2>
                <p className='mb-4'>
                  Bakpia Kukus Tugu Buka di PRJ 2022, Jangan Sampai Kelewatan!
                </p>
              </div>
            </div>
          </div>
          <div className='p-4 lg:w-1/2'>
            <div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
              <Image width={200} height={200} src='/img/shoping2.jpeg' alt='' />
              <div className='flex-grow sm:pl-8'>
                <h2 className='title-font font-medium text-lg text-gray-500'>
                  · 01 Jun 2022
                </h2>
                <p className='mb-4'>
                  8 Toko Kosmetik dengan Harga Terjangkau di Yogyakarta
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:w-1/2 w-full pt-6 lg:mb-0'>
          <h1 className='sm:text-3xl text-2xl font-bold title-font mb-2 text-amber-900'>
            Lifestyle
          </h1>
        </div>
        <div className='flex flex-wrap -m-4'>
          <div className='p-4 lg:w-1/2'>
            <div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
              <Image width={200} height={200} src='/img/life.jpeg' alt='' />
              <div className='flex-grow sm:pl-8'>
                <h2 className='title-font font-medium text-lg text-gray-500'>
                  · 13 Jul 2022
                </h2>
                <p className='mb-4'>
                  7 Tips dan Cara Program Hamil Agar Punya Momongan
                </p>
              </div>
            </div>
          </div>
          <div className='p-4 lg:w-1/2'>
            <div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
              <Image width={200} height={200} src='/img/life2.jpeg' alt='' />
              <div className='flex-grow sm:pl-8'>
                <h2 className='title-font font-medium text-lg text-gray-500'>
                  · 13 Jul 2022
                </h2>
                <p className='mb-4'>
                  Bikin Bugar, Simak 7 Manfaat Bersepeda Bagi Kesehatan
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:w-1/2 w-full pt-6 lg:mb-0'>
          <h1 className='sm:text-3xl text-2xl font-bold title-font mb-2 text-amber-900'>
            Family
          </h1>
        </div>
        <div className='flex flex-wrap -m-4'>
          <div className='p-4 lg:w-1/2'>
            <div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
              <Image width={200} height={200} src='/img/family.jpeg' alt='' />
              <div className='flex-grow sm:pl-8'>
                <h2 className='title-font font-medium text-lg text-gray-500'>
                  · 19 May 2022
                </h2>
                <p className='mb-4'>
                Lebaran Anti Bosan, Walaupun di Rumah Saja
                </p>
              </div>
            </div>
          </div>
          <div className='p-4 lg:w-1/2'>
            <div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
              <Image width={200} height={200} src='/img/family2.jpeg' alt='' />
              <div className='flex-grow sm:pl-8'>
                <h2 className='title-font font-medium text-lg text-gray-500'>
                  · 09 Mar 2022
                </h2>
                <p className='mb-4'>
                Apa Itu Montessori? Kenali Manfaat dan Prinsipnya
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
