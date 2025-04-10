import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function SwiperSlider() {
  return (
    <div className="relative w-full max-w-[400px] h-[220px] sm:h-[260px] md:h-[300px] lg:h-[360px] xl:h-[400px] mx-auto">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {[
          { src: "./ciok_ginseng.png", alt: "Ciok Ginseng" },
          { src: "./ciok_pistacchio.png", alt: "Ciok Pistacchio" },
          { src: "./ciok_caffe.png", alt: "Ciok Caffè" },
          { src: "./ciok_nocciola.png", alt: "Ciok Nocciola" },
        ].map((item, i) => (
          <SwiperSlide key={i} className="flex justify-center items-center h-full">
            <img
              src={item.src}
              alt={item.alt}
              className="max-h-full object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
