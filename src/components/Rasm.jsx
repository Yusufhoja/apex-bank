// import React from 'react'
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';

import './Rasm.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Rasm() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  const { t, i18n } = useTranslation();

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='slide1'><div className="section1-div">
            <p data-aos="fade-down">{t('h1')}</p>
            <h1 data-aos="zoom-in">{t('osgo')}</h1>
            <p data-aos="fade-up">{t('sms')}</p>
            <button className='btn' data-aos="fade-right" style={{fontSize:"18px"}}>{t("title")} <img style={{width:"25px"}} src="../right.svg" alt="" /></button>
          </div></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
