'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';

const Tampilan = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <Image width={2000} height={1500} src='/img/lokasi.jpeg' alt='' />
      </SwiperSlide>
      <SwiperSlide><Image width={2000} height={1500} src='/img/pai.jpeg' alt='' /></SwiperSlide>
    </Swiper>
  );
};

export default Tampilan;
