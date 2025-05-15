import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import { testimonials } from '../../../Data/HomeData';



const TestimonialSwiper = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: 'auto', padding: '40px 20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>What People Say About Us</h2>
      <Swiper
      modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 2000 }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                background: '#f7f7f7',
                borderRadius: '10px',
                padding: '25px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '250px',
              }}
            >
              <p style={{ fontStyle: 'italic', marginBottom: '25px', fontSize: '1.1rem', lineHeight: '1.4' }}>
                "{t.message}"
              </p>
              <div>
                <h5 style={{ margin: '0 0 8px' }}>{t.name}</h5>
                <small style={{ color: '#555', fontWeight: '600' }}>{t.position}</small>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSwiper;
