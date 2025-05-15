// import React from 'react';

// const Hero = () => {
//     return (
//         <div>
//             <section id="center" class="center_h">
//                 <div class="center_hm pt-5 pb-5">
//                     <div class="container-xl">
//                         <div class="center_h1 row">
//                             <div class="col-md-7">
//                                 <div class="center_h1l">
//                                     <h2 class="text-white">Personal Education. <br /> Lifetime Success.</h2>
//                                     <p class="mt-3 text-light">The first thing to remember about success is that it is a process nothing more, nothing less. There is really no magic to it and it’s not reserved only for a select few people.</p>
//                                     <h6 class="mb-0 mt-4"><a class="button" href="/">Learn More</a></h6>
//                                 </div>
//                             </div>
//                             <div class="col-md-5">
//                                 <div class="center_h1r bg_brown p-4 rounded-3">
//                                     <h3 class="text-white">Get Started Here</h3>
//                                     <p class="text-light mt-3">The new way to find & book a high-quality sitter.</p>
//                                     <h6 class="text-white mb-2">Full Name</h6>
//                                     <input class="form-control" type="text" />
//                                     <h6 class="text-white mb-2 mt-3">Email Address</h6>
//                                     <input class="form-control" type="text" />
//                                     <h6 class="text-white mb-2 mt-3">Mobile Number</h6>
//                                     <input class="form-control" type="text" />
//                                     <p class="mt-3 text-light">What is your preferred method of contact?</p>
//                                     <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
//                                     <label class="form-check-label text-white mx-1" for="flexRadioDefault2">
//                                         Phone
//                                     </label>
//                                     <input class="form-check-input ms-3" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
//                                     <label class="form-check-label text-white mx-1" for="flexRadioDefault2">
//                                         Email
//                                     </label>
//                                     <h6 class="mb-0 mt-4"><a class="button_1" href="/">Book Now</a></h6>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Hero;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import '../../../Styles/component/home/hero.scss'
import { slides } from '../../../Data/HomeData';

const Hero = () => {


    return (
        <div className="hero-swiper">
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 4000 }}
                pagination={{ clickable: true }}
                loop={true}
                spaceBetween={30}
                slidesPerView={1}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="hero-slide" style={{ backgroundImage: `url(${slide.image})` }}>
                            <div className="overlay">
                                <h2>{slide.title}</h2>
                                <p>{slide.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Hero;
