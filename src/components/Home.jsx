import React from "react";
import Products from "./Products";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper";
function Home() {
  return (
    <div>
      <Swiper
      spaceBetween={30}
      centeredSlides={true}
      rewind={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
      >
        <SwiperSlide>
        <div className="card bg-dark text-black border-0">
        <img src="/assets/hero5.jpg" className="card-img" alt="..." height='550px'/>
        <div className="card-img-overlay d-flex flex-column justify-content-center"> 
        <div className="container">

          <h5 className="card-title display-3 fw-bold m-1">NEW SEASON ARRIVALS</h5>
          <p className="card-text lead fs-2">
            CHECK OUT ALL THE TRENDS
          </p>
          
        </div>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card bg-dark text-black border-0">
        <img src="/assets/hero1.jpg" className="card-img" alt="..." height='550px'/>
        </div>
        </SwiperSlide>
        <SwiperSlide><div className="card bg-dark text-black border-0">
        <img src="/assets/hero2.jpg" className="card-img" alt="..." height='550px'/>
        </div></SwiperSlide>
        <SwiperSlide><div className="card bg-dark text-black border-0">
        <img src="/assets/hero3.jpg" className="card-img" alt="..." height='550px'/>
        </div></SwiperSlide>
        <SwiperSlide><div className="card bg-dark text-black border-0">
        <img src="/assets/hero4.jpg" className="card-img" alt="..." height='550px'/>
        </div></SwiperSlide>
        
      </Swiper>
      <Products/>
    </div>
  );
}

export default Home;
