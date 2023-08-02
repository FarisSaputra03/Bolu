import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import Image from 'next/image';
const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <Image width={200} height={200} src='/img/lokasi.jpeg' alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <Image width={200} height={200} src='/img/pai.jpeg' alt='' />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
