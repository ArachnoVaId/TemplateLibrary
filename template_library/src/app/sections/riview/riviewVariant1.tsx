"use client";
import { useRef } from "react";
import Image from "next/image";
import {
  MdOutlineArrowCircleLeft,
  MdOutlineArrowCircleRight,
} from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType, SwiperRef } from "swiper/react";

// Define the type for the card data
interface iCard {
  desc: string;
  image_src: string;
  name: string;
  occupation: string;
}

// Define the data array with explicit types
const data: iCard[] = [
  {
    desc: "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
    image_src: "/image/riview/riview1/reviewer1.png",
    name: "Hellen Jummy",
    occupation: "Financial Counselor",
  },
  {
    desc: "Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.",
    image_src: "/image/riview/riview1/reviewer2.png",
    name: "Ralph Edwards",
    occupation: "Financial Counselor",
  },
  {
    desc: "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
    image_src: "/image/riview/riview1/reviewer3.png",
    name: "Hellena John",
    occupation: "Psychology Student",
  },
  {
    desc: "Sapien, sollicitudin et vitae id et laoreet sapien consectetur. Felis egestas egestas amet aliquam sit euismod. Pellentesque neque, sed ut volutpat. Ullamcorper in at nulla dignissim.",
    image_src: "/image/riview/riview1/reviewer4.png",
    name: "David Oshodi",
    occupation: "Manager",
  },
  {
    desc: "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
    image_src: "/image/riview/riview1/reviewer5.png",
    name: "Hellen Jummy",
    occupation: "Financial Counselor",
  },
];

// Card component with props typed using iCard
function Card({ desc, image_src, name, occupation }: iCard) {
  return (
    <div className="w-[21.4583vw] max-h-[38.229vw] font-roboto text-[0.9375vw] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] p-[1.666vw] bg-white rounded-md">
      <p className="mb-[1vw]">{desc}</p>
      <div className="flex gap-x-[0.5vw] items-center">
        <Image
          src={image_src}
          alt={`image review of ${name}`}
          width={10000}
          height={10000}
          className="w-[3.333vw] h-[3.333vw]"
        />
        <div className="w-full px-2">
          <h1 className="font-semibold">{name}</h1>
          <p className="text-[0.833vw] text-[rgba(71,85,105,1)]">
            {occupation}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Riview1() {
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
    <section className="bg-[rgba(246,248,247,1)] w-full py-[3.125vw]">
      {/* title */}
      <div className="flex justify-between items-center mx-[4.166vw]">
        <h1 className="font-roboto font-bold text-[2.916vw]">
          Apa Kata Pelanggan?
        </h1>
        <div className="flex gap-x-[1vw]">
          <button onClick={handlePrev}>
            <MdOutlineArrowCircleLeft
              size={"2.5vw"}
              className="text-[rgba(64,123,255,1)]"
            />
          </button>
          <button onClick={handleNext}>
            <MdOutlineArrowCircleRight
              size={"2.5vw"}
              className="text-[rgba(64,123,255,1)]"
            />
          </button>
        </div>
      </div>
      {/* title */}

      {/* content */}
      <div className="ml-[4.166vw] mt-[4.6875vw] pr-[2vw]">
        <Swiper
          ref={swiperRef}
          spaceBetween={50}
          slidesPerView={4}
          modules={[Navigation]}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
        >
          {data.map((d, index) => (
            <SwiperSlide key={index}>
              <Card
                desc={d.desc}
                image_src={d.image_src}
                name={d.name}
                occupation={d.occupation}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* content */}
    </section>
  );
}
