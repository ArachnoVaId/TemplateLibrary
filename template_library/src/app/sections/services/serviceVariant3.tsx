"use client";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaAccusoft } from "react-icons/fa";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { MdOutlineAutoGraph } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperType, SwiperRef } from "swiper/react";

interface CardProps {
  name: string;
  detail: string;
  icon: JSX.Element;
}

function ServiceCard({ name, detail, icon }: CardProps) {
  return (
    <div className="w-[19.427vw] h-[12.656vw] shadow-md py-[1.875vw] px-[2.135vw] rounded-lg">
      <div className="flex items-center gap-x-[0.8vw]">
        <div className="w-[2.5vw] h-[2.5vw] rounded-md flex items-center justify-center">
          {icon}
        </div>
        <h1 className="text-[1.25vw] font-bold">{name}</h1>
      </div>
      <p className="my-[1vw] text-[0.833vw] text-[rgba(100,100,100,1)]">{detail}</p>
      <a href="#" className="text-[0.938vw] text-blue-600 flex items-center gap-x-[1vw]">
        <p className="font-bold">Learn More</p>
        <FaChevronRight />
      </a>
    </div>
  );
}

export default function Service3() {
  const data: CardProps[] = [
    {
      name: "Interaction Design",
      detail: "Lessons on design that cover the most recent developments.",
      icon: <MdOutlineScreenshotMonitor className="text-[2.1vw]" />,
    },
    {
      name: "Interaction Design",
      detail: "Lessons on design that cover the most recent developments.",
      icon: <MdOutlineScreenshotMonitor className="text-[2.1vw]" />,
    },
    {
      name: "Interaction Design",
      detail: "Lessons on design that cover the most recent developments.",
      icon: <MdOutlineAutoGraph className="text-[2.1vw]" />,
    },
    {
      name: "Interaction Design",
      detail: "Lessons on design that cover the most recent developments.",
      icon: <MdOutlineAutoGraph className="text-[2.1vw]" />,
    },
    {
      name: "Interaction Design",
      detail: "Lessons on design that cover the most recent developments.",
      icon: <MdOutlineAutoGraph className="text-[2.1vw]" />,
    },
    {
      name: "Interaction Design",
      detail: "Lessons on design that cover the most recent developments.",
      icon: <MdOutlineAutoGraph className="text-[2.1vw]" />,
    },
  ];

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
    <section className="w-full min-h-[46.667vw] p-8 flex flex-col items-center bg-white text-gray-800 relative">
      {/* title */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-[1.25vw] text-[#4273CE]">Our Services</h1>
        <p className="font-bold mt-[1vw] w-[40vw] text-[1.875vw] text-[#161C2D] text-center">
          Fostering a playful & engaging learning environment
        </p>
      </div>
      {/* title */}

      {/* content */}
      <div className="w-[66.599vw] h-[12.656vw] mt-[3vw]">
        <Swiper
          ref={swiperRef}
          spaceBetween={50}
          slidesPerView={3}
          centeredSlides={true}
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
          }}
        >
          {data.map((d, index) => (
            <SwiperSlide key={index} className="p-[1.2vw]">
              <ServiceCard name={d.name} icon={d.icon} detail={d.detail} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* content */}

      {/* Navigation + Pagination Container */}
      <div className="flex items-center justify-center mt-[2vw]">
        {/* Prev Button */}
        <button
        className="mt-[0.2vw] mx-[0.9vw]"
          onClick={handlePrev}
        >
          <FaChevronLeft className="text-[1vw]" />
        </button>

        {/* Custom pagination */}
        <div className="swiper-pagination-custom text-center"></div>

        {/* Next Button */}
        <button
        className="mt-[0.2vw] mx-[0.9vw]"
          onClick={handleNext}
        >
          <FaChevronRight className="text-[1vw]" />
        </button>
      </div>
    </section>
  );
}
