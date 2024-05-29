import React, { useEffect } from "react";
import { useSwiper } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import classes from "./Carousel.module.css";
import CarouselLeftNavigation from "../CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "../CarouselRightNavigation/CarouselRightNavigation";

function Controls({ data }) {
  let swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0);
  }, [data]);

  return <></>;
}

function Carousel({ data, renderComponent }) {
  const swiper = useSwiper();
  return (
    <div style={{position: "relative"}}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
       <Controls data={data}/>
        <CarouselRightNavigation />
        <CarouselLeftNavigation /> 
        <div className={classes["swiper-wrapper"]}>
        
          {data.map((item) => (
            <div>
              <SwiperSlide style={{ width: "fit-content" }}>
                {renderComponent(item)}
              </SwiperSlide>
            </div>
          ))}
        </div>
      </Swiper>
      
    </div>
  );
}

export default Carousel;
