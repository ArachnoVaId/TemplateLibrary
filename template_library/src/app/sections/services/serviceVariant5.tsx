"use client";
import { useRef } from "react";
import Image from "next/image";
import { FaArrowRight, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType, SwiperRef } from "swiper/react";

const data = [
  { image_src: "/image/service/service5/service5.png", type: "Beauty", title: "Title Product", descriptiion: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer." },
  { image_src: "/image/service/service5/service5.png", type: "Beauty", title: "Title Product", descriptiion: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer." },
  { image_src: "/image/service/service5/service5.png", type: "Beauty", title: "Title Product", descriptiion: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer." },
  { image_src: "/image/service/service5/service5.png", type: "Beauty", title: "Title Product", descriptiion: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer." },
]


interface cardProps {
  image_path: string;
  type: string;
  title: string;
  description: string;
}

function CardService({ image_path, type, title, description }: cardProps) {
  return (
    <div className="w-[22.104vw] h-[31.688vw] p-[0.5vw] font-roboto shadow-lg rounded-xl m-[1vw]">
      <Image alt="service image" src={image_path} width={10000} height={10000} className="w-[20.104vw] h-[11.458vw] mb-[1vw]" />
      <p className="font-bold text-[0.833vw] mb-[0.5vw]">{type}</p>
      <h1 className="font-bold text-[1.25vw] mb-[0.5vw]">{title}</h1>
      <p className="text-[0.938vw] mb-[2vw]">{description}</p>
      <button className="w-full flex items-center gap-x-[0.8vw] p-[1vw] text-[0.833vw] font-bold text-white bg-blue-500 rounded-md justify-center">
        <p>Button Text</p>
        <FaArrowRight />
      </button>
    </div>
  )
}

export default function Service5() {
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
        <h1 className="font-bold text-[2.917vw] gradient-text">Our Products</h1>
        <p className="text-[1.0416vw] text-[rgba(71,85,105,1)] w-[46.875vw]">
        Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
        </p>
      </div>
      {/* title */}

      {/* content */}
      <div className="ml-[4.166vw] mt-[2.6875vw] flex gap-x-[2vw] justify-between">
        <button onClick={handlePrev}>
          <FaChevronLeft className="text-[1.2vw]" />
        </button>
        <div className="w-[69.4791vw] flex gap-x-[0.9vw] p-[1vw]">
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
                <CardService type={d.type} title={d.title} description={d.descriptiion} image_path={d.image_src} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button onClick={handleNext}>
          <FaChevronRight className="text-[1.2vw]" />
        </button>
      </div>
      {/* content */}
    </section>
  );
}
