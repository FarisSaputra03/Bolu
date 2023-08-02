'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
const Content = () => {
  const [selectedTitle, setSelectedTitle] = useState('');

  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-8 mx-auto'>
        <div className='flex  flex-col text-center w-full mb-20'>
          <h1 className='sm:text-3xl text-2xl font-bold title-font mb-4 text-yellow-600'>
            OUR SIGNATURE BAKPIA KUKUS
          </h1>
        </div>
        <div className='border-b pb-5 border-gray-200 dark:border-gray-700'>
          <nav
            className='-mb-0.5 flex justify-center  space-x-6'
            aria-label='Tabs'
            role='tablist'
          >
            <button
              onClick={() => {
                setSelectedTitle('Bakpia Kukus');
              }}
              type='button'
              className={`font-bold px-5 rounded-full  hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap  ${
                selectedTitle == 'Bakpia Kukus'
                  ? 'bg-amber-900 text-amber-100'
                  : 'bg-amber-100 text-amber-900'
              }  active`}
              id='horizontal-alignment-item-1'
              data-hs-tab='#horizontal-alignment-1'
              aria-controls='horizontal-alignment-1'
              role='tab'
            >
              Bakpia Kukus
            </button>
            <button
              onClick={() => {
                setSelectedTitle('Bolu Kukus');
              }}
              type='button'
              className={`font-bold px-5  rounded-full hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4  inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap ${
                selectedTitle == 'Bolu Kukus'
                  ? 'bg-amber-900 text-amber-100'
                  : 'bg-amber-100 text-amber-900'
              }`}
              id='horizontal-alignment-item-2'
              data-hs-tab='#horizontal-alignment-2'
              aria-controls='horizontal-alignment-2'
              role='tab'
            >
              Bolu Kukus
            </button>
            <button
              type='button'
              className='font-bold px-5  rounded-full hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap hover:text-amber-800 bg-amber-100 text-amber-900'
              id='horizontal-alignment-item-3'
              data-hs-tab='#horizontal-alignment-3'
              aria-controls='horizontal-alignment-3'
              role='tab'
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
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <div className='card hover:shadow '>
              <Image width={720} height={400} src='/img/kukus1.jpeg' alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='card hover:shadow w-64 hover:w-72 '>
              <Image
                width={0}
                height={0}
                src='/img/kukus2.jpeg'
                alt=''
                sizes='1000vw'
                style={{
                  objectPosition: 'center',
                  objectFit: 'cover',
                  height: 'auto',
                  width: '100%',
                }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='card hover:shadow'>
              <Image width={720} height={400} src='/img/kukus3.jpeg' alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='card hover:shadow'>
              <Image width={720} height={400} src='/img/kukus4.jpeg' alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='card hover:shadow'>
              <Image width={720} height={400} src='/img/kukus5.jpeg' alt='' />
            </div>
          </SwiperSlide>
        </Swiper>
        <div
          id='horizontal-alignment-2'
          className='hidden'
          role='tabpanel'
          aria-labelledby='horizontal-alignment-item-2'
        >
          <p className='text-gray-500 dark:text-gray-400'>
            This is the{' '}
            <em className='font-semibold text-gray-800 dark:text-gray-200'>
              second
            </em>{' '}
            tab body.
          </p>
        </div>
        <div
          id='horizontal-alignment-3'
          className='hidden'
          role='tabpanel'
          aria-labelledby='horizontal-alignment-item-3'
        >
          <p className='text-gray-500 dark:text-gray-400'>
            This is the{' '}
            <em className='font-semibold text-gray-800 dark:text-gray-200'>
              third
            </em>{' '}
            tab body.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content;
