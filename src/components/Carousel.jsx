import React from 'react';
import { Pagination, EffectCreative, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/autoplay'
import 'swiper/css/effect-creative'

const Carousel = () => {
  return (
    <div className='carousel'>
      <Swiper
        slidesPerView={1}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-100%', 0, 0],
            opacity: 0,
          },
          next: {
            translate: ['100%', 0, 0],
            opacity: 0,
          }
        }}
        pagination={{ dynamicBullets: true }}
        autoplay={true}
        speed={1500}
        loop={true}
        modules={[Pagination, EffectCreative, Autoplay]}
        className='mySwiper'
      >
        <SwiperSlide className='slide1'>Marie-Élise G. Photography - Sallèles d'Aude</SwiperSlide>
        <SwiperSlide className='slide2'>Marie-Élise G. Photography - Sallèles d'Aude</SwiperSlide>
        <SwiperSlide className='slide3'></SwiperSlide>
        <SwiperSlide className='slide4'></SwiperSlide>
        <SwiperSlide className='slide5'></SwiperSlide>
        <SwiperSlide className='slide6'></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;