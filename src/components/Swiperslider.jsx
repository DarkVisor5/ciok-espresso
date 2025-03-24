import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SwiperSlider() {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      centeredSlides={true}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      navigation={true}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img src="./ciok_ginseng.png" alt="Ciok Ginseng" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./ciok_pistacchio.png" alt="Ciok Pistacchio" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./ciok_caffe.png" alt="Ciok Caffè" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./ciok_nocciola.png" alt="Ciok Nocciola" />
      </SwiperSlide>
    </Swiper>
  );
}
