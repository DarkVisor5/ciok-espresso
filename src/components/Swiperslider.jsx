import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function SwiperSlider() {
  return (
    <div className="relative w-full max-w-[400px] mx-auto pt-6 pb-10"> {/* padding sopra e sotto */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {[
          { src: "./ciok_ginseng.png", alt: "Ciok Ginseng" },
          { src: "./ciok_pistacchio.png", alt: "Ciok Pistacchio" },
          { src: "./ciok_caffe.png", alt: "Ciok Caffè" },
          { src: "./ciok_nocciola.png", alt: "Ciok Nocciola" },
        ].map((item, i) => (
          <SwiperSlide key={i} className="flex justify-center items-center">
            <img src={item.src} alt={item.alt} className="max-h-96 object-contain" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

