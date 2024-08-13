"use client";
import { useRef } from "react";
import Image from "next/image";
import { LuChevronLeftCircle, LuChevronRightCircle } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType, SwiperRef } from "swiper/react";

const data = [
  { image_src: "/image/riview/riviewer2/riviewer.png", image_alt: "riviewer", },
  { image_src: "/image/riview/riviewer2/riviewer.png", image_alt: "riviewer", },
  { image_src: "/image/riview/riviewer2/riviewer.png", image_alt: "riviewer", },
  { image_src: "/image/riview/riviewer2/riviewer.png", image_alt: "riviewer", },
]

export default function Riview2() {
  const swiperRef = useRef<SwiperRef>(null);
  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <section className="bg-[rgba(246,248,247,1)] py-[3.125vw] flex flex-col justify-center items-center">
      {/* title */}
      <div className="mx-[4.166vw] text-center flex flex-col gap-y-[1vw]">
        <h1 className="text-[1.666vw] font-bold">Testimoni Pelanggan</h1>
        <p className="text-[1.0416vw]">
          Berikut adalah beberapa testimoni asli dari sebagian pelanggan kami.
          Geser ke kiri atau ke kanan untuk melihat keseluruhan testimoni
        </p>
      </div>
      {/* title */}

      {/* content */}
      <div className="ml-[4.166vw] mt-[4.6875vw] flex gap-x-[2vw] justify-between">
        <button onClick={handlePrev}>
          <LuChevronLeftCircle className="text-[2vw]" />
        </button>
        <div className="w-[69.4791vw] flex gap-x-[0.9vw]">
          <Swiper
            ref={swiperRef}
            spaceBetween={10}
            slidesPerView={3}
            modules={[Navigation]}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
          >
            {data.map((d, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={d.image_src}
                  alt={d.image_alt}
                  width={10000}
                  height={10000}
                  className="w-[23.157vw] h-[39.47916vw] object-fill"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button onClick={handleNext}>
          <LuChevronRightCircle className="text-[2vw]" />
        </button>
      </div>
      {/* content */}
    </section>
  );
}
