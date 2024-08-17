"use client";
import { useRef } from "react";
import Image from "next/image";
import { FaArrowRight, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperType, SwiperRef } from "swiper/react";


interface cardProps{
  title: string;
  mainImageUrl: string;
  showImageUrl: string[];
  productName: string;
  desciption: string[];
}

function CardService({title, mainImageUrl, showImageUrl, productName, desciption}: cardProps) {
  return (
    <div>
      {/* card */}
        {/* title */}
        <h2 className="text-[rgba(206,66,68,1)] font-bold text-[2.083vw]">
          {title}
        </h2>
        {/* title */}

        {/* content */}
        <div className="flex gap-x-[1vw]">
          {/* images */}
          <div className="flex gap-x-[0.5vw]">
            <Image
              src={mainImageUrl}
              alt="service"
              width={10000}
              height={10000}
              className="w-[25vw] h-[25vw]"
            />
            <div className="flex flex-col gap-y-[1vw]">
              {showImageUrl.map((d, index) => (
                <Image
                  key={index}
                  src={d}
                  alt="service"
                  width={10000}
                  height={10000}
                  className="w-[9.844vw] h-[5.885vw]"
                />
              ))}
            </div>
          </div>
          {/* images */}

          {/* description */}
          <div className="flex flex-col w-[43.906vw]">
            <h2 className="text-[rgba(30,30,30,1)] font-bold text-[2.083vw]">
              {productName}
            </h2>
            <div className="flex flex-col gap-y-[3vw]">
              {desciption.map((d, index) => (
                <p className="text-[1.042vw] text-[rgba(56,56,56,1)]" key={index}>{d}</p>
              ))}
            </div>
          </div>
          {/* description */}
        </div>
      {/* card */}
    </div>
  );
}


const data = [
  {
    title: "Our Products 1",
    mainImageUrl: "/image/service/service4/service1.png",
    showImageUrl: [
      "/image/service/service4/show1.png",
      "/image/service/service4/show2.png",
      "/image/service/service4/show3.png",
    ],
    productName: "Fresh Bread",
    desciption: [
      "Lorem ipsum dolor sit amet consectetur. Bibendum nulla nibh felis mauris aliquam. Ut elit purus purus fusce. Gravida sollicitudin nibh cursus sit viverra. Mauris nibh ac vitae viverra est",
      "Sapien aliquam pellentesque nec gravida egestas iaculis molestie sed semper. Amet eleifend nisl sociis faucibus. Semper sit eros bibendum quisque purus mauris in tortor lacus. Id risus ac sed ipsum fames. Tincidunt eget eros est ut sollicitudin. Tincidunt ut viverra quis orci aliquet quam.",
    ],
  },
  {
    title: "Our Products 2",
    mainImageUrl: "/image/service/service4/service1.png",
    showImageUrl: [
      "/image/service/service4/show1.png",
      "/image/service/service4/show2.png",
      "/image/service/service4/show3.png",
    ],
    productName: "Fresh Bread",
    desciption: [
      "Lorem ipsum dolor sit amet consectetur. Bibendum nulla nibh felis mauris aliquam. Ut elit purus purus fusce. Gravida sollicitudin nibh cursus sit viverra. Mauris nibh ac vitae viverra est",
      "Sapien aliquam pellentesque nec gravida egestas iaculis molestie sed semper. Amet eleifend nisl sociis faucibus. Semper sit eros bibendum quisque purus mauris in tortor lacus. Id risus ac sed ipsum fames. Tincidunt eget eros est ut sollicitudin. Tincidunt ut viverra quis orci aliquet quam.",
    ],
  },
  {
    title: "Our Products",
    mainImageUrl: "/image/service/service4/service1.png",
    showImageUrl: [
      "/image/service/service4/show1.png",
      "/image/service/service4/show2.png",
      "/image/service/service4/show3.png",
    ],
    productName: "Fresh Bread",
    desciption: [
      "Lorem ipsum dolor sit amet consectetur. Bibendum nulla nibh felis mauris aliquam. Ut elit purus purus fusce. Gravida sollicitudin nibh cursus sit viverra. Mauris nibh ac vitae viverra est",
      "Sapien aliquam pellentesque nec gravida egestas iaculis molestie sed semper. Amet eleifend nisl sociis faucibus. Semper sit eros bibendum quisque purus mauris in tortor lacus. Id risus ac sed ipsum fames. Tincidunt eget eros est ut sollicitudin. Tincidunt ut viverra quis orci aliquet quam.",
    ],
  }
]

export default function Service4() {
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
    <section className="w-full aspect-[1920/1080] p-[3vw]">
      <div>
        <div className="bg-[rgba(255,237,223,1)] flex gap-x-[1vw] py-[2.125vw] px-[3.125vw] rounded-md">
          <button onClick={handlePrev}>
            <FaChevronLeft className="text-[1.2vw]" />
          </button>
          <Swiper
            ref={swiperRef}
            spaceBetween={10}
            slidesPerView={1}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            pagination={{
              clickable: true,
            }}
          >
            {data.map((d, index) => (
              <SwiperSlide key={index}>
                <CardService 
                  mainImageUrl={d.mainImageUrl}
                  showImageUrl={d.showImageUrl}
                  title={d.title} 
                  productName={d.productName} 
                  desciption={d.desciption}
                />
              </SwiperSlide>
            ))}
            {/* <SwiperSlide>
              <CardService />
            </SwiperSlide>
            <SwiperSlide>
              <CardService />
            </SwiperSlide> */}
          </Swiper>
          <button onClick={handleNext}>
            <FaChevronRight className="text-[1.2vw]" />
          </button>
        </div>
      </div>
    </section>
  );
}
